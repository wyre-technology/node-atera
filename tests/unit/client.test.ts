/**
 * Client unit tests
 */

import { describe, it, expect } from 'vitest';
import { AteraClient } from '../../src/client.js';

describe('AteraClient', () => {
  describe('constructor', () => {
    it('should create a client with valid API key', () => {
      const client = new AteraClient({
        apiKey: 'test-api-key',
      });

      expect(client).toBeDefined();
      expect(client.agents).toBeDefined();
      expect(client.tickets).toBeDefined();
      expect(client.devices).toBeDefined();
      expect(client.customers).toBeDefined();
    });

    it('should throw error when API key is missing', () => {
      expect(() => {
        new AteraClient({
          apiKey: '',
        });
      }).toThrow('API key is required');
    });

    it('should use default base URL', () => {
      const client = new AteraClient({
        apiKey: 'test-api-key',
      });

      const config = client.getConfig();
      expect(config.baseUrl).toBe('https://app.atera.com/api/v3');
    });

    it('should use custom base URL when provided', () => {
      const client = new AteraClient({
        apiKey: 'test-api-key',
        baseUrl: 'https://custom.atera.com/api/v3',
      });

      const config = client.getConfig();
      expect(config.baseUrl).toBe('https://custom.atera.com/api/v3');
    });

    it('should use default rate limit config', () => {
      const client = new AteraClient({
        apiKey: 'test-api-key',
      });

      const config = client.getConfig();
      expect(config.rateLimit.enabled).toBe(true);
      expect(config.rateLimit.maxRequests).toBe(700);
      expect(config.rateLimit.windowMs).toBe(60000);
    });

    it('should override rate limit config when provided', () => {
      const client = new AteraClient({
        apiKey: 'test-api-key',
        rateLimit: {
          maxRequests: 500,
          throttleThreshold: 0.9,
        },
      });

      const config = client.getConfig();
      expect(config.rateLimit.maxRequests).toBe(500);
      expect(config.rateLimit.throttleThreshold).toBe(0.9);
      expect(config.rateLimit.windowMs).toBe(60000); // Default value
    });
  });

  describe('getConfig', () => {
    it('should return readonly config', () => {
      const client = new AteraClient({
        apiKey: 'test-api-key',
      });

      const config = client.getConfig();
      expect(config.apiKey).toBe('test-api-key');
    });
  });

  describe('getRateLimiterState', () => {
    it('should return rate limiter state', () => {
      const client = new AteraClient({
        apiKey: 'test-api-key',
      });

      const state = client.getRateLimiterState();
      expect(state.currentRate).toBe(0);
      expect(state.remainingRequests).toBe(700);
    });
  });

  describe('resources', () => {
    it('should expose all resource classes', () => {
      const client = new AteraClient({
        apiKey: 'test-api-key',
      });

      expect(client.agents).toBeDefined();
      expect(client.tickets).toBeDefined();
      expect(client.devices).toBeDefined();
      expect(client.devicesHttp).toBeDefined();
      expect(client.devicesSnmp).toBeDefined();
      expect(client.devicesTcp).toBeDefined();
      expect(client.customers).toBeDefined();
      expect(client.contacts).toBeDefined();
      expect(client.alerts).toBeDefined();
      expect(client.customValues).toBeDefined();
      expect(client.contracts).toBeDefined();
      expect(client.billing).toBeDefined();
      expect(client.rates).toBeDefined();
      expect(client.knowledgeBase).toBeDefined();
    });
  });
});
