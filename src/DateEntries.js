import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  entryList: {
    paddingInlineStart: "20px",

    overflow: "hidden",
  },
  date: {
    position: "relative",
    width: "auto",
    height: "100%",

    color: (props) => (props.color ? props.color : "#FFF"),
    margin: "3px 0",

    lineHeight: "1.5em",
  },
  entry: {
    margin: "1%",
    textDecoration: "underline",
    color: (props) => (props.color ? props.color : "#FFF"),

    textOverflow: "ellipsis",

    "&:hover": {
      fontWeight: "bold",
      color: (props) => (props.hoverColor ? props.color : "#EEE"),
    },
  },
});

const DateEntries = (props) => {
  const classes = useStyles({ color: props.color, wrap: props.wrap, ...props });

  return <ul className={classes.entryList}>{props.children}</ul>;
};

const DateEntry = (props) => {
  const classes = useStyles(props);

  return (
    <>
      <li className={classes.date}>
        {props.date}:<br></br>
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.entry}
        >
          {props.entry}
        </a>
      </li>
    </>
  );
};

export { DateEntries, DateEntry };
