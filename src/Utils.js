export const isValidPosition = (x, y, tableSize) => {
  return x >= 0 && x < tableSize && y >= 0 && y < tableSize;
};

export const isFacingValid = (val) => {
  return ["NORTH", "SOUTH", "EAST", "WEST"].includes(val.toUpperCase());
};
