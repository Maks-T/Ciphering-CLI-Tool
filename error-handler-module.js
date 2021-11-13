module.exports.errorHandler = (err) => {
  const { isCustom } = err;

  if (isCustom) {
    console.error(err.message);
    process.exit(1);
  } else {
    throw err;
  }
};
