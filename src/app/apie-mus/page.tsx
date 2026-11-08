import InfoPageRoute from "@/components/InfoPageRoute";
import { apieMus } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ path: apieMus.path, ...apieMus.meta });

export default function Page() {
  return <InfoPageRoute page={apieMus} />;
}
