import React, { useState, useEffect } from "react";
import { Button, Input, Layout, Space, Typography, Form } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const { Text } = Typography;

const ResetPasswordPage: React.FC = () => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [countdown, setCountdown] = useState(15);
  const navigate = useNavigate();

  useEffect(() => {
    const timer =
      countdown > 0
        ? setInterval(() => setCountdown(countdown - 1), 1000)
        : null;
    return () => clearInterval(timer!);
  }, [countdown]);

  const handleSave = (values: any) => {
    // Mock backend reset password logic
    console.log("Resetting password with:", values);
    // Navigate to login page or show a success message
  };

  const location = useLocation();
  const { phoneNumber } = location.state as any;

  return (
    <Layout.Content style={{ padding: "0 20px", height: "100%" }}>
      <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
        <Form
          onFinish={handleSave}
          style={{ width: "100%" }}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 20 }}
          labelAlign={"left"}
          colon={false}
        >
          <Form.Item
            label="No. Handphone"
            name="phoneNumber"
            initialValue={phoneNumber}
            rules={[
              { required: true, message: "Please input your No. Handphone!" },
            ]}
          >
            <Input placeholder="No. Handphone" disabled={true} />
          </Form.Item>
          <Form.Item
            label="OTP"
            name="otp"
            rules={[{ required: true, message: "Please input the OTP!" }]}
          >
            <Input
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="PIN Baru"
            name="PIN"
            rules={[{ required: true, message: "Please input your new PIN!" }]}
          >
            <Input.Password
              placeholder="PIN"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Space
            direction="horizontal"
            size="large"
            style={{ width: "100%", marginTop: 20 }}
          >
            <Button type="primary" style={{ flex: 1 }} htmlType="submit">
              Save
            </Button>
            <Button style={{ flex: 1 }} onClick={() => navigate("/login")}>
              Back
            </Button>
          </Space>
          <Space
            direction="vertical"
            size="small"
            style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
          >
            <Text>Countdown: {countdown} seconds</Text>
            <Text>Check your WhatsApp message</Text>
          </Space>
        </Form>
      </div>
    </Layout.Content>
  );
};

export default ResetPasswordPage;