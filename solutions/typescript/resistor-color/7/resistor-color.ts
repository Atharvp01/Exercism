export const colorCode = (color: string) => {
  const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];
  COLORS.map((x) => {
    if (x === color) {
      return COLORS.indexOf(x);
    }
  });
  return COLORS;
};

export const COLORS = undefined;
