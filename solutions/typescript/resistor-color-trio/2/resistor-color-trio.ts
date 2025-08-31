export function decodedResistorValue(colors: string[]): string {
  const colors_obj: { [key: string]: number } = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  const [color1, color2, color3] = colors;
  let value = "";
  value += colors_obj[color1];
  if (color2 !== "black") {
    value += colors_obj[color2] * Math.pow(10, colors_obj[color3]);
  }
  if (color2 === "black") {
    value += colors_obj[color2];
    value += parseInt(value) * Math.pow(10, colors_obj[color3]);
    value = value.slice(2);
  }

  const numericValue = parseInt(value);

  return numericValue < 1000
    ? `${numericValue} ohms`
    : numericValue > 1000 && numericValue < 1000000
      ? `${numericValue / 1000} kiloohms`
      : numericValue > 1000000 && numericValue < 1000000000
        ? `${numericValue / 1000000} megaohms`
        : `${numericValue / 1000000000} gigaohms`;
}

const ans = decodedResistorValue(["red", "black", "orange"]);
console.log(ans);
