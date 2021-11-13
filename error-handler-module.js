const w = "\x1b[37m";
const y = "\x1b[33m";

module.exports.errorHandler = (err) => {
  const { isCustom } = err;

  if (isCustom) {
    console.error(err.message);
    process.exit(1);
  } else {
    console.error(y + err.message + w);
    process.exit(1);
  }
};
