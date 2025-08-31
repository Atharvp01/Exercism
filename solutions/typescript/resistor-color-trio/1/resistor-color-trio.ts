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
  value += colors_obj[color2] * Math.pow(10, colors_obj[color3]);

  return parseInt(value) < 1000
    ? `${parseInt(value)} ohms`
    : parseInt(value) > 1000 && parseInt(value) < 1000000
      ? `${parseInt(value) / 1000} kiloohms`
      : parseInt(value) > 1000000 && parseInt(value) < 1000000000
        ? `${parseInt(value) / 1000000} megaohms`
        : `${parseInt(value) / 1000000000} gigaohms`;
}
