const { InvalidArgError } = require("./invalid-arg-error");

const { messagesError } = require("./constans");

const flagInput = (arg) => arg === "-i" || arg === "--input";

const checkNumberOfInputFlag = (numberOfFlag) => {
  if (numberOfFlag > 1) {
    throw new InvalidArgError(messagesError.numberOfInputFlagFlagExceeded);
  }

  if (numberOfFlag === 0) {
    return false;
  }

  if (numberOfFlag === 1) {
    return true;
  }
};

const isInputFlag = (args) => {
  const flags = args.filter(flagInput);

  if (flags) numberOfFlags = flags.length;

  return checkNumberOfInputFlag(numberOfFlags);
};

module.exports.getInput = (args) => {
  if (args && isInputFlag(args)) {
    const indexInputFlag = args.findIndex(flagInput) + 1;

    if (indexInputFlag >= args.length) {
      throw new InvalidArgError(messagesError.fileNameInputIsMissing);
    }

    //читаем файл
    return "aa1w3s";
  } else {
    return process.stdin;
  }
};
