const { CustomReadable } = require("./../custom-readable");

const { getInput } = require("../input-module");

jest.mock("fs");

describe("INPUTS tests get CustomReadable", () => {
  test("user missed input arguments2", () => {
    const args = ["-c", "A", "-i", "fileName"];
    const checkInput = () => {
      return getInput(args);
    };
    expect(checkInput()).toBeInstanceOf(CustomReadable);
  });
});
