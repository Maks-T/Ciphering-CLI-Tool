const { InvalidArgError } = require("./../invalid-arg-error");
const { messagesError } = require("./../constans");
const { getChipersCode } = require("./../config-module");

describe("CONFIG AND ARGUMENTS tests", () => {
  test("User passes the same cli argument twice (CONFIG FLAG)", () => {
    const args = ["-c", "C1-C0", "-c"];
    checkConfig = () => {
      getChipersCode(args);
    };

    expect(checkConfig).toThrowError(
      new InvalidArgError(messagesError.numberOfConfigFlagExceeded)
    );
  });

  test("The user missed the flag config", () => {
    const args = [];
    checkConfig = () => {
      getChipersCode(args);
    };

    expect(checkConfig).toThrowError(
      new InvalidArgError(messagesError.configFlagsAreMissing)
    );
  });

  test("The user missed the flag config", () => {
    const args = null;
    checkConfig = () => {
      getChipersCode(args);
    };

    expect(checkConfig).toThrowError(
      new InvalidArgError(messagesError.argumentsAreMissing)
    );
  });

  test("The user missed the flag of encoding", () => {
    const args = ["-c", "C"];
    checkConfig = () => {
      getChipersCode(args);
    };

    expect(checkConfig).toThrowError(
      new InvalidArgError(messagesError.configIsIncorrect)
    );
  });

  test("The user entered missed config", () => {
    const args = ["-c"];
    checkConfig = () => {
      getChipersCode(args);
    };

    expect(checkConfig).toThrowError(
      new InvalidArgError(messagesError.configIsMissing)
    );
  });

  test("The user entered incorrect config", () => {
    const args = ["-c", "A1"];
    checkConfig = () => {
      getChipersCode(args);
    };

    expect(checkConfig).toThrowError(
      new InvalidArgError(messagesError.configIsIncorrect)
    );
  });

  test("The user missed arguments", () => {
    const args = null;
    checkConfig = () => {
      getChipersCode(args);
    };

    expect(checkConfig).toThrowError(
      new InvalidArgError(messagesError.argumentsAreMissing)
    );
  });

  test("The user entered incorrect encoding flag", () => {
    const args = ["-c", "A2"];
    checkConfig = () => {
      getChipersCode(args);
    };

    expect(checkConfig).toThrowError(
      new InvalidArgError(messagesError.configIsIncorrect)
    );
  });

  test("The user entered incorrect encoding flag", () => {
    const args = ["-c", "C12"];
    checkConfig = () => {
      getChipersCode(args);
    };

    expect(checkConfig).toThrowError(
      new InvalidArgError(messagesError.configIsIncorrect)
    );
  });

  test("The user entered 'A-C1-R0' config", () => {
    const args = ["-c", "A-C1-R0"];

    checkConfig = () => {
      return getChipersCode(args);
    };

    expect(checkConfig()).toEqual(["A", "C1", "R0"]);
  });
});
