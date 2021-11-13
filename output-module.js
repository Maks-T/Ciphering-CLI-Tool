const { InvalidArgError } = require("./invalid-arg-error");
const { CustomWritable } = require("./custom-writeable");

const { messagesError } = require("./constans");

const flagOutput = (arg) => arg === "-o" || arg === "--output";

const checkNumberOfOutputFlag = (numberOfFlag) => {
  if (numberOfFlag > 1) {
    throw new InvalidArgError(messagesError.numberOfOutputFlagFlagExceeded);
  }

  if (numberOfFlag === 0) {
    return false;
  }

  if (numberOfFlag === 1) {
    return true;
  }
};

const isOutputFlag = (args) => {
  const flags = args.filter(flagOutput);

  if (flags) numberOfFlags = flags.length;

  return checkNumberOfOutputFlag(numberOfFlags);
};

const getOutputFileName = (args) => {
  const indexOutputFlag = args.findIndex(flagOutput) + 1;

  if (indexOutputFlag >= args.length) {
    throw new InvalidArgError(messagesError.fileNameOutputIsMissing);
  }
  //делать ли проверку существования файла
  return args[indexOutputFlag];
};

module.exports.getOutput = (args) => {
  if (args && isOutputFlag(args)) {
    const fileNameOutput = getOutputFileName(args);

    return new CustomWritable(fileNameOutput);
  } else {
    return process.stdout;
  }
};
