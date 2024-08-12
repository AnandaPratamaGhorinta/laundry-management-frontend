import React from "react";
import { Card, Tag } from "antd";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    position: "relative",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    marginBottom: 20,
  },
  tag: {
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 1,
  },
});

interface DataCardProps {
  children: React.ReactNode;
  isNew: boolean;
}

export function DataCard({ children, isNew }: DataCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Tag className={classes.tag} color="volcano">
        {isNew ? "New Data" : "Old Data"}
      </Tag>
      {children}
    </Card>
  );
}
