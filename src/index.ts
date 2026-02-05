/**
 * node-atera
 * Comprehensive, fully-typed Node.js/TypeScript library for the Atera REST API v3
 */

// Main client
export { AteraClient } from './client.js';

// Configuration
export type { AteraConfig, RateLimitConfig } from './config.js';
export { DEFAULT_RATE_LIMIT_CONFIG, DEFAULT_BASE_URL } from './config.js';

// Error classes
export {
  AteraError,
  AteraAuthenticationError,
  AteraNotFoundError,
  AteraValidationError,
  AteraRateLimitError,
  AteraServerError,
} from './errors.js';

// Pagination
export type { PaginationParams, PaginationMeta, PaginatedResponse } from './pagination.js';
export { PaginatedIterable } from './pagination.js';

// Types
export * from './types/index.js';
