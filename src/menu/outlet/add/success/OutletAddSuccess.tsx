import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button } from "antd";
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
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
  },
});

export default function OutletAddSuccess() {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state as any;

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <h2>Outlet Add Success</h2>
        <OutletSummary data={data} />
        <div className={classes.buttonContainer}>
          <Button onClick={() => navigate("/outlet")} type="primary">
            Back to Outlet List
          </Button>
        </div>
      </Card>
    </div>
  );
}
