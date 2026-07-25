const { successResponse, errorResponse } = require('../utils/responseHandler');
const { validateContactForm } = require('../utils/validators');
const { sendContactEmail } = require('../services/emailService');
const { RESPONSE_MESSAGES } = require('../config/constants');

const submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;

    const validation = validateContactForm({ name, email, phone, message });

    if (!validation.isValid) {
      console.warn('Validation errors:', validation.errors);
      return errorResponse(res, 400, 'Validation failed', validation.errors);
    }

    await sendContactEmail({ name, email, phone, message });

    return successResponse(res, 201, {
      message: 'Your message has been sent successfully. We will get back to you soon!',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    next(error);
  }
};

module.exports = {
  submitContact,
};
