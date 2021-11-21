const { Writable } = require("stream");
const fs = require("fs");

class CustomWritable extends Writable {
  constructor(filename) {
    super();
    this.filename = filename;
  }
  _construct(callback) {
    fs.open(this.filename, "a+", (err, fd) => {
      if (!err) {
        this.fd = fd;
      }
    });
  }
  _write(chunk, encoding, callback) {
    fs.write(this.fd, chunk, callback);
  }
  _destroy(err, callback) {
    if (this.fd) {
      fs.close(this.fd);
    }
  }
}

module.exports.CustomWritable = CustomWritable;
