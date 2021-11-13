module.exports.getCmdArgs = () => {
  const args = process.argv;
  if (args.length < 3) return null;

  return args.splice(2);
};
