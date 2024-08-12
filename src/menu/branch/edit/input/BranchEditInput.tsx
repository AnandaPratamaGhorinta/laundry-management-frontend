import { BranchData } from "../../../../services/dto/branch";
import { BranchInput } from "../../components/BranchInput";

export default function BranchEditInput() {
  const initialData: BranchData = {
    code: "05",
    name: "Branch 05",
    description: "Desc 5",
    address: "jl sutomo no 5b",
    phone_number: "08134324234",
    fax: "65496786",
    email: "desc@gmail.com",
    city: "Jakarta",
    isActive: false,
  };

  return (
    <BranchInput
      reviewRoute="/branch/edit/review"
      title="Edit Branch"
      initialData={initialData}
    />
  );
}
