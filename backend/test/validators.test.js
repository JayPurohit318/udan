const test = require('node:test');
const assert = require('node:assert/strict');
const { validateContactForm } = require('../src/utils/validators');

test('allows an empty optional message when submitting contact form', () => {
  const result = validateContactForm({
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '9876543210',
    message: '',
  });

  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});
