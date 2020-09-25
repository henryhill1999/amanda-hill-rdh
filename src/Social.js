import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  social: {
    height: "100%",
    margin: "0 0",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    overflow: "hidden",
  },
  imageWrapper: {
    maxWidth: "25%",
    minHeight: 0,
    display: "flex",
    flex: "1 1 0",
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
  },
  image: {
    maxWidth: "100%",
    height: "scale",
    objectFit: "scale",
  },
});

const Social = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.social}>
      <div className={classes.imageWrapper}>
        <a
          href="https://www.facebook.com/Amanda-Hill-RDH-105731524264240/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="facebook link"
            src="facebook.png"
            className={classes.image}
          ></img>
        </a>
      </div>
      <div className={classes.imageWrapper}>
        <a href="mailto: amandahillrdh@gmail.com">
          <img alt="email link" src="email.png" className={classes.image}></img>
        </a>
      </div>
      <div className={classes.imageWrapper}>
        <a
          href="https://www.instagram.com/amandahillrdh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="instagram link"
            src="instagram.png"
            className={classes.image}
          ></img>
        </a>
      </div>
      <div className={classes.imageWrapper}>
        <a
          href="https://www.linkedin.com/in/amanda-hill-rdh-261167149/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="linkedin link"
            src="linkedin.png"
            className={classes.image}
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Social;
