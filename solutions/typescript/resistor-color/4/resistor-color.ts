export const colorCode = (color: string): number => {
  const bands: { [color: string]: number } = {
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
  for (let key in bands) {
    if (key === color) {
      return bands[key];
    }
  }
  return 0;
};

export const COLORS = undefined;
