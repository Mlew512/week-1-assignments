const {findArmstrongNumbers} = require("./armstrongNumbers");
const shallowEqual = require("shallow-equal").shallowEqualArrays;

describe("test single digit", () => {
  test("findArmstrongNumbers(8) === [0, 1, 2, 3, 4, 5, 6, 7]", () => {
    expect(findArmstrongNumbers(8)).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7,
    ]);
  });
});
describe("test double digit", () => {
  test("findArmstrongNumbers(99) === [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
    expect(findArmstrongNumbers(99)).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    ]);
  });
});
describe("test triple digit", () => {
  test("findArmstrongNumbers(999) === [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407]", () => {
    expect(findArmstrongNumbers(999)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407]);
  });
});
