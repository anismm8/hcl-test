exports.response = (statusCode, message = "", data = {}) => ({
  statusCode,
  message,
  data,
});
