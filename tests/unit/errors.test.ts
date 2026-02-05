/**
 * Error classes unit tests
 */

import { describe, it, expect } from 'vitest';
import {
  AteraError,
  AteraAuthenticationError,
  AteraNotFoundError,
  AteraValidationError,
  AteraRateLimitError,
  AteraServerError,
} from '../../src/errors.js';

describe('AteraError', () => {
  it('should create base error with message', () => {
    const error = new AteraError('Test error');
    expect(error.message).toBe('Test error');
    expect(error.name).toBe('AteraError');
    expect(error.statusCode).toBe(0);
    expect(error.response).toBeUndefined();
  });

  it('should create base error with status code and response', () => {
    const response = { error: 'test' };
    const error = new AteraError('Test error', 500, response);
    expect(error.statusCode).toBe(500);
    expect(error.response).toEqual(response);
  });

  it('should be instanceof Error', () => {
    const error = new AteraError('Test error');
    expect(error).toBeInstanceOf(Error);
  });
});

describe('AteraAuthenticationError', () => {
  it('should create authentication error', () => {
    const error = new AteraAuthenticationError('Invalid API key');
    expect(error.message).toBe('Invalid API key');
    expect(error.name).toBe('AteraAuthenticationError');
    expect(error.statusCode).toBe(401);
  });

  it('should be instanceof AteraError', () => {
    const error = new AteraAuthenticationError('Invalid API key');
    expect(error).toBeInstanceOf(AteraError);
  });
});

describe('AteraNotFoundError', () => {
  it('should create not found error', () => {
    const error = new AteraNotFoundError('Resource not found');
    expect(error.message).toBe('Resource not found');
    expect(error.name).toBe('AteraNotFoundError');
    expect(error.statusCode).toBe(404);
  });

  it('should be instanceof AteraError', () => {
    const error = new AteraNotFoundError('Resource not found');
    expect(error).toBeInstanceOf(AteraError);
  });
});

describe('AteraValidationError', () => {
  it('should create validation error', () => {
    const errors = [{ message: 'Field required', field: 'name' }];
    const error = new AteraValidationError('Validation failed', errors);
    expect(error.message).toBe('Validation failed');
    expect(error.name).toBe('AteraValidationError');
    expect(error.statusCode).toBe(400);
    expect(error.errors).toEqual(errors);
  });

  it('should default to empty errors array', () => {
    const error = new AteraValidationError('Validation failed');
    expect(error.errors).toEqual([]);
  });

  it('should be instanceof AteraError', () => {
    const error = new AteraValidationError('Validation failed');
    expect(error).toBeInstanceOf(AteraError);
  });
});

describe('AteraRateLimitError', () => {
  it('should create rate limit error', () => {
    const error = new AteraRateLimitError('Rate limit exceeded');
    expect(error.message).toBe('Rate limit exceeded');
    expect(error.name).toBe('AteraRateLimitError');
    expect(error.statusCode).toBe(429);
    expect(error.retryAfter).toBe(5000);
  });

  it('should use custom retry after', () => {
    const error = new AteraRateLimitError('Rate limit exceeded', 10000);
    expect(error.retryAfter).toBe(10000);
  });

  it('should be instanceof AteraError', () => {
    const error = new AteraRateLimitError('Rate limit exceeded');
    expect(error).toBeInstanceOf(AteraError);
  });
});

describe('AteraServerError', () => {
  it('should create server error with default status', () => {
    const error = new AteraServerError('Internal server error');
    expect(error.message).toBe('Internal server error');
    expect(error.name).toBe('AteraServerError');
    expect(error.statusCode).toBe(500);
  });

  it('should create server error with custom status', () => {
    const error = new AteraServerError('Service unavailable', 503);
    expect(error.statusCode).toBe(503);
  });

  it('should be instanceof AteraError', () => {
    const error = new AteraServerError('Internal server error');
    expect(error).toBeInstanceOf(AteraError);
  });
});
