import { useMemo } from "react";
import DataRenderer, {
  DataRendererContent,
} from "../../../uiComponent/detail/DataRenderer";
import { OutletData } from "../../../services/dto/outlet";

interface OutletSummaryProps {
  data?: OutletData;
}

export default function OutletSummary({ data }: OutletSummaryProps) {
  const content = useMemo<DataRendererContent[]>(() => {
    if (!data) {
      return [];
    }

    return [
      {
        label: "Kode",
        value: data?.code,
      },
      {
        label: "Nama",
        value: data?.name,
      },
    ];
  }, [data]);

  return <DataRenderer content={content} />;
}
