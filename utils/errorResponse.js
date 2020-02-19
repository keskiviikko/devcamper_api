class ErrorResponse extends Error {
  constructor(message, statusCode) {
    // Call Error class constructor with super
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = ErrorResponse;
