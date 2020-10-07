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
      table[i] &&
      [table[i][4], table[i][6], table[i][8], table[i][10]].some((x) => x)
        ? {
            from: table[i][4],
            to: table[i][6],
            name: table[i][8],
            link: table[i][10],
          }
        : undefined,
    ),
    podcasts: [...Array(table.length).keys()].slice(2).map((i) =>
      table[i] &&
      [table[i][4], table[i][12], table[i][14], table[i][16]].some((x) => x)
        ? {
            date: table[i][12],
            name: table[i][14],
            link: table[i][16],
          }
        : undefined,
    ),
    blogs: [...Array(table.length).keys()].slice(2).map((i) =>
      table[i] &&
      [table[i][4], table[i][18], table[i][20], table[i][22]].some((x) => x)
        ? {
            date: table[i][18],
            name: table[i][20],
            link: table[i][22],
          }
        : undefined,
    ),
  };
  return content;
};

export default parseContent;
