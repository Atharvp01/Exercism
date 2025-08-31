export function decodedValue(one: string, two: string, three: string) {
  let num = "";
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
  for (let item in COLORS) {
    if (item === one) num += item;
    if (item === two) num += item;
  }
  return num;
}
