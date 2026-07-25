const successResponse = (res, status = 200, data = {}) => {
  return res.status(status).json({
    success: true,
    ...data,
  });
};

const errorResponse = (res, status = 500, message = 'Something went wrong', error = undefined) => {
  const payload = {
    success: false,
    message,
  };

  if (error) {
    payload.error = error;
  }

  return res.status(status).json(payload);
};

module.exports = {
  successResponse,
  errorResponse,
};
