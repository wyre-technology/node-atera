/**
 * Alerts integration tests
 */

import { describe, it, expect } from 'vitest';
import { AteraClient } from '../../src/client.js';
import { AteraNotFoundError } from '../../src/errors.js';

const client = new AteraClient({
  apiKey: 'test-api-key',
});

describe('AlertsResource', () => {
  describe('list', () => {
    it('should list alerts', async () => {
      const result = await client.alerts.list();
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
    });

    it('should list alerts with filters', async () => {
      const result = await client.alerts.list({
        alertSeverity: 'Critical',
        archived: false,
      });
      expect(result.items).toBeDefined();
    });
  });

  describe('listAll', () => {
    it('should iterate through all alerts', async () => {
      const alerts = await client.alerts.listAll().toArray();
      expect(alerts.length).toBe(3);
    });
  });

  describe('get', () => {
    it('should get a single alert', async () => {
      const alert = await client.alerts.get(9001);
      expect(alert.AlertID).toBe(9001);
      expect(alert.AlertSeverity).toBe('Critical');
    });

    it('should throw not found error for non-existent alert', async () => {
      await expect(client.alerts.get(99999)).rejects.toThrow(AteraNotFoundError);
    });
  });

  describe('listByAgent', () => {
    it('should list alerts for an agent', async () => {
      const result = await client.alerts.listByAgent(12345);
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
    });
  });

  describe('listByDevice', () => {
    it('should list alerts for a device', async () => {
      const result = await client.alerts.listByDevice(2001);
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
    });
  });
});
