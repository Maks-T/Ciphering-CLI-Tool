const { chiperData } = require("./chiper-module");
const { getConfigStr } = require("./config-module");
const { errorHandler } = require("./error-handler-module");
const { getCmdArgs } = require("./arguments-module");

class App {
  constructor() {
    this.args = getCmdArgs();
  }

  run() {
    try {
      const configStr = getConfigStr(this.args);

      const testText = "ABC";

      console.log(chiperData(testText, configStr));
    } catch (e) {
      errorHandler(e);
    }
  }
}

const app = new App();

app.run();
