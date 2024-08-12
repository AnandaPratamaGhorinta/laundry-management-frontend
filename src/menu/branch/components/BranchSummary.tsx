import { useMemo } from "react";
import DataRenderer, {
  DataRendererContent,
} from "../../../uiComponent/detail/DataRenderer";
import { BranchData } from "../../../services/dto/branch";

interface BranchSummaryProps {
  data?: BranchData;
}

export default function BranchSummary({ data }: BranchSummaryProps) {
  const content = useMemo<DataRendererContent[]>(() => {
    if (!data) {
      return [];
    }

    return [
      {
        label: "Code",
        value: data?.code,
      },
      {
        label: "Name",
        value: data?.name,
      },
      {
        label: "Description",
        value: data?.description,
      },
      {
        label: "Address",
        value: data?.address,
      },
      {
        label: "Phone Number",
        value: data?.phone_number,
      },
      {
        label: "Fax",
        value: data?.fax,
      },
      {
        label: "Email",
        value: data?.email,
      },
      {
        label: "City",
        value: data?.city,
      },
    ];
  }, [data]);

  return <DataRenderer content={content} />;
}
