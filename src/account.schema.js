const { object, string } = require('yup')

module.exports = updateAccountSchema = object({
  username: string()
    .min(3, 'Username must be between 3 and 32 characters.')
    .max(32, 'Username must be between 3 and 32 characters.'),
  email: string().email('Must be a valid email address.'),
});