export const colorCode = (color: string) => {
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

  return Object.keys(bands);
};

export const COLORS = undefined;
