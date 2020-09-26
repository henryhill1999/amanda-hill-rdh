import React from "react";
import { createUseStyles } from "react-jss";
import useAxios from "axios-hooks";

import Square from "./Square";
import TextCard from "./TextCard";
import Grid from "./Grid";

import Profile from "./Profile";
import Social from "./Social";
// import Gallery from "./Gallery";
import Attribution from "./Attribution";
import { DateEntries, DateEntry } from "./DateEntries";
import parseContent from "./parseContent";

const useStyles = createUseStyles({
  "@global": {
    "@import": [
      "url(https://fonts.googleapis.com/css?family=Cabin&display=swap)",
      "url(https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap)",
    ],
    "h1, h2": {
      fontFamily: "'Cabin', sans-serif",
      fontStyle: "normal",
      fontWeight: "bold",
      color: "#FFF",
      letterSpacing: "0.01em",
    },
    "p, ul, a": {
      fontFamily: "Roboto Mono, monospace",
      color: "#FFF",
    },
    h1: {
      margin: "2px",
      fontSize: "1.5em",
      textDecoration: "underline",
    },
    h2: {
      margin: "2px",
      fontSize: "1.2em",
    },
    body: {
      fontSize: "12px",
      backgroundColor: "#F5EAD8",
    },
  },
  body: {
    position: "absolute",
    top: 0,
    left: 0,

    minHeight: "90vh",
    width: "90vw",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "3vh 5vw",

    "@media (max-width: 500px)": {
      padding: "5vw",
    },
  },
});

const App = () => {
  const classes = useStyles();
  const contentURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQpSd6-sEPP_Nw-11VIRif3fAPOopfcLrnAFISAKOhzH5uAbd1FUZrU8Pz8Id8yXCOMVsxjHUlAIgUb/pub?gid=0&single=true&output=csv";
  // "./content(1).csv";
  const proxyUrl = `https://cors-anywhere.herokuapp.com/${contentURL}`;

  const [{ data }] = useAxios(proxyUrl, {
    useCache: false,
  });

  const content = !!data ? parseContent(data) : undefined;
  console.log(content);
  return (
    <div className={classes.body}>
      <Grid>
        <Square color="#FFC5A1" gridName="profile">
          <Profile></Profile>
        </Square>
        <Square color="#40BFC1" gridName="welcome">
          <TextCard loading={!content} title="Welcome!">
            {!!content ? <p>{content.welcome}</p> : null}
          </TextCard>
        </Square>
        <Square color="#F8A978" gridName="podcast">
          <TextCard loading={!content} title="My Podcast:">
            <DateEntries>
              {!!content && content.hasOwnProperty("podcasts")
                ? content.podcasts.map((el, i) =>
                    !!el ? (
                      <DateEntry
                        key={i}
                        date={el.date}
                        entry={el.name}
                        link={el.link}
                      ></DateEntry>
                    ) : null,
                  )
                : null}
            </DateEntries>
          </TextCard>
        </Square>
        <Square color="#FFC5A1" gridName="gallery">
          {/* <Gallery></Gallery> */}
          <iframe
            title="interview on youtube"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/PaJGUio1Ihw"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Square>
        <Square color="#40BFC1" gridName="blog">
          <TextCard loading={!content} title="Recent Blog Posts:">
            <DateEntries>
              {!!content && content.hasOwnProperty("blogs")
                ? content.blogs.map((el, i) =>
                    !!el ? (
                      <DateEntry
                        key={i}
                        date={el.date}
                        entry={el.name}
                        link={el.link}
                      ></DateEntry>
                    ) : null,
                  )
                : null}
            </DateEntries>
          </TextCard>
        </Square>
        <Square color="#F8A978" gridName="where">
          <TextCard loading={!content} title="Where's Amanda?">
            <DateEntries>
              {!!content && content.hasOwnProperty("events")
                ? content.events.map((el, i) =>
                    !!el ? (
                      <DateEntry
                        key={i}
                        date={`${el.from
                          .split("/")
                          .slice(0, 2)
                          .join("/")}-${el.to
                          .split("/")
                          .slice(0, 2)
                          .join("/")}`}
                        entry={el.name}
                        link={el.link}
                      ></DateEntry>
                    ) : null,
                  )
                : null}
            </DateEntries>
          </TextCard>
        </Square>
        <Square color="#FFC5A1" gridName="social">
          <Social></Social>
        </Square>
      </Grid>
      <Attribution></Attribution>
    </div>
  );
};

export default App;
