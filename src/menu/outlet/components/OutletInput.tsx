import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Card } from "antd";
import { createUseStyles } from "react-jss";
import { OutletData } from "../../../services/dto/outlet";

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

interface OutletInputProps {
  reviewRoute: string;
  title: string;
  initialData?: OutletData;
}

export function OutletInput({
  reviewRoute,
  title,
  initialData,
}: OutletInputProps) {
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
            label="Kode"
            name="code"
            rules={[{ required: true, message: "Tolong Input Kode Outlet" }]}
            className={classes.formItem}
          >
            <Input />
          </FormItem>
          <FormItem
            label="Nama"
            name="name"
            rules={[{ required: true, message: "Tolong Input Nama Outlet" }]}
            className={classes.formItem}
          >
            <Input />
          </FormItem>
          <div className={classes.buttonsContainer}>
            <Button onClick={() => navigate("/outlet")} type="default">
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
