export const calculateBodyFat = (density: number): number =>
  (4.95 / density - 4.5) * 100;
