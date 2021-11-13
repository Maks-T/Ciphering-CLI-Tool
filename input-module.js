const { InvalidArgError } = require("./invalid-arg-error");
const { CustomReadable } = require("./custom-readable");
const fs = require("fs");
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

const getInputFileName = (args) => {
  const indexInputFlag = args.findIndex(flagInput) + 1;

  //делать ли проверку существования файла
  const fileName = args[indexInputFlag];

  if (fileName === "-o" || fileName === "--output") {
    throw new InvalidArgError(messagesError.fileNameInputIsMissing);
  }

  try {
    fs.accessSync(fileName);
  } catch (e) {
    throw new InvalidArgError(messagesError.fileInputNotAccess);
  }

  return fileName;
};

module.exports.getInput = (args) => {
  if (args && isInputFlag(args)) {
    const fileNameInput = getInputFileName(args);
    return new CustomReadable(fileNameInput);
  } else {
    return process.stdin;
  }
};
