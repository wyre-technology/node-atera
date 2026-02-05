/**
 * Rate limiter unit tests
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { RateLimiter } from '../../src/rate-limiter.js';
import { DEFAULT_RATE_LIMIT_CONFIG } from '../../src/config.js';

describe('RateLimiter', () => {
  let rateLimiter: RateLimiter;

  beforeEach(() => {
    rateLimiter = new RateLimiter(DEFAULT_RATE_LIMIT_CONFIG);
  });

  describe('recordRequest', () => {
    it('should record a request', () => {
      expect(rateLimiter.getCurrentRate()).toBe(0);
      rateLimiter.recordRequest();
      expect(rateLimiter.getCurrentRate()).toBeGreaterThan(0);
    });

    it('should not record when disabled', () => {
      const disabled = new RateLimiter({
        ...DEFAULT_RATE_LIMIT_CONFIG,
        enabled: false,
      });
      disabled.recordRequest();
      expect(disabled.getCurrentRate()).toBe(0);
    });
  });

  describe('getCurrentRate', () => {
    it('should return 0 when no requests made', () => {
      expect(rateLimiter.getCurrentRate()).toBe(0);
    });

    it('should increase with requests', () => {
      rateLimiter.recordRequest();
      rateLimiter.recordRequest();
      rateLimiter.recordRequest();
      expect(rateLimiter.getCurrentRate()).toBe(3 / 700);
    });
  });

  describe('getRemainingRequests', () => {
    it('should return max when no requests made', () => {
      expect(rateLimiter.getRemainingRequests()).toBe(700);
    });

    it('should decrease with requests', () => {
      rateLimiter.recordRequest();
      rateLimiter.recordRequest();
      expect(rateLimiter.getRemainingRequests()).toBe(698);
    });
  });

  describe('calculateRetryDelay', () => {
    it('should calculate exponential backoff', () => {
      expect(rateLimiter.calculateRetryDelay(0)).toBe(5000);
      expect(rateLimiter.calculateRetryDelay(1)).toBe(10000);
      expect(rateLimiter.calculateRetryDelay(2)).toBe(20000);
    });

    it('should cap at 30 seconds', () => {
      expect(rateLimiter.calculateRetryDelay(10)).toBe(30000);
    });
  });

  describe('shouldRetry', () => {
    it('should allow retries below max', () => {
      expect(rateLimiter.shouldRetry(0)).toBe(true);
      expect(rateLimiter.shouldRetry(1)).toBe(true);
      expect(rateLimiter.shouldRetry(2)).toBe(true);
    });

    it('should not allow retries at or above max', () => {
      expect(rateLimiter.shouldRetry(3)).toBe(false);
      expect(rateLimiter.shouldRetry(4)).toBe(false);
    });
  });

  describe('waitForSlot', () => {
    it('should resolve immediately when disabled', async () => {
      const disabled = new RateLimiter({
        ...DEFAULT_RATE_LIMIT_CONFIG,
        enabled: false,
      });
      await expect(disabled.waitForSlot()).resolves.toBeUndefined();
    });

    it('should resolve immediately when under threshold', async () => {
      await expect(rateLimiter.waitForSlot()).resolves.toBeUndefined();
    });
  });
});
