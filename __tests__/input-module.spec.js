const { InvalidArgError } = require("./../invalid-arg-error");

const { messagesError } = require("./../constans");
const { getInput } = require("./../input-module");

describe("INPUTS tests", () => {
  test("user passes the same -i argument twice", () => {
    const args = ["-c", "C1-C0", "-i", "--input"];
    const checkInput = () => {
      getInput(args);
    };

    expect(checkInput).toThrowError(
      new InvalidArgError(messagesError.numberOfInputFlagFlagExceeded)
    );
  });

  test("user missed filename input", () => {
    const args = ["-c", "C1-C0", "-i", "-o"];
    const checkInput = () => {
      getInput(args);
    };

    expect(checkInput).toThrowError(
      new InvalidArgError(messagesError.fileNameInputIsMissing)
    );
  });

  test("file input not access", () => {
    const args = ["-c", "C1-C0", "-i", "iii"];
    const checkInput = () => {
      getInput(args);
    };

    expect(checkInput).toThrowError(
      new InvalidArgError(messagesError.fileInputNotAccess)
    );
  });

  test("user missed input arguments", () => {
    const args = ["-c", "A"];
    const checkInput = () => {
      return getInput(args);
    };

    const stdin = process.stdin;

    expect(checkInput()).toEqual(stdin);
  });
});
