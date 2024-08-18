import { useNavigate } from "react-router-dom";
import { Button, Layout } from "antd";
import { createUseStyles } from "react-jss";
import SubTitle from "../../uiComponent/subTitle/SubTitle";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column", // Arrange buttons in a column
    justifyContent: "flex-end", // Align buttons to the bottom
    alignItems: "center", // Center buttons horizontally
    height: "100%",
    padding: "20px", // Add padding for spacing
  },
  button: {
    width: "200px", // Fixed width
    height: "60px", // Fixed height
    fontSize: "16px", // Font size
    margin: "10px", // Space around buttons
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Hide overflow
    textOverflow: "ellipsis", // Add ellipsis for overflow text
    whiteSpace: "nowrap", // Prevent text from wrapping
  },
});
export default function PaymentPage() {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Layout.Content style={{ padding: "0 50px", height: "100%" }}>
      <SubTitle subTitle="Pembayaran" />
      <div className={classes.container}>
        <Button
          className={classes.button}
          type="primary"
          onClick={() => navigate("/qris")}
        >
          QRIS
        </Button>
        <Button
          className={classes.button}
          type="primary"
          onClick={() => navigate("/login")}
        >
          E-wallet
        </Button>
      </div>
    </Layout.Content>
  );
}
