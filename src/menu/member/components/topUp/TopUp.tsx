import { useMemo } from "react";
import { Button, Layout, Space, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import SubTitle from "../../../../uiComponent/subTitle/SubTitle";
import DataRenderer, {
  DataRendererContent,
} from "../../../../uiComponent/detail/DataRenderer";

export default function TopUp() {
  const navigate = useNavigate();

  const handleTopUp = (values: any) => {
    console.log("Resetting password with:", values);
    navigate("/member-qr-scan");
  };

  const data = useMemo<DataRendererContent[]>(() => {
    return [
      {
        label: "No. Handphone",
        value: "0812312354332",
      },
      {
        label: "Sisa Saldo Anda",
        value: "Rp. 50.000",
      },
    ];
  }, []);

  return (
    <Layout.Content style={{ padding: "0 20px", height: "100%" }}>
      <SubTitle subTitle="Top Up" />
      <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
        <Form
          onFinish={handleTopUp}
          style={{ width: "100%" }}
          labelCol={{ span: 17 }}
          wrapperCol={{ span: 17 }}
          labelAlign={"left"}
          colon={false}
        >
          <DataRenderer content={data} />
          <Form.Item label="Tambah Saldo" name="saldo">
            <Input />
          </Form.Item>
          <Space
            direction="horizontal"
            size="large"
            style={{ width: "100%", marginTop: 20 }}
          >
            <Button type="primary" style={{ flex: 1 }} htmlType="submit">
              Top Up
            </Button>
            <Button
              style={{ flex: 1 }}
              onClick={() => navigate("/payment-confirmation")}
            >
              Kembali
            </Button>
          </Space>
          <Space
            direction="vertical"
            size="small"
            style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
          ></Space>
        </Form>
      </div>
    </Layout.Content>
  );
}
