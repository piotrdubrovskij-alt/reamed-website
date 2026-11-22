// Waits until a commit pushed to main is actually live on reamed.lt. Used by .github/workflows/indexnow.yml.
//
//   node scripts/wait-for-deploy.mjs build-id                 prints the Next.js build id reamed.lt serves now
//   node scripts/wait-for-deploy.mjs wait <sha> <build-id>    waits for Cloud Build on <sha> to succeed, then for
//                                                             reamed.lt to serve a build other than <build-id>
//
// Fails loudly instead of guessing: a failed Cloud Build, or a build that finished while the site still serves
// the old version (CLAUDE.md: on 7.11.2026 Cloud Run traffic was pinned to one revision), stops the workflow and
// GitHub emails the repository owner. `wait` needs GITHUB_TOKEN and GITHUB_REPOSITORY (set by GitHub Actions).
const SITE = process.env.DEPLOY_CHECK_SITE || "https://reamed.lt/"; // override only for a local test
const MINUTE = 60_000;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function liveBuildId() {
  const res = await fetch(SITE, { headers: { "User-Agent": "reamed-deploy-check" }, signal: AbortSignal.timeout(20000) });
  if (!res.ok) throw new Error(`${SITE}: ${res.status}`);
  const html = await res.text();
  // App Router pages carry the build id in the inline flight data: \"b\":\"<id>\"
  const id = html.match(/\\"b\\":\\"([\w-]{8,})\\"/)?.[1] ?? html.match(/"buildId":"([\w-]{8,})"/)?.[1];
  if (!id) throw new Error("build id not found in the home page HTML (Next.js output changed?)");
  return id;
}

async function cloudBuildRun(sha) {
  const res = await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/commits/${sha}/check-runs`, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  if (!res.ok) throw new Error(`GitHub check runs: ${res.status} ${await res.text()}`);
  const { check_runs } = await res.json();
  // The trigger «cloudrun-reamed-site-europe-west1-…» reports through Google Cloud Developer Connect.
  return check_runs.find((r) => r.app?.slug === "google-cloud-developer-connect" || r.name.startsWith("cloudrun-reamed-site"));
}

const [mode, sha, before] = process.argv.slice(2);

if (mode === "build-id") {
  console.log(await liveBuildId());
} else if (mode === "wait" && sha) {
  const start = Date.now();

  for (;;) {
    const run = await cloudBuildRun(sha);
    if (run?.status === "completed") {
      if (run.conclusion !== "success") throw new Error(`Cloud Build on ${sha}: ${run.conclusion}. The site was not updated.`);
      console.log(`Cloud Build finished: ${run.name}`);
      break;
    }
    if (!run && Date.now() - start > 10 * MINUTE) throw new Error(`Cloud Build did not start for ${sha} in 10 minutes.`);
    if (Date.now() - start > 30 * MINUTE) throw new Error(`Cloud Build on ${sha} still running after 30 minutes.`);
    await sleep(20_000);
  }

  const built = Date.now();
  for (;;) {
    const id = await liveBuildId().catch((err) => (console.log(err.message), null));
    if (id && id !== before) {
      console.log(`reamed.lt serves the new build ${id} (was ${before || "unknown"})`);
      break;
    }
    if (Date.now() - built > 10 * MINUTE) {
      throw new Error(
        `Cloud Build succeeded, but reamed.lt still serves build ${before} after 10 minutes. ` +
          "Check that Cloud Run sends all traffic to the latest revision: " +
          "gcloud run services update-traffic reamed-site --to-latest --region europe-west1",
      );
    }
    await sleep(20_000);
  }
} else {
  console.error("usage: node scripts/wait-for-deploy.mjs build-id | wait <sha> <build-id>");
  process.exit(2);
}
