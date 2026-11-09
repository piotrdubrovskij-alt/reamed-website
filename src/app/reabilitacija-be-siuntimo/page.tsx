import InfoPageRoute from "@/components/InfoPageRoute";
import { reabilitacijaBeSiuntimo } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ path: reabilitacijaBeSiuntimo.path, ...reabilitacijaBeSiuntimo.meta });

export default function Page() {
  return <InfoPageRoute page={reabilitacijaBeSiuntimo} />;
}
