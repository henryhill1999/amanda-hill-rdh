import React from "react";
import { createUseStyles } from "react-jss";
import { DateEntries, DateEntry } from "./DateEntries";

const useStyles = createUseStyles({
  fullscreen: {
    position: "fixed",
    top: 0,
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#0005",
    zIndex: 100,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  square: {
    border: "16px solid #F8A978",
    borderRadius: "5px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  squareContentWrapper: {
    minWidth: "400px",
    maxWidth: "90vw",
    minHeight: "50vh",
    maxHeight: "90vh",

    overflowY: "auto",

    width: "40vw",
    height: "100%",

    backgroundColor: "#FCF9EA",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    "& h1": {
      color: "#000",
      fontSize: "24px",
    },
  },
});

const ExpandedList = (props) => {
  const classes = useStyles();

  if (!props.content.length) {
    return <></>;
  }

  return (
    <div className={classes.fullscreen}>
      <div className={classes.square}>
        <div className={classes.squareContentWrapper}>
          <div style={{ padding: "30px 50px", position: "relative" }}>
            <div
              style={{ cursor: "pointer" }}
              onClick={props.closeExpandedList}
            >
              <img
                src="close.png"
                alt="close buttoon"
                style={{
                  width: "20px",
                  position: "absolute",
                  left: "10px",
                  top: "10px",
                }}
              ></img>
            </div>
            <h1>{props.title}</h1>
            <DateEntries>
              {props.content.map((el, i) =>
                !!el ? (
                  <DateEntry
                    key={i}
                    date={el.date}
                    entry={el.name}
                    link={el.link}
                    color={"#000"}
                    hoverColor={"#111"}
                  ></DateEntry>
                ) : null,
              )}
            </DateEntries>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedList;
