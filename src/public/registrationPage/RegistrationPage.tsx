import React from "react";
import { Button, Input, Layout, Space, Form } from "antd";
import { useNavigate } from "react-router-dom";

const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = (values: any) => {
    // Mock backend registration logic
    console.log("Registering with:", values);
    // Navigate to a different page on successful registration
  };

  return (
    <Layout.Content style={{ padding: "0 20px", height: "100%" }}>
      <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
        <Form
          onFinish={handleRegister}
          style={{ width: "100%" }}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 18 }} // Adjust the input field width
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
            <Input placeholder="No. Handphone" />
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
              <Button type="primary" htmlType="submit" style={{ flex: 1 }}>
                Register
              </Button>
              <Button style={{ flex: 1 }} onClick={() => navigate("/login")}>
                Back
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </Layout.Content>
  );
};

export default RegistrationPage;
