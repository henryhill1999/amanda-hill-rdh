import React from "react";
import Loading from "./Loading";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    position: "relative",
    width: "auto",
    height: "100%",
    lineHeight: "1.5em",

    display: "block",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  content: {
    padding: "7% 5%",
    maxHeight: "86%",
    "&>h1": { margin: "0", padding: 0 },
    "&>p": { margin: "0", padding: "5px", paddingTop: "15px" },
  },
});

const TextCard = props => {
  const classes = useStyles(props);

  return props.loading ? (
    <Loading></Loading>
  ) : (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </div>
  );
};

export default TextCard;
