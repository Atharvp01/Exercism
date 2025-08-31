export const colorCode = (color: string): number => {
  const bands: { [color: string]: number } = {
    Black: 0,
    Brown: 1,
    Red: 2,
    Orange: 3,
    Yellow: 4,
    Green: 5,
    Blue: 6,
    Violet: 7,
    Grey: 8,
    White: 9,
  };
  for (let key in bands) {
    if (key.toLowerCase === color.toLowerCase) {
      return bands[key];
    }
  }
  return 0;
};

export const COLORS = undefined;
