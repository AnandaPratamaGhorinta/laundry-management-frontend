import { useMemo } from "react";
import DataRenderer, {
  DataRendererContent,
} from "../../../uiComponent/detail/DataRenderer";

interface BranchSummaryProps {
  data?: any;
}

export default function BranchSummary({ data }: BranchSummaryProps) {
  const content = useMemo<DataRendererContent[]>(() => {
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
        value: data?.phoneNumber,
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
