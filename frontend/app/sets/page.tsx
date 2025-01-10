import { getSets } from "@/api";
import { Set } from "@/types";
import { SetGrid } from "@/components/SetGrid";

export default async function SetsPage() {
  const sets: Set[] = await getSets();

  return (
    <div>
      <SetGrid sets = {sets} />
    </div>
  );
}
