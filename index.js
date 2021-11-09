const { chiperData } = require("./chiper-module");

const encryptNames = {
  Caesar: "C",
  Atbash: "A",
  ROT8: "R",
};

const messagesError = {
  numberOfConfigFlagExceeded: "ERROR! Number of config flags exceeded",
  configFlagsAreMissing: "ERROR! Сonfig flags are missing",
  configIsIncorrect: "ERROR! The config is incorrect",
  argumentsAreMissing: "ERROR! arguments are missing",
  configIsMissing: "ERROR!The config is missing",
};

function getCmdArgs() {
  const args = process.argv;
  if (args.length < 3) return null;

  return args.splice(2);
}

class InvalidArgError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidArgError";
    this.isCustom = true;
  }
}

const errorHandler = (err) => {
  const { isCustom } = err;

  if (isCustom) {
    console.error("\x1b[31m%s\x1b[0m", "errHandler:  ", err.message);
    process.exit(1);
  } else {
    throw err;
  }
};

const config = (arg) => arg === "-c" || arg === "--config";

const checkNumberOfConfig = (numberOfConfig) => {
  if (numberOfConfig > 1) {
    throw new InvalidArgError(messagesError.numberOfConfigFlagExceeded);
  }

  if (numberOfConfig === 0) {
    throw new InvalidArgError(messagesError.configFlagsAreMissing);
  }

  if (numberOfConfig === 1) {
    console.log("flags config correct");
    return true;
  }
};

const isConfigFlag = (args) => {
  if (!args) return false;
  const flagsOfConfig = args.filter(config);

  if (flagsOfConfig) numberOfConfig = flagsOfConfig.length;

  return checkNumberOfConfig(numberOfConfig);
};

const getConfigStr = (args) => {
  const indexConfig = args.findIndex(config) + 1;

  if (indexConfig >= args.length)
    throw new InvalidArgError(messagesError.configIsMissing);

  return args[indexConfig];
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

checkChiperCode = (chiperCode) => {
  if (chiperCode.length > 2) return false;

  if (chiperCode.length === 1) {
    return isAtbashChiper(chiperCode);
  }

  if (chiperCode.length === 2) {
    return isCaesarChiper(chiperCode) || isROT8Chiper(chiperCode);
  }
};

checkChipersArr = (configStr) => {
  const chipersArr = configStr.split("-");

  if (!chipersArr.every(checkChiperCode))
    throw new InvalidArgError(messagesError.configIsIncorrect);
};

class App {
  constructor() {
    this.args = getCmdArgs();
  }

  run() {
    try {
      if (!isConfigFlag(this.args)) {
        throw new InvalidArgError(messagesError.argumentsAreMissing);
      }

      const configStr = getConfigStr(this.args);

      checkChipersArr(configStr);

      const testText = "ABC";

      console.log(chiperData(testText, configStr));
    } catch (e) {
      errorHandler(e);
    }
  }
}

const app = new App();

app.run();
