import Page from "@/components/pages/jobs";
import { getOffers } from "@/lib/api";

export default async function JobsPage({
  searchParams: { page = 1, search = "" },
}) {
  const pageData = await getOffers({
    page: Number(page),
    search,
  });
  return <Page {...pageData} />;
}
