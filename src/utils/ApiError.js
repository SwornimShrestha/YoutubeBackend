// Define a class named ApiError that extends the built-in Error class
class ApiError extends Error {
  // Constructor function for creating new instances of ApiError
  constructor(
    // Parameters for the constructor function:
    statusCode, // HTTP status code associated with the error
    message = "Something went wrong", // Error message (default: "Something went wrong")
    errors = [], // Array to hold additional error details (default: empty array)
    stack = "" // Stack trace for the error (default: empty string)
  ) {
    // Call the constructor of the Error class with the provided message
    super(message);
    // Initialize the statusCode property of the ApiError instance
    this.statusCode = statusCode;
    // Initialize the data property of the ApiError instance to null
    this.data = null; // This property seems unused in the code provided
    // Initialize the message property of the ApiError instance
    this.message = message;
    // Initialize the success property of the ApiError instance to false
    this.success = false; // This property seems unused in the code provided
    // Initialize the errors property of the ApiError instance with the provided errors array
    this.errors = errors;
    // Check if a stack trace is provided, if not, capture the stack trace
    if (stack) {
      this.stack = stack; // If a stack trace is provided, set it
    } else {
      Error.captureStackTrace(this, this.constructor); // Otherwise, capture the stack trace
    }
  }
}

// Export the ApiError class to make it accessible to other modules
export { ApiError };
