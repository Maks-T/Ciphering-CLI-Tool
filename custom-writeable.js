const { Writable } = require("stream");
const fs = require("fs");

class CustomWritable extends Writable {
  constructor(filename) {
    super({ flags: "a+" });
    this.filename = filename;
  }
  _construct(callback) {
    fs.open(this.filename, "r+", (err, fd) => {
      if (err) {
        callback(err);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }
  _write(chunk, encoding, callback) {
    fs.write(this.fd, chunk, callback);
  }
  _destroy(err, callback) {
    if (this.fd) {
      fs.close(this.fd, (er) => callback(er || err));
    } else {
      callback(err);
    }
  }
}

module.exports.CustomWritable = CustomWritable;
