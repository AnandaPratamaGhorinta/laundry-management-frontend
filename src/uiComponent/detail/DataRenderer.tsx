import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  detailRow: {
    display: "flex",
    flexDirection: "column", // Stack labels and values vertically on smaller screens
    marginBottom: "10px",
    "@media (min-width: 768px)": {
      flexDirection: "row", // Side-by-side on larger screens
    },
  },
  label: {
    fontWeight: "bold",
    marginBottom: "5px", // Space between label and value on smaller screens
    "@media (min-width: 768px)": {
      width: "150px",
      marginRight: "100px", // Adjust spacing on larger screens
      marginBottom: "0", // Remove space for side-by-side layout
    },
  },
  value: {
    flex: 1,
  },
});

export interface DataRendererContent {
  label: string;
  value: any;
}

interface DataRendererProps {
  content?: DataRendererContent[];
}

export default function DataRenderer({ content }: DataRendererProps) {
  const classes = useStyles();

  let result = content?.map((it, index) => (
    <div key={index} className={classes.detailRow}>
      <span className={classes.label}>{it?.label}</span>
      <span className={classes.value}>{it?.value}</span>
    </div>
  ));

  return <div>{result}</div>;
}
