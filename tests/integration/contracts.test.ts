/**
 * Contracts integration tests
 */

import { describe, it, expect } from 'vitest';
import { AteraClient } from '../../src/client.js';
import { AteraNotFoundError } from '../../src/errors.js';

const client = new AteraClient({
  apiKey: 'test-api-key',
});

describe('ContractsResource', () => {
  describe('list', () => {
    it('should list contracts', async () => {
      const result = await client.contracts.list();
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
    });
  });

  describe('listAll', () => {
    it('should iterate through all contracts', async () => {
      const contracts = await client.contracts.listAll().toArray();
      expect(contracts.length).toBe(2);
    });
  });

  describe('get', () => {
    it('should get a single contract', async () => {
      const contract = await client.contracts.get(300);
      expect(contract.ContractID).toBe(300);
      expect(contract.ContractName).toBe('Premium Support');
    });

    it('should throw not found error for non-existent contract', async () => {
      await expect(client.contracts.get(99999)).rejects.toThrow(AteraNotFoundError);
    });
  });

  describe('listByCustomer', () => {
    it('should list contracts for a customer', async () => {
      const result = await client.contracts.listByCustomer(100);
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
    });
  });
});
