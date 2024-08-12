import { useNavigate } from "react-router-dom";
import { Card, Button, notification } from "antd";
import { createUseStyles } from "react-jss";
import BranchSummary from "../../components/BranchSummary";
import { BranchData } from "../../../../services/dto/branch";

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

export default function BranchDeleteReview() {
  const classes = useStyles();
  const navigate = useNavigate();

  const branchData: BranchData = {
    code: "05",
    name: "Branch 05",
    description: "Desc 5",
    address: "jl sutomo no 5b",
    phone_number: "08134324234",
    fax: "65496786",
    email: "desc@gmail.com",
    city: "Jakarta",
    isActive: false,
  };

  const handleSubmit = () => {
    setTimeout(() => {
      notification.success({
        message: "Branch Deleted",
        description: "The branch has been successfully deleted.",
        placement: "topRight",
      });
      navigate("/branch/delete/success", { state: { branchData: branchData } });
    }, 1000);
  };

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <h2>Review Delete Branch</h2>
        <BranchSummary data={branchData} />
        <div className={classes.buttonContainer}>
          <Button onClick={() => navigate("/branch")} type="default">
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
