const { Transform } = require("stream");
const { chiperData } = require("./chiper-module");

class CustomTransform extends Transform {
  constructor(chiperCode) {
    super({
      transform(chunk, encoding, callback) {
        callback(null, chiperData(String(chunk), chiperCode));
      },
    });
  }
}

module.exports.CustomTransform = CustomTransform;
