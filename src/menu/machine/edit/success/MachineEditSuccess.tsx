import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button } from "antd";
import { createUseStyles } from "react-jss";
import { DataCard } from "../../../../uiComponent/dataCard/DataCard";
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

export default function MachineEditSuccess() {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state as any;

  return (
    <div className={classes.container}>
      <h2>Machine Edit Success</h2>
      <Card className={classes.card}>
        <DataCard isNew={true}>
          <MachineSummary data={data} />
        </DataCard>
        <DataCard isNew={false}>
          <MachineSummary data={data} />
        </DataCard>
        <div className={classes.buttonContainer}>
          <Button onClick={() => navigate("/machine")} type="primary">
            Back to Machine List
          </Button>
        </div>
      </Card>
    </div>
  );
}
