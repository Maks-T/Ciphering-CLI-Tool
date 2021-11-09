module.exports.errorHandler = (err) => {
  const { isCustom } = err;

  if (isCustom) {
    console.error("\x1b[31m%s\x1b[0m", "errHandler:  ", err.message);
    process.exit(1);
  } else {
    throw err;
  }
};
