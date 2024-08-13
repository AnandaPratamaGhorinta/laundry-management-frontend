import { useMemo } from "react";
import DataRenderer, {
  DataRendererContent,
} from "../../../uiComponent/detail/DataRenderer";
import { MachineData } from "../../../services/dto/machine";

interface MachineSummaryProps {
  data?: MachineData;
}

export default function MachineSummary({ data }: MachineSummaryProps) {
  const content = useMemo<DataRendererContent[]>(() => {
    if (!data) {
      return [];
    }

    return [
      {
        label: "Outlet",
        value: data?.outlet,
      },
      {
        label: "Kode Mesin",
        value: data?.code,
      },
      {
        label: "Nama Mesin",
        value: data?.name,
      },
      {
        label: "Tipe Mesin",
        value: data?.type,
      },
    ];
  }, [data]);

  return <DataRenderer content={content} />;
}
