const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone.replace(/[-\s]/g, ''));
};

const validateContactForm = (data) => {
  const errors = {};

  if (!data.name || data.name.trim().length === 0) {
    errors.name = 'Name is required';
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Valid email is required';
  }

  if (!data.phone || !validatePhone(data.phone)) {
    errors.phone = 'Valid 10-digit phone number is required';
  }

  if (data.message && data.message.trim().length > 0 && data.message.trim().length < 3) {
    errors.message = 'Message must be at least 3 characters long';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

module.exports = {
  validateContactForm,
  validateEmail,
  validatePhone,
};
