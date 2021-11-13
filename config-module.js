const { InvalidArgError } = require("./invalid-arg-error");

const { encryptNames, messagesError } = require("./constans");

const config = (arg) => arg === "-c" || arg === "--config";

const checkNumberOfConfig = (numberOfConfig) => {
  if (numberOfConfig > 1) {
    throw new InvalidArgError(messagesError.numberOfConfigFlagExceeded);
  }

  if (numberOfConfig === 0) {
    throw new InvalidArgError(messagesError.configFlagsAreMissing);
  }

  if (numberOfConfig === 1) {
    return true;
  }
};

const isConfigFlag = (args) => {
  if (!args) return false;
  const flagsOfConfig = args.filter(config);

  if (flagsOfConfig) numberOfConfig = flagsOfConfig.length;

  return checkNumberOfConfig(numberOfConfig);
};

const isChiperFlag = (chiperFlag) => {
  return chiperFlag === "0" || chiperFlag === "1";
};

const isCaesarChiper = (chiperCode) => {
  return chiperCode[0] === encryptNames.Caesar && isChiperFlag(chiperCode[1]);
};

const isROT8Chiper = (chiperCode) => {
  return chiperCode[0] === encryptNames.ROT8 && isChiperFlag(chiperCode[1]);
};

const isAtbashChiper = (chiperCode) => {
  return chiperCode[0] === encryptNames.Atbash;
};

const checkChiperCode = (chiperCode) => {
  if (chiperCode.length > 2) return false;

  if (chiperCode.length === 1) {
    return isAtbashChiper(chiperCode);
  }

  if (chiperCode.length === 2) {
    return isCaesarChiper(chiperCode) || isROT8Chiper(chiperCode);
  }
};

const checkConfig = (configStr) => {
  const chipersArr = configStr.split("-");

  if (!chipersArr.every(checkChiperCode))
    throw new InvalidArgError(messagesError.configIsIncorrect);
};

const getConfigStr = (args) => {
  if (!isConfigFlag(args)) {
    throw new InvalidArgError(messagesError.argumentsAreMissing);
  }

  const indexConfig = args.findIndex(config) + 1;

  if (indexConfig >= args.length)
    throw new InvalidArgError(messagesError.configIsMissing);

  const configStr = args[indexConfig];

  checkConfig(configStr);

  return configStr;
};

module.exports.getChipersCode = (args) => {
  return getConfigStr(args).split("-");
};
