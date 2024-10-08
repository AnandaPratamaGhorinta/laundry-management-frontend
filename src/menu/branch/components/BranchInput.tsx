import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Card } from "antd";
import { createUseStyles } from "react-jss";
import { BranchData } from "../../../services/dto/branch";

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

interface BranchInputProps {
  reviewRoute: string;
  title: string;
  initialData?: BranchData;
}

export function BranchInput({
  reviewRoute,
  title,
  initialData,
}: BranchInputProps) {
  const classes = useStyles();
  const navigate = useNavigate();

  // JSON data to be used as initial values

  const onFinish = (values: any) => {
    navigate(`${reviewRoute}`, { state: { branchData: values } });
  };

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <h2>{title}</h2>
        <Form
          layout="horizontal"
          onFinish={onFinish}
          initialValues={initialData}
          labelCol={{ span: 6 }} // Adjust the label width
          wrapperCol={{ span: 18 }} // Adjust the input field width
          labelAlign={"left"}
          colon={false}
        >
          <FormItem
            label="Code"
            name="code"
            rules={[
              { required: true, message: "Please enter the branch code" },
            ]}
            className={classes.formItem}
          >
            <Input />
          </FormItem>
          <FormItem
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please enter the branch name" },
            ]}
            className={classes.formItem}
          >
            <Input />
          </FormItem>
          <FormItem
            label="Description"
            name="description"
            className={classes.formItem}
          >
            <Input.TextArea rows={4} />
          </FormItem>
          <FormItem label="Address" name="address" className={classes.formItem}>
            <Input />
          </FormItem>
          <FormItem
            label="Phone Number"
            name="phoneNumber"
            className={classes.formItem}
            initialValue={initialData?.phone_number}
          >
            <Input />
          </FormItem>
          <FormItem label="Fax" name="fax" className={classes.formItem}>
            <Input />
          </FormItem>
          <FormItem
            label="Email"
            name="email"
            rules={[
              { type: "email", message: "Please enter a valid email address" },
            ]}
            className={classes.formItem}
          >
            <Input />
          </FormItem>
          <FormItem label="City" name="city" className={classes.formItem}>
            <Input />
          </FormItem>
          <div className={classes.buttonsContainer}>
            <Button onClick={() => navigate("/branch")} type="default">
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
