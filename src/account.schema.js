const { object, string, number, boolean } = require('yup')

module.exports = AccountSchema = object({
  username: string('Must be a string')
    .min(3, 'Username must be between 3 and 32 characters.')
    .max(32, 'Username must be between 3 and 32 characters.'),
  email: string().email('Must be a valid email address.'),
  password: string()
    .min(8, 'Password must be at least 8 characters.')
    .max(32, 'Password must be at most 32 characters.'),
  first_name: string().max(50, 'First name must be 50 characters or less.'),
  last_name: string().max(50, 'Last name must be 50 characters or less.'),
  company: string().max(128, 'Company must be 128 characters or less.'),
  phone_number: string().max(32, 'Phone number must be 32 characters or less.'),
  address: string()
    .min(3, 'Address must be between 3 and 64 characters.')
    .max(64, 'Address must be between 3 and 64 characters.'),
  city: string()
    .min(3, 'City must be between 3 and 24 characters.')
    .max(24, 'City must be between 3 and 24 characters.'),
  state: string()
    .min(2, 'State must be between 2 and 24 characters.')
    .max(24, 'State must be between 2 and 24 characters.'),
  zip: string()
    .min(5, 'Zip code must be between 5 and 16 characters.')
    .max(16, 'Zip code must be between 5 and 16 characters.'),
  country: string()
    .min(2, 'Country code must be two letters.')
    .max(2, 'Country code must be two letters.'),
  tax_id: string()
    .min(3, 'Tax ID must be between 3 and 100 characters.')
    .max(100, 'Tax ID must be between 3 and 100 characters.'),
});