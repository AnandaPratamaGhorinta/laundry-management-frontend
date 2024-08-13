import { useNavigate } from "react-router-dom";
import { Card, Button, notification } from "antd";
import { createUseStyles } from "react-jss";
import MachineSummary from "../../components/MachineSummary";
import { MachineData } from "../../../../services/dto/machine";

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

export default function MachineDeleteReview() {
  const classes = useStyles();
  const navigate = useNavigate();

  const data: MachineData = {
    outlet: "Outlet 003",
    name: "Machine 3",
    code: "MCH03",
    type: "Dryer",
  };

  const handleSubmit = () => {
    setTimeout(() => {
      notification.success({
        message: "Machine Delete Review",
        description: "The Machine has been successfully deleted.",
        placement: "topRight",
      });
      navigate("/machine/delete/success", { state: { data: data } });
    }, 1000);
  };

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <h2>Review Delete Outlet</h2>
        <MachineSummary data={data} />
        <div className={classes.buttonContainer}>
          <Button onClick={() => navigate("/outlet")} type="default">
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
