import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    position: "relative",
    width: "auto",
    height: "100%",

    display: "flex",
  },
  image: {
    objectFit: "cover",
    minHeight: "100%",
    width: "100%",
  },
  title: {
    position: "absolute",
    top: "70%",
    left: 0,
    width: "100%",
    height: "30%",

    overflow: "hidden",

    "&>svg": {
      objectFit: "cover",
    },
  },
  labelWrapper: {
    position: "absolute",

    bottom: 0,
    right: 0,

    margin: "10px",
    "& >h1": {
      fontSize: "26px",
    },
    "& >h1, h2": {
      textDecoration: "underline #F8A978",
      textAlign: "right",
      lineHeight: "1.5em",
    },

    "@media (max-width: 1150px)": {
      "& >h1": {
        fontSize: "2vw",
      },
    },
    "@media (max-width: 600px)": {
      "& >h1": {
        fontSize: "2em",
      },
    },
  },
});

const Profile = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.wrapper}>
      <img className={classes.image} src={"./profile.jpg"} alt="Amanda Hill" />
      <div className={classes.title}>
        <svg
          viewBox="0 0 687 619"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M291.295 38.0071C184.604 90.5317 52.6437 59.8923 0 38.0071V619H687V11.7448C599.553 -1.38629 397.986 -14.5174 291.295 38.0071Z"
            fill="#40BFC1"
          />
        </svg>
        <div className={classes.labelWrapper}>
          <h1 className={classes.name}>Amanda Hill</h1>
          <h2 className={classes.sub}>RDH</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
