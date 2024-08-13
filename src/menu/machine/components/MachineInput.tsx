import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Card, Select } from "antd";
import { createUseStyles } from "react-jss";
import { MachineData } from "../../../services/dto/machine";

const useStyles = createUseStyles({
  container: {
    padding: "20px",
    background: "#fff",
    minHeight: "100vh",
  },
  card: {
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
  formItem: {
    marginBottom: "15px",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginTop: "20px",
  },
});

const { Item: FormItem } = Form;

interface MachineInputProps {
  reviewRoute: string;
  title: string;
  initialData?: MachineData;
}

export function MachineInput({
  reviewRoute,
  title,
  initialData,
}: MachineInputProps) {
  const classes = useStyles();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    navigate(`${reviewRoute}`, { state: { data: values } });
  };

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <h2>{title}</h2>
        <Form
          layout="horizontal"
          onFinish={onFinish}
          initialValues={initialData}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          labelAlign={"left"}
          colon={false}
        >
          <FormItem
            label="Outlet"
            name="outlet"
            rules={[{ required: true, message: "Tolong Input Outlet" }]}
            className={classes.formItem}
          >
            <Select
              options={[
                { value: "Outlet 001", label: "Outlet 001" },
                { value: "Outlet 002", label: "Outlet 002" },
                { value: "Outlet 003", label: "Outlet 003" },
              ]}
            />
          </FormItem>
          <FormItem
            label="Kode Mesin"
            name="code"
            rules={[{ required: true, message: "Tolong Input Kode Machine" }]}
            className={classes.formItem}
          >
            <Input />
          </FormItem>
          <FormItem
            label="Nama Mesin"
            name="name"
            rules={[{ required: true, message: "Tolong Input Nama Machine" }]}
            className={classes.formItem}
          >
            <Input />
          </FormItem>
          <FormItem
            label="Tipe Mesin"
            name="type"
            rules={[{ required: true, message: "Tolong Input Tipe Mesin" }]}
            className={classes.formItem}
          >
            <Select
              options={[
                { value: "Washer", label: "Washer" },
                { value: "Dryer", label: "Dryer" },
              ]}
            />
          </FormItem>
          <div className={classes.buttonsContainer}>
            <Button onClick={() => navigate("/machine")} type="default">
              Back
            </Button>
            <Button type="primary" htmlType="submit">
              Confirm
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
