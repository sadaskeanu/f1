import { getYearsRange } from "../helpers";

describe("getYearsRange", () => {
  it("returns an array of years starting from the given year up to the current year", () => {
    const currentYear = new Date().getFullYear();
    const from = 2010;
    const expectedYears = Array.from({ length: currentYear - from + 1 }).map(
      (_item, index) => from + index
    );

    expect(getYearsRange(from)).toEqual(expectedYears);
  });

  it("returns an empty array if the given year is greater than the current year", () => {
    const from = 3000;

    expect(getYearsRange(from)).toEqual([]);
  });
});
