const { errorResponse } = require('../utils/responseHandler');
const { RESPONSE_MESSAGES } = require('../config/constants');

const errorHandler = (err, req, res, next) => {
  console.error(err);

  const statusCode = err.status || 500;
  const message = err.message || RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR;

  return errorResponse(res, statusCode, message, process.env.NODE_ENV === 'development' ? err.stack : undefined);
};

module.exports = errorHandler;
