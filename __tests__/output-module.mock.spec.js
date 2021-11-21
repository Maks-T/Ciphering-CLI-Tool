const { CustomWritable } = require("./../custom-writeable");

const { getOutput } = require("../output-module");

jest.mock("fs");

describe("INPUTS tests get CustomWritable", () => {
  test("user missed output arguments2", () => {
    const args = ["-c", "A", "-o", "fileName"];
    const checkOutput = () => {
      return getOutput(args);
    };
    expect(checkOutput()).toBeInstanceOf(CustomWritable);
  });
});
