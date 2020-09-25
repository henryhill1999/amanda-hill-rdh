import React from "react";
import { createUseStyles } from "react-jss";
import ReactLoading from "react-loading";

const useStyles = createUseStyles({
  loading: {
    padding: "50px 0",
    margin: "0 5%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Loading = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.loading}>
      <ReactLoading type={"balls"} color="#fff" />
    </div>
  );
};

export default Loading;
