const { getChipersCode } = require("./config-module");

const { errorHandler } = require("./error-handler-module");
const { getCmdArgs } = require("./arguments-module");
const { getInput } = require("./input-module");
const { getOutput } = require("./output-module");

const { pipeline } = require("stream");
const { CustomTransform } = require("./custom-transform");

class App {
  constructor() {
    this.args = getCmdArgs();
  }

  run() {
    try {
      const arrChiper = getChipersCode(this.args);

      const customStreamCollection = arrChiper.map((chiperCode) => {
        return new CustomTransform(chiperCode);
      });

      const inputStream = getInput(this.args);
      const outputStream = getOutput(this.args);

      pipeline(inputStream, ...customStreamCollection, outputStream, (err) => {
        if (err) {
          return errorHandler(err);
        }
      });
    } catch (e) {
      errorHandler(e);
    }
  }
}

const app = new App();

app.run();
