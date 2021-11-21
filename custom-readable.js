const { Readable } = require("stream");
const fs = require("fs");

class CustomReadable extends Readable {
  constructor(filename) {
    super();
    this.filename = filename;
    this.fd = null;
  }
  _construct(callback) {
    fs.open(this.filename, "r", (err, fd) => {
      if (!err) {
        this.fd = fd;
      }
    });
  }
  _read(n) {
    const buf = Buffer.alloc(n);
    fs.read(this.fd, buf, 0, n, null);
  }
  _destroy(err, callback) {
    if (this.fd) {
      fs.close(this.fd, (er) => callback(er || err));
    }
  }
}

module.exports.CustomReadable = CustomReadable;
