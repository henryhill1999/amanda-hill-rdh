import React from "react";
import { createUseStyles } from "react-jss";

const borderColors = {
  "#40BFC1": "#86DDE2",
  "#F8A978": "#FFC5A1",
  "#FFC5A1": "#F8A978",
};

const useStyles = createUseStyles({
  square: {
    width: "100%",
    height: "100%",

    border: props =>
      !!props.borderColor
        ? props.borderColor
        : `8px solid ${borderColors[props.color]}`,

    gridArea: props => props.gridName,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  squareContentWrapper: {
    width: "100%",
    height: "100%",

    backgroundColor: props => props.color,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
});

const Square = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.square}>
      <div className={classes.squareContentWrapper}>{props.children}</div>
    </div>
  );
};

export default Square;
