const { InvalidArgError } = require("./../invalid-arg-error");

const { messagesError } = require("./../constans");
const { getOutput } = require("./../output-module");

describe("OUTPUTS tests", () => {
  test("user passes the same -o argument twice", () => {
    const args = ["-c", "C1-C0", "-o", "--output"];
    const checkOutput = () => {
      getOutput(args);
    };

    expect(checkOutput).toThrowError(
      new InvalidArgError(messagesError.numberOfOutputFlagFlagExceeded)
    );
  });

  test("user missed filename output", () => {
    const args = ["-c", "C1-C0", "-o"];
    const checkOutput = () => {
      getOutput(args);
    };

    expect(checkOutput).toThrowError(
      new InvalidArgError(messagesError.fileNameOutputIsMissing)
    );
  });

  test("file output not access", () => {
    const args = ["-c", "C1-C0", "-o", "ooo"];
    const checkOutput = () => {
      getOutput(args);
    };

    expect(checkOutput).toThrowError(
      new InvalidArgError(messagesError.fileOutputNotAccess)
    );
  });

  test("catalog output not access", () => {
    const args = ["-c", "C1-C0", "-o", "/dir/"];
    const checkOutput = () => {
      getOutput(args);
    };

    expect(checkOutput).toThrowError(
      new InvalidArgError(messagesError.fileOutputNotAccess)
    );
  });

  test("file name output are missing", () => {
    const args = ["-c", "C1-C0", "-o", "-i"];
    const checkOutput = () => {
      getOutput(args);
    };

    expect(checkOutput).toThrowError(
      new InvalidArgError(messagesError.fileNameOutputIsMissing)
    );
  });

  test("user missed output arguments", () => {
    const args = ["-c", "A"];
    const checkOutput = () => {
      return getOutput(args);
    };

    const stdout = process.stdout;

    expect(checkOutput()).toEqual(stdout);
  });
});
