import { MachineData } from "../../../../services/dto/machine";
import { MachineInput } from "../../components/MachineInput";

export default function MachineEditInput() {
  const initialData: MachineData = {
    code: "001",
    name: "Machine 001",
    type: "Washer",
    outlet: "Outlet 001",
  };

  return (
    <MachineInput
      reviewRoute="/machine/edit/review"
      title="Machine Edit Input"
      initialData={initialData}
    />
  );
}
