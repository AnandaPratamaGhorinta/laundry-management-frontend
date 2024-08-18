import React from "react";
import { useSubtitle } from "../subTitleProvider/SubTitleProvider";

interface HeaderProps {
  classes: Record<
    "header" | "title" | "subtitle" | "logo" | "titleContainer",
    string
  >;
}

const Header: React.FC<HeaderProps> = ({ classes }) => {
  const { subtitle } = useSubtitle();

  return (
    <header className={classes.header}>
      <div className={classes.titleContainer}>
        <img src="/coinLogo.png" alt="Coin Logo" className={classes.logo} />
        <div>
          <div className={classes.title}>Jakarta Coin Laundry</div>
          <div className={classes.subtitle}>{subtitle}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
