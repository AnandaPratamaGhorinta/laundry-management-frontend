import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button, notification } from "antd";
import { createUseStyles } from "react-jss";
import OutletSummary from "../../components/OutletSummary";

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
  details: {
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  },
});

export default function OutletAddReview() {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state as any;

  const handleSubmit = () => {
    setTimeout(() => {
      notification.success({
        message: "Outlet Added",
        description: "The outlet has been successfully added.",
        placement: "topRight",
      });
      navigate("/outlet/add/success", { state: { data: data } });
    }, 1000);
  };

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <h2>Outlet Add Review</h2>
        <OutletSummary data={data} />
        <div className={classes.buttonContainer}>
          <Button onClick={() => navigate("/outlet/add/input")} type="default">
            Back
          </Button>
          <Button onClick={handleSubmit} type="primary">
            Submit
          </Button>
        </div>
      </Card>
    </div>
  );
}
