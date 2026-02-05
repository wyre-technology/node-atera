/**
 * Custom error classes for the Atera client
 */

/**
 * Base error class for all Atera errors
 */
export class AteraError extends Error {
  /** HTTP status code if applicable */
  readonly statusCode: number;
  /** Raw response data if available */
  readonly response: unknown;

  constructor(message: string, statusCode: number = 0, response?: unknown) {
    super(message);
    this.name = 'AteraError';
    this.statusCode = statusCode;
    this.response = response;
    Object.setPrototypeOf(this, AteraError.prototype);
  }
}

/**
 * Authentication error (401 unauthorized)
 */
export class AteraAuthenticationError extends AteraError {
  constructor(message: string, response?: unknown) {
    super(message, 401, response);
    this.name = 'AteraAuthenticationError';
    Object.setPrototypeOf(this, AteraAuthenticationError.prototype);
  }
}

/**
 * Resource not found error (404)
 */
export class AteraNotFoundError extends AteraError {
  constructor(message: string, response?: unknown) {
    super(message, 404, response);
    this.name = 'AteraNotFoundError';
    Object.setPrototypeOf(this, AteraNotFoundError.prototype);
  }
}

/**
 * Validation error (400)
 */
export class AteraValidationError extends AteraError {
  /** Parsed validation errors */
  readonly errors: Array<{ message: string; field?: string }>;

  constructor(message: string, errors: Array<{ message: string; field?: string }> = [], response?: unknown) {
    super(message, 400, response);
    this.name = 'AteraValidationError';
    this.errors = errors;
    Object.setPrototypeOf(this, AteraValidationError.prototype);
  }
}

/**
 * Rate limit exceeded error (429)
 */
export class AteraRateLimitError extends AteraError {
  /** Suggested retry delay in milliseconds */
  readonly retryAfter: number;

  constructor(message: string, retryAfter: number = 5000, response?: unknown) {
    super(message, 429, response);
    this.name = 'AteraRateLimitError';
    this.retryAfter = retryAfter;
    Object.setPrototypeOf(this, AteraRateLimitError.prototype);
  }
}

/**
 * Server error (500+)
 */
export class AteraServerError extends AteraError {
  constructor(message: string, statusCode: number = 500, response?: unknown) {
    super(message, statusCode, response);
    this.name = 'AteraServerError';
    Object.setPrototypeOf(this, AteraServerError.prototype);
  }
}
