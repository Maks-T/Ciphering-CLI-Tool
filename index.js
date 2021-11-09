const { chiperData } = require("./chiper-module");
const { getConfigStr } = require("./config-module");
const { errorHandler } = require("./error-handler-module");
const { getCmdArgs } = require("./arguments-module");
const { getInput } = require("./input-module");

const { pipeline } = require("stream");
const { Transform } = require("stream");

class App {
  constructor() {
    this.args = getCmdArgs();
  }

  run() {
    try {
      const configStr = getConfigStr(this.args);

      const inputData = getInput(this.args);

      pipeline(
        inputData,
        new Transform({
          transform(chunk, encoding, callback) {
            callback(null, chiperData(String(chunk), configStr));
          },
        }),
        process.stdout,
        (err) => {
          if (err) {
            return console.error(err);
          }
        }
      );
    } catch (e) {
      errorHandler(e);
    }
  }
}

const app = new App();

app.run();
