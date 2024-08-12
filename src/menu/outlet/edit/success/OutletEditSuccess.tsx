import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button } from "antd";
import { createUseStyles } from "react-jss";
import { DataCard } from "../../../../uiComponent/dataCard/DataCard";
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

export default function BranchEditSuccess() {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state as any;

  return (
    <div className={classes.container}>
      <h2>Outlet Edit Success</h2>
      <Card className={classes.card}>
        <DataCard isNew={true}>
          <OutletSummary data={data} />
        </DataCard>
        <DataCard isNew={false}>
          <OutletSummary data={data} />
        </DataCard>
        <div className={classes.buttonContainer}>
          <Button onClick={() => navigate("/outlet")} type="primary">
            Back to Outlet List
          </Button>
        </div>
      </Card>
    </div>
  );
}
