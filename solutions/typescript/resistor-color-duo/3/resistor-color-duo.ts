export function decodedValue(arr: string[]): number {
  let num: string = "";
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
  arr.map((color) => {
    COLORS.map((x) => {
      if (num.length < 2) {
        if (color === x) num += COLORS.indexOf(x);
      }
    });
  });
  return parseInt(num);
}
