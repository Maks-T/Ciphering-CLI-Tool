const { getCmdArgs } = require("./../arguments-module");

describe("GET ARGUMENTS", () => {
  test("the function should return Null", () => {
    process.argv = ["node_dir", "run_file"];

    expect(getCmdArgs()).toBe(null);
  });

  test("the function should return array of length 2", () => {
    process.argv = ["node_dir", "run_file", "-c", "C1-C0"];

    expect(getCmdArgs().length).toBe(2);
  });
});
