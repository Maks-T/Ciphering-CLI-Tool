class InvalidArgError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidArgError";
    this.isCustom = true;
  }
}

module.exports.InvalidArgError = InvalidArgError;
