import Page from "@/components/pages/job";
import { getOffer } from "@/lib/api";

export default async function JobsPage({ params: { id = "" } }) {
  const pageData = await getOffer({ id });

  return <Page {...pageData} />;
}
