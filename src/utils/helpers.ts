//function that returns start year and current year

export const getYearsRange = (from: number) => {
  const currentYear = new Date().getFullYear();

  return Array.from({ length: currentYear - from + 1 }).map(
    (_item, index) => from + index
  );
};
