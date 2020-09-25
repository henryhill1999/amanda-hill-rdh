import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  entryList: {
    paddingInlineStart: "20px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  date: {
    position: "relative",
    width: "auto",
    height: "100%",

    margin: "5px 0",

    lineHeight: "1.5em",
  },
  entry: {
    margin: "1%",
    textDecoration: "underline",
    whiteSpace: "noWrap",

    "&:hover": {
      fontWeight: "bold",
      fontSize: "1.1em",
    },
  },
});

const DateEntries = props => {
  const classes = useStyles(props);

  return <ul className={classes.entryList}>{props.children}</ul>;
};

const DateEntry = props => {
  const classes = useStyles(props);

  return (
    <>
      <li className={classes.date}>{props.date}:</li>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.entry}
      >
        {props.entry}
      </a>
    </>
  );
};

export { DateEntries, DateEntry };
