const parseContent = (csv) => {
  let filteredStrings = [];
  const filteredTable = csv
    .split('"')
    .map((row, i) => {
      if (i % 2) {
        filteredStrings.push(row);
        return "STR";
      }
      return row;
    })
    .join("");

  const table = filteredTable.split("\n").map((row) => {
    const splitted = row.split(",");

    while (splitted.indexOf("STR") >= 0) {
      splitted[splitted.indexOf("STR")] = filteredStrings.shift();
    }

    return splitted;
  });

  let content = {
    welcome: table[1][0],
    events: [...Array(table.length).keys()].slice(2).map((i) =>
      table[i] && (table[i][4] || table[i][6] || table[i][8])
        ? {
            from: table[i][4],
            to: table[i][6],
            name: table[i][8],
            link: table[i][10],
          }
        : undefined,
    ),
    podcasts: [...Array(table.length).keys()].slice(2).map((i) =>
      table[i] && (table[i][12] || table[i][14])
        ? {
            date: table[i][12],
            name: table[i][14],
            link: table[i][16],
          }
        : undefined,
    ),
    blogs: [...Array(table.length).keys()].slice(2).map((i) =>
      table[i] && (table[i][18] || table[i][20])
        ? {
            date: table[i][18],
            name: table[i][20],
            link: table[i][22],
          }
        : undefined,
    ),
    videos: [...Array(table.length).keys()].slice(2).map((i) =>
      table[i] && [table[i][24], table[i][26]].some((x) => x)
        ? {
            date: table[i][24],
            name: table[i][26],
            link: table[i][28]
              .substring(
                0,
                table[i][28].indexOf("&t=") > -1
                  ? table[i][28].indexOf("&t=")
                  : table[i][28].length,
              )
              .replace("watch?v=", "embed/"),
            preview: table[i][30].toLowerCase().trim() !== "no",
          }
        : undefined,
    ),
  };
  return content;
};

export default parseContent;
