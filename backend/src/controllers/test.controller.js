const { successResponse } = require('../utils/responseHandler');
const { RESPONSE_MESSAGES } = require('../config/constants');

const testRoute = (req, res, next) => {
  try {
    return successResponse(res, 200, { message: RESPONSE_MESSAGES.TEST_ROUTE_WORKING });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  testRoute,
};
