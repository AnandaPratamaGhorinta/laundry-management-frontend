import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button, notification } from "antd";
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
  details: {
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginTop: 20,
  },
});

export default function MachineEditReview() {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state as any;

  const handleSubmit = () => {
    setTimeout(() => {
      notification.success({
        message: "Machine Edited",
        description: "The machine has been successfully Edited.",
        placement: "topRight",
      });
      navigate("/machine/edit/success", { state: { data: data } });
    }, 1000);
  };

  return (
    <div className={classes.container}>
      <h2>Machine Edit Review</h2>
      <Card className={classes.card}>
        <DataCard isNew={true}>
          <MachineSummary data={data} />
        </DataCard>
        <DataCard isNew={false}>
          <MachineSummary data={data} />
        </DataCard>
        <div className={classes.buttonContainer}>
          <Button
            onClick={() => navigate("/machine/edit/input")}
            type="default"
          >
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
