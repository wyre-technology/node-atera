/**
 * Customers integration tests
 */

import { describe, it, expect } from 'vitest';
import { AteraClient } from '../../src/client.js';
import { AteraNotFoundError } from '../../src/errors.js';

const client = new AteraClient({
  apiKey: 'test-api-key',
});

describe('CustomersResource', () => {
  describe('list', () => {
    it('should list customers', async () => {
      const result = await client.customers.list();
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
    });
  });

  describe('listAll', () => {
    it('should iterate through all customers', async () => {
      const customers = await client.customers.listAll().toArray();
      expect(customers.length).toBe(2);
    });
  });

  describe('get', () => {
    it('should get a single customer', async () => {
      const customer = await client.customers.get(100);
      expect(customer.CustomerID).toBe(100);
      expect(customer.CustomerName).toBe('Acme Corp');
    });

    it('should throw not found error for non-existent customer', async () => {
      await expect(client.customers.get(99999)).rejects.toThrow(AteraNotFoundError);
    });
  });

  describe('create', () => {
    it('should create a customer', async () => {
      const customer = await client.customers.create({
        CustomerName: 'New Customer',
      });
      expect(customer.CustomerName).toBe('New Customer');
    });
  });

  describe('update', () => {
    it('should update a customer', async () => {
      const customer = await client.customers.update(100, {
        Phone: '+1-555-999-9999',
      });
      expect(customer.Phone).toBe('+1-555-999-9999');
    });
  });

  describe('delete', () => {
    it('should delete a customer', async () => {
      await expect(client.customers.delete(100)).resolves.toBeUndefined();
    });
  });

  describe('listAgents', () => {
    it('should list agents for a customer', async () => {
      const result = await client.customers.listAgents(100);
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
    });
  });

  describe('listAlerts', () => {
    it('should list alerts for a customer', async () => {
      const result = await client.customers.listAlerts(100);
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
    });
  });
});
