import { getYearsRange } from "../helpers";

describe("getYearsRange", () => {
  it("returns an array of years starting from the given year up to the current year", () => {
    const expectedYears = [2010, 2011, 2012, 2013, 2014, 2015];

    expect(getYearsRange(2010, 2015)).toEqual(expectedYears);
  });

  it("returns an empty array if the `from` year is greater than the `to` year", () => {
    expect(getYearsRange(2015, 2010)).toEqual([]);
  });

  it("returns an array to current year if argument `to` is not provided", () => {
    const range = getYearsRange(2010);

    expect(range.slice(-1)).toEqual([new Date().getFullYear()]);
  });
});
