import { getContributionCalendar } from "@/lib/github";
import ContributionGraphClient from "./ContributionGraphClient";

export default async function ContributionGraph() {
  const weeks = await getContributionCalendar();

  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Contributions</h2>
      <ContributionGraphClient weeks={weeks} />
    </section>
  );
}
