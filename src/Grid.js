import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  grid: {
    minHeight: "80vh",
    height: "fit-content",
    maxHeight: "600px",

    maxWidth: "1000px",

    fontSize: "11px",

    backgroundColor: "#FCF9EA",

    display: "grid",
    gridGap: 30,

    padding: 30,
    marginBottom: "30px",

    gridTemplateColumns: "repeat(10, 1fr)",
    gridTemplateRows: "repeat(8, 1fr)",

    gridTemplateAreas:
      "'profile profile profile welcome welcome welcome welcome podcast podcast podcast ' " +
      "'profile profile profile welcome welcome welcome welcome podcast podcast podcast ' " +
      "'profile profile profile welcome welcome welcome welcome podcast podcast podcast ' " +
      "'profile profile profile welcome welcome welcome welcome podcast podcast podcast ' " +
      "'  where   where   where gallery gallery gallery gallery    blog    blog    blog ' " +
      "'  where   where   where gallery gallery gallery gallery    blog    blog    blog ' " +
      "'  where   where   where gallery gallery gallery gallery    blog    blog    blog ' " +
      "' social  social  social gallery gallery gallery gallery    blog    blog    blog ' ",

    "@media (max-width: 1150px)": {
      fontSize: "12px",
    },

    "@media (max-width: 900px), (max-aspect-ratio: 1/1)": {
      minHeight: "750px",
      height: "100vw",
      maxHeight: "1400px",

      fontSize: "1.3vw",

      gridTemplateColumns: "repeat(7, 1fr)",
      gridTemplateRows: "repeat(15, 1fr)",

      gridTemplateAreas:
        "'profile profile profile welcome welcome welcome welcome ' " +
        "'profile profile profile welcome welcome welcome welcome ' " +
        "'profile profile profile welcome welcome welcome welcome ' " +
        "'profile profile profile welcome welcome welcome welcome ' " +
        "'profile profile profile    blog    blog    blog    blog ' " +
        "'profile profile profile    blog    blog    blog    blog ' " +
        "'podcast podcast podcast    blog    blog    blog    blog ' " +
        "'podcast podcast podcast    blog    blog    blog    blog ' " +
        "'podcast podcast podcast    blog    blog    blog    blog ' " +
        "'podcast podcast podcast gallery gallery gallery gallery ' " +
        "'  where   where   where gallery gallery gallery gallery' " +
        "'  where   where   where gallery gallery gallery gallery' " +
        "'  where   where   where gallery gallery gallery gallery' " +
        "'  where   where   where gallery gallery gallery gallery' " +
        "' social  social  social gallery gallery gallery gallery' " +
        "' social  social  social gallery gallery gallery gallery' ",
    },

    "@media (max-width: 600px)": {
      height: "fit-content",
      maxWidth: "50vh",
      maxHeight: "10000px",

      display: "block",

      fontSize: "1.8vh",

      h1: {
        margin: "2px",
        fontSize: "3em",
        textDecoration: "underline",
      },
      h2: {
        margin: "2px",
        fontSize: "1.5em",
      },

      "&>*": {
        marginBottom: "10px",
      },
    },
  },
});

const Grid = props => {
  const classes = useStyles();

  return <div className={classes.grid}>{props.children}</div>;
};

export default Grid;
