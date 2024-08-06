import { createUseStyles } from "react-jss";
import { DataRendererContent } from "./WebDataRenderer";

const useStyles = createUseStyles({
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
});

interface DataRendererProps {
  content?: DataRendererContent[];
}

export default function DataRenderer({ content }: DataRendererProps) {
  const classes = useStyles();

  let result = content?.map((it) => {
    return (
      <div className={classes.detailRow}>
        <span className={classes.label}>{it?.label}</span>
        <span className={classes.value}>{it?.value}</span>
      </div>
    );
  });
  return <div>{result}</div>;
}
