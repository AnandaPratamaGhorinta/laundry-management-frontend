import React, { useState } from "react";
import { Button, Input, Layout, Space, Divider, Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import SubTitle from "../../uiComponent/subTitle/SubTitle";

const MemberLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const handleLogin = (values: any) => {
    // Mock backend login logic
    console.log("Logging in with:", values);
    // Navigate to a different page on successful login
    navigate("/payment-confirmation");
  };

  return (
    <Layout.Content style={{ padding: "0 20px", height: "100%" }}>
      <SubTitle subTitle="Login" />
      <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
        <Form
          onFinish={handleLogin}
          style={{ width: "100%" }}
          labelCol={{ span: 8 }} // Adjust the label width
          wrapperCol={{ span: 16 }} // Adjust the input field width
          labelAlign={"left"}
          colon={false}
        >
          <Form.Item
            label="No. Handphone"
            name="phoneNumber"
            rules={[
              { required: true, message: "Please input your Phone Number!" },
            ]}
          >
            <Input
              placeholder="No. Handphone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="PIN"
            name="PIN"
            rules={[{ required: true, message: "Please input your PIN!" }]}
          >
            <Input.Password placeholder="PIN" />
          </Form.Item>
          <Form.Item>
            <Space
              direction="horizontal"
              size="large"
              style={{ width: "100%", marginTop: 20 }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Login
              </Button>
              <Button style={{ width: "100%" }} onClick={() => navigate("/")}>
                Back
              </Button>
            </Space>
          </Form.Item>
          <Divider />
          <Space
            direction="vertical"
            size="small"
            style={{ width: "100%", textAlign: "center" }}
          >
            <Link
              to="/registration"
              style={{ display: "block", margin: "10px 0", color: "#FB0000" }}
            >
              Klik Disini Untuk Registrasi
            </Link>
            {phoneNumber !== "" ? (
              <Link
                to="/reset-pin"
                state={{ phoneNumber: phoneNumber }}
                style={{ display: "block", margin: "10px 0", color: "#1890ff" }}
              >
                Klik Disini Jika Anda Lupa PIN
              </Link>
            ) : null}
          </Space>
        </Form>
      </div>
    </Layout.Content>
  );
};

export default MemberLoginPage;
