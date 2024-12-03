/**
 * Defines common error messages for authentication, database operations, and validation.
 */
const errorMessages = {
  AuthErrors: {
    INVALID_CREDENTIALS: 'Invalid username or password.',
    UNAUTHORIZED: 'Unauthorized access.',
    FORBIDDEN: 'Access to this resource is denied.',
    USER_BANNED: 'Account is temporarily locked.',
    INVALID_OTP: 'Invalid OTP.'
  },

  DatabaseErrors: {
    CONNECTION_FAILED: 'Failed to connect to the database.',
    QUERY_FAILED: 'Database query failed.',
    DUPLICATE_ENTRY: 'Duplicate entry found.'
  },

  ValidationErrors: {
    DEFAULT: 'Validation Error(s)'
  },

  ServerErrors: {
    INTERNAL_SERVER_ERROR:
      'An unexpected error occurred. Please try again later.'
  },

  GenericErrors: {
    NOT_FOUND: 'not found.',
    EXISTS: 'already exists.'
  }
};

const ErrorMessages = Object.freeze(errorMessages);

export { ErrorMessages };
