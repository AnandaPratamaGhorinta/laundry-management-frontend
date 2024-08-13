import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button } from "antd";
import { createUseStyles } from "react-jss";
import MachineSummary from "../../components/MachineSummary";

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

export default function MachineAddSuccess() {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state as any;

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <h2>Machine Add Success</h2>
        <MachineSummary data={data} />
        <div className={classes.buttonContainer}>
          <Button onClick={() => navigate("/machine")} type="primary">
            Back to Machine List
          </Button>
        </div>
      </Card>
    </div>
  );
}
