/**
 * Defines common success messages for operations.
 */
const successMessages = {
  AuthSuccess: {
    LOGIN_SUCCESS: 'Login successful.',
    LOGOUT_SUCCESS: 'Logout successful.',
    USER_REGISTERED: 'User registration successful.'
  },

  DatabaseSuccess: {
    CONNECTION_SUCCESS: 'Successfully connected to the database.',
    QUERY_SUCCESS: 'Database query executed successfully.',
    ENTRY_CREATED: 'Entry created successfully.',
    ENTRY_UPDATED: 'Entry updated successfully.',
    ENTRY_DELETED: 'Entry deleted successfully.'
  },

  OperationSuccess: {
    OPERATION_COMPLETED: 'Operation completed successfully.',
    DATA_RETRIEVED: 'Data retrieved successfully.',
    ACTION_SUCCESSFUL: 'Action performed successfully.'
  }
};

const SuccessMessages = Object.freeze(successMessages);

export { SuccessMessages };
