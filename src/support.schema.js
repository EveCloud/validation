const { object, string, number, boolean } = require('yup')

module.exports = createSupportTicketSchema = object({
    summary: string()
        .required('Summary is required.')
        .min(1, 'Summary must be between 1 and 64 characters.')
        .max(64, 'Summary must be between 1 and 64 characters.')
        .trim(),
    message: string()
        .required('Message is required.')
        .min(1, 'Message must be between 1 and 64,000 characters.')
        .max(64000, 'Message must be between 1 and 64,000 characters.')
        .trim()
});

module.exports = createReplySchema = object({
    message: string()
        .required('Message is required.')
        .min(1, 'Message must be between 1 and 65,535 characters.')
        .max(65535, 'Message must be between 1 and 65,535 characters.')
        .trim(),
});