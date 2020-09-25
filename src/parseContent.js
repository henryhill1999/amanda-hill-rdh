const parseContent = csv => {
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

  const table = filteredTable.split("\n").map(row => {
    const splitted = row.split(",");

    while (splitted.indexOf("STR") >= 0) {
      splitted[splitted.indexOf("STR")] = filteredStrings.shift();
    }

    return splitted;
  });

  let content = {
    welcome: table[1][0],
    events: [2, 3, 4].map(i =>
      table.length > i
        ? {
            from: table[i][4],
            to: table[i][6],
            name: table[i][8],
            link: table[i][10],
          }
        : undefined,
    ),
    podcasts: [2, 3, 4, 5].map(i =>
      table.length > i
        ? {
            date: table[i][12],
            name: table[i][14],
            link: table[i][16],
          }
        : undefined,
    ),
    blogs: [2, 3, 4, 5].map(i =>
      table.length > i
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
