const fs = jest.createMockFromModule("fs");

open = (filename, flags, cb) => {
  if (filename) {
    if (filename === "NonFileExist") {
      cb("NonFileExist", (fd = null));
    } else {
      cb(null, (fd = 1));
    }
  } else {
    cb("NonFile", (fd = null));
  }
};

read = (
  fd = 1,
  buffer = Buffer.from("abc"),
  offset = 0,
  length,
  position = null,
  callback
) => {
  buffer = Buffer.from("cba");
};

close = () => {};

write = (fd = 1, chunk, callback) => {};

accessSync = (fileName) => {
  if (fileName) return true;
  return false;
};

module.exports = {
  open,
  read,
  close,
  write,
  accessSync,
};
