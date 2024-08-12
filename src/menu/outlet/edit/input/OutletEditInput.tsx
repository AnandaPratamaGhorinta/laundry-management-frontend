import { OutletData } from "../../../../services/dto/outlet";
import { OutletInput } from "../../components/OutletInput";

export default function OutletEditInput() {
  const initialData: OutletData = {
    code: "05",
    name: "Outlet 05",
  };

  return (
    <OutletInput
      reviewRoute="/outlet/edit/review"
      title="Outlet Edit Input"
      initialData={initialData}
    />
  );
}
