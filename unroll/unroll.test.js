const unroll = require("./unroll");

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });
  it("is works with a 2 x 2", function () {
    expect(
      unroll([
        [1, 2],
        [3, 4],
      ])
    ).toEqual([1, 2, 4, 3]);
  });
  it("is works with a 3 x 3", function () {
    expect(
      unroll([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
  it("is works with a 4 x 4", function () {
    expect(
      unroll([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ])
    ).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  });
  it("is works with a 5 x 5", function () {
    expect(
      unroll([
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
      ])
    ).toEqual([
      1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19,
      18, 17, 12, 13,
    ]);
  });
});
