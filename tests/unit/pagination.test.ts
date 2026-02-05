/**
 * Pagination unit tests
 */

import { describe, it, expect } from 'vitest';
import { buildPaginationParams } from '../../src/pagination.js';

describe('buildPaginationParams', () => {
  it('should return empty object when no params', () => {
    expect(buildPaginationParams()).toEqual({});
    expect(buildPaginationParams({})).toEqual({});
  });

  it('should include Page when provided', () => {
    const params = buildPaginationParams({ page: 2 });
    expect(params).toEqual({ Page: 2 });
  });

  it('should include ItemsInPage when provided', () => {
    const params = buildPaginationParams({ itemsInPage: 25 });
    expect(params).toEqual({ ItemsInPage: 25 });
  });

  it('should include both parameters when provided', () => {
    const params = buildPaginationParams({ page: 3, itemsInPage: 50 });
    expect(params).toEqual({ Page: 3, ItemsInPage: 50 });
  });
});
