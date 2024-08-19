import { useMemo, useState } from "react";
import { Button, Layout, Space, Form, Divider, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import SubTitle from "../../../../uiComponent/subTitle/SubTitle";
import DataRenderer, {
  DataRendererContent,
} from "../../../../uiComponent/detail/DataRenderer";

export default function PaymentConfirmation() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handlePayment = (values: any) => {
    // Mock backend reset password logic
    console.log("Resetting password with:", values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100000);
    navigate("/payment");

    // Navigate to login page or show a success message
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
      {
        label: "",
        value: (
          <Button
            style={{ height: 30, width: 90 }}
            onClick={() => navigate("/member-top-up")}
          >
            Top Up
          </Button>
        ),
      },
      {
        label: "Tipe Mesin",
        value: "Dryer",
      },
    ];
  }, [navigate]);

  return (
    <Layout.Content style={{ padding: "0 20px", height: "100%" }}>
      <SubTitle subTitle="Pembayaran" />
      <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
        <Form
          onFinish={handlePayment}
          style={{ width: "100%" }}
          labelCol={{ span: 17 }}
          wrapperCol={{ span: 17 }}
          labelAlign={"left"}
          colon={false}
        >
          <DataRenderer content={data} />
          <Form.Item label="Waktu" name="waktu">
            <Select
              options={[
                { value: "6", label: "6 min" },
                { value: "24", label: "24 min" },
              ]}
            />
          </Form.Item>

          <Space
            direction="horizontal"
            size="large"
            style={{ width: "100%", marginTop: 20 }}
          >
            <Button
              type="primary"
              style={{ flex: 1 }}
              htmlType="submit"
              loading={loading}
            >
              Bayar
            </Button>
            <Button
              type="primary"
              style={{ flex: 1 }}
              danger={true}
              onClick={() => navigate("/")}
            >
              Log Out
            </Button>
          </Space>
          <Space
            direction="vertical"
            size="small"
            style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
          >
            <Divider />
            <Link
              to="/transaction-history"
              style={{
                display: "block",
                textAlign: "left",
                margin: "10px 0",
                color: "#1890ff",
              }}
            >
              Tampilkan histori transaksi
            </Link>
          </Space>
        </Form>
      </div>
    </Layout.Content>
  );
}
