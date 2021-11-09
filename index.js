const { chiperData } = require("./chiper-module");
const { isConfigFlag, getConfigStr, checkConfig } = require("./config-module");
const { messagesError } = require("./constans");
const { errorHandler } = require("./error-handler-module");
const { InvalidArgError } = require("./invalid-arg-error");
const { getCmdArgs } = require("./arguments-module");

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

      checkConfig(configStr);

      const testText = "ABC";

      console.log(chiperData(testText, configStr));
    } catch (e) {
      errorHandler(e);
    }
  }
}

const app = new App();

app.run();
