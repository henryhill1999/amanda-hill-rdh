import React, { useState, useEffect } from "react";
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
import ExpandedList from "./ExpandedList";

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
  seeAll: {
    margin: "1%",
    textDecoration: "underline",
    whiteSpace: "noWrap",

    position: "absolute",
    bottom: "0",
    right: "10px",

    "&:hover": {
      fontWeight: "bold",
      fontSize: "1.1em",
      cursor: "pointer",
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

  const [expandedContent, setExpandedContent] = useState([]);
  const [expandedTitle, setExpandedTitle] = useState("");

  const [{ data }] = useAxios(proxyUrl, {
    useCache: false,
    manual: !!expandedContent.length,
  });

  useEffect(() => {
    window.addEventListener("keydown", () => setExpanded("", []));
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", () => setExpanded("", []));
    };
  }, []);

  const setExpanded = (title, content) => {
    setExpandedTitle(title);
    setExpandedContent(content);
  };

  const content = !!data ? parseContent(data) : undefined;
  console.log(content);
  return (
    <div className={classes.body}>
      <ExpandedList
        content={expandedContent}
        title={expandedTitle}
        closeExpandedList={() => setExpanded("", [])}
      ></ExpandedList>
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
                ? content.podcasts
                    .slice(0, 3)
                    .map((el, i) =>
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
            <p
              className={classes.seeAll}
              onClick={() => setExpanded("All Podcasts", content.podcasts)}
            >
              See all...
            </p>
          </TextCard>
        </Square>
        <Square color="#FFC5A1" gridName="gallery">
          {/* <Gallery></Gallery> */}
          <div style={{ position: "relative", height: "100%" }}>
            {content && (
              <iframe
                title={content.videos[0].title}
                width="100%"
                height="94%"
                src={content.videos[0].link}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="true"
              ></iframe>
            )}
            <p
              className={classes.seeAll}
              onClick={() => setExpanded("All Videos", content.videos)}
            >
              See all...
            </p>
          </div>
        </Square>
        <Square color="#40BFC1" gridName="blog">
          <TextCard loading={!content} title="Recent Blog Posts:">
            <DateEntries>
              {!!content && content.hasOwnProperty("blogs")
                ? content.blogs
                    .slice(0, 5)
                    .map((el, i) =>
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
            <p
              className={classes.seeAll}
              onClick={() => setExpanded("All Blog Posts", content.blogs)}
            >
              See all...
            </p>
          </TextCard>
        </Square>
        <Square color="#F8A978" gridName="where">
          <TextCard loading={!content} title="Where's Amanda?">
            <DateEntries>
              {!!content && content.hasOwnProperty("events")
                ? content.events
                    .slice(0, 3)
                    .map((el, i) =>
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
            <p
              className={classes.seeAll}
              onClick={() => setExpanded("All Events", content.events)}
            >
              See all...
            </p>
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
