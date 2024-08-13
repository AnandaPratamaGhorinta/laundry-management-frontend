import { useNavigate } from "react-router-dom";
import { Button, Card } from "antd";
import { createUseStyles } from "react-jss";
import { mockData } from "./mockData";
import MachineSummary from "../components/MachineSummary";

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
  detailRow: {
    display: "flex",
    marginBottom: "10px",
  },
  label: {
    width: "150px",
    fontWeight: "bold",
    marginRight: 150,
  },
  value: {
    flex: 1,
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginTop: "20px",
  },
});

export default function MachineDetail() {
  const classes = useStyles();
  const navigate = useNavigate();
  //   const { code } = useParams<{ code: string }>();

  // Mock data fetching
  const data = mockData.find((item) => item.code === "001");

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <h2>Machine Details</h2>
        <MachineSummary data={data} />
        <div className={classes.buttonsContainer}>
          <Button onClick={() => navigate("/machine")} type="default">
            Back
          </Button>
          <Button danger onClick={() => navigate(`/machine/delete/review`)}>
            Delete
          </Button>
          <Button
            onClick={() => navigate(`/machine/edit/input`)}
            type="primary"
          >
            Edit
          </Button>
        </div>
      </Card>
    </div>
  );
}
