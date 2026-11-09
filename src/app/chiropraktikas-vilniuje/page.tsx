import InfoPageRoute from "@/components/InfoPageRoute";
import { chiropraktikasVilniuje } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ path: chiropraktikasVilniuje.path, ...chiropraktikasVilniuje.meta });

export default function Page() {
  return <InfoPageRoute page={chiropraktikasVilniuje} />;
}
