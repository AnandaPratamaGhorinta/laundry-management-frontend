import { Button, Layout, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import SubTitle from "../../../../uiComponent/subTitle/SubTitle";
import { useMemo } from "react";
import DataRenderer, {
  DataRendererContent,
} from "../../../../uiComponent/detail/DataRenderer";

const { Text } = Typography;

export default function Payment() {
  const navigate = useNavigate();

  const data = useMemo<DataRendererContent[]>(() => {
    return [
      {
        label: "No. Transaksi",
        value: "155234234325",
      },
      {
        label: "Tanggal Transaksi",
        value: "03 Agustus 2024 13:00",
      },
      {
        label: "Tipe Mesin",
        value: "Dryer",
      },
      {
        label: "Waktu",
        value: "24 min",
      },
      {
        label: "Total Pembayaran",
        value: "Rp. 10.000",
      },
    ];
  }, []);

  return (
    <Layout.Content style={{ padding: "0 20px", height: "100%" }}>
      <SubTitle subTitle="Pembayaran" />
      <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
        <Space
          direction="vertical"
          size="large"
          style={{ width: "100%", textAlign: "center", marginBottom: "30px" }}
        >
          <Text style={{ color: "green" }}>Pembayaran Berhasil</Text>
        </Space>
        <DataRenderer content={data} />
        <Space
          direction="horizontal"
          size="large"
          style={{ width: "100%", marginTop: 20 }}
        >
          <Button
            style={{ width: 100 }}
            onClick={() => navigate("/payment-confirmation")}
          >
            Kembali
          </Button>
        </Space>
      </div>
    </Layout.Content>
  );
}
