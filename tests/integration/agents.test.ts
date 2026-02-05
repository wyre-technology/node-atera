/**
 * Agents integration tests
 */

import { describe, it, expect } from 'vitest';
import { AteraClient } from '../../src/client.js';
import { AteraAuthenticationError, AteraNotFoundError } from '../../src/errors.js';

const client = new AteraClient({
  apiKey: 'test-api-key',
});

describe('AgentsResource', () => {
  describe('list', () => {
    it('should list agents', async () => {
      const result = await client.agents.list();
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
      expect(result.totalItemCount).toBe(4);
      expect(result.page).toBe(1);
    });

    it('should list agents with pagination', async () => {
      const result = await client.agents.list({ page: 2 });
      expect(result.page).toBe(2);
    });

    it('should throw authentication error with invalid API key', async () => {
      const invalidClient = new AteraClient({
        apiKey: 'invalid-api-key',
      });
      await expect(invalidClient.agents.list()).rejects.toThrow(AteraAuthenticationError);
    });
  });

  describe('listAll', () => {
    it('should iterate through all agents', async () => {
      const agents = [];
      for await (const agent of client.agents.listAll()) {
        agents.push(agent);
      }
      expect(agents.length).toBe(4);
    });

    it('should support toArray helper', async () => {
      const agents = await client.agents.listAll().toArray();
      expect(agents.length).toBe(4);
    });
  });

  describe('get', () => {
    it('should get a single agent', async () => {
      const agent = await client.agents.get(12345);
      expect(agent.AgentID).toBe(12345);
      expect(agent.AgentName).toBe('WORKSTATION-01');
      expect(agent.CustomerName).toBe('Acme Corp');
    });

    it('should throw not found error for non-existent agent', async () => {
      await expect(client.agents.get(99999)).rejects.toThrow(AteraNotFoundError);
    });
  });

  describe('getByMachineName', () => {
    it('should get agent by machine name', async () => {
      const agent = await client.agents.getByMachineName('WORKSTATION-01');
      expect(agent.MachineName).toBe('WORKSTATION-01');
    });
  });

  describe('delete', () => {
    it('should delete an agent', async () => {
      await expect(client.agents.delete(12345)).resolves.toBeUndefined();
    });
  });

  describe('runPowerShell', () => {
    it('should run PowerShell script on agent', async () => {
      const result = await client.agents.runPowerShell(12345, 1, {
        Script: 'Get-Process',
      });
      expect(result.JobId).toBe(99001);
      expect(result.Status).toBe('Scheduled');
    });
  });
});
