import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  attribution: {
    position: "absolute",
    left: "5vw",

    "@media (min-width: 1175px)": {
      left: "calc(50vw - 500px)",
    },

    bottom: 0,

    fontSize: "10px",
    lineHeight: "0px",
    "&>p,a": { color: "#777" },
  },
});

const Attribution = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.attribution}>
      <p>Created by Madeleine Hill, 2020</p>

      <p>
        Icons created by{" "}
        <a
          href="https://www.iconfinder.com/Zerg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kokota
        </a>
        .
      </p>
      <p>
        Used under a{" "}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Creative Commons License
        </a>
        .
      </p>
    </div>
  );
};

export default Attribution;
