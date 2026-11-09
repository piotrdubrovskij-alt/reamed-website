import InfoPageRoute from "@/components/InfoPageRoute";
import { duk } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ path: duk.path, ...duk.meta });

export default function Page() {
  return <InfoPageRoute page={duk} />;
}
