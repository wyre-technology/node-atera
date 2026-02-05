/**
 * Devices integration tests
 */

import { describe, it, expect } from 'vitest';
import { AteraClient } from '../../src/client.js';
import { AteraNotFoundError } from '../../src/errors.js';

const client = new AteraClient({
  apiKey: 'test-api-key',
});

describe('DevicesResource', () => {
  describe('list', () => {
    it('should list devices', async () => {
      const result = await client.devices.list();
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
    });
  });

  describe('get', () => {
    it('should get a single device', async () => {
      const device = await client.devices.get(2001);
      expect(device.DeviceID).toBe(2001);
      expect(device.DeviceName).toBe('Main Router');
    });

    it('should throw not found error for non-existent device', async () => {
      await expect(client.devices.get(99999)).rejects.toThrow(AteraNotFoundError);
    });
  });

  describe('create', () => {
    it('should create a device', async () => {
      const device = await client.devices.create({
        DeviceName: 'New Device',
        CustomerID: 100,
      });
      expect(device.DeviceName).toBe('New Device');
    });
  });

  describe('update', () => {
    it('should update a device', async () => {
      const device = await client.devices.update(2001, {
        Description: 'Updated description',
      });
      expect(device.Description).toBe('Updated description');
    });
  });

  describe('delete', () => {
    it('should delete a device', async () => {
      await expect(client.devices.delete(2001)).resolves.toBeUndefined();
    });
  });
});

describe('DevicesHttpResource', () => {
  describe('list', () => {
    it('should list HTTP devices', async () => {
      const result = await client.devicesHttp.list();
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
    });
  });

  describe('create', () => {
    it('should create an HTTP device', async () => {
      const device = await client.devicesHttp.create({
        DeviceName: 'New Website Monitor',
        CustomerID: 100,
        URL: 'https://example.com',
      });
      expect(device.URL).toBe('https://example.com');
    });
  });

  describe('delete', () => {
    it('should delete an HTTP device', async () => {
      await expect(client.devicesHttp.delete(3001)).resolves.toBeUndefined();
    });
  });
});

describe('DevicesSnmpResource', () => {
  describe('list', () => {
    it('should list SNMP devices', async () => {
      const result = await client.devicesSnmp.list();
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
    });
  });

  describe('create', () => {
    it('should create an SNMP device', async () => {
      const device = await client.devicesSnmp.create({
        DeviceName: 'New Switch',
        CustomerID: 100,
        Hostname: 'switch.local',
      });
      expect(device.Hostname).toBe('switch.local');
    });
  });

  describe('delete', () => {
    it('should delete an SNMP device', async () => {
      await expect(client.devicesSnmp.delete(4001)).resolves.toBeUndefined();
    });
  });
});

describe('DevicesTcpResource', () => {
  describe('list', () => {
    it('should list TCP devices', async () => {
      const result = await client.devicesTcp.list();
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
    });
  });

  describe('create', () => {
    it('should create a TCP device', async () => {
      const device = await client.devicesTcp.create({
        DeviceName: 'New TCP Monitor',
        CustomerID: 100,
        Hostname: 'server.local',
        Port: 443,
      });
      expect(device.Port).toBe(443);
    });
  });

  describe('delete', () => {
    it('should delete a TCP device', async () => {
      await expect(client.devicesTcp.delete(5001)).resolves.toBeUndefined();
    });
  });
});
