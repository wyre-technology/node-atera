/**
 * Rates integration tests
 */

import { describe, it, expect } from 'vitest';
import { AteraClient } from '../../src/client.js';
import { AteraNotFoundError } from '../../src/errors.js';

const client = new AteraClient({
  apiKey: 'test-api-key',
});

describe('RatesResource', () => {
  describe('list', () => {
    it('should list rates', async () => {
      const result = await client.rates.list();
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
    });
  });

  describe('listAll', () => {
    it('should iterate through all rates', async () => {
      const rates = await client.rates.listAll().toArray();
      expect(rates.length).toBe(3);
    });
  });

  describe('get', () => {
    it('should get a single rate', async () => {
      const rate = await client.rates.get(500);
      expect(rate.RateID).toBe(500);
      expect(rate.RateName).toBe('Standard Hourly');
    });

    it('should throw not found error for non-existent rate', async () => {
      await expect(client.rates.get(99999)).rejects.toThrow(AteraNotFoundError);
    });
  });

  describe('create', () => {
    it('should create a rate', async () => {
      const rate = await client.rates.create({
        RateName: 'New Rate',
        Amount: 175.0,
      });
      expect(rate.RateName).toBe('New Rate');
    });
  });

  describe('update', () => {
    it('should update a rate', async () => {
      const rate = await client.rates.update(500, {
        Amount: 160.0,
      });
      expect(rate.Amount).toBe(160.0);
    });
  });

  describe('delete', () => {
    it('should delete a rate', async () => {
      await expect(client.rates.delete(500)).resolves.toBeUndefined();
    });
  });

  describe('products', () => {
    it('should list products', async () => {
      const result = await client.rates.listProducts();
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
    });

    it('should get a single product', async () => {
      const product = await client.rates.getProduct(600);
      expect(product.ProductID).toBe(600);
      expect(product.ProductName).toBe('Antivirus License');
    });
  });

  describe('expenses', () => {
    it('should list expenses', async () => {
      const result = await client.rates.listExpenses();
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
    });

    it('should get a single expense', async () => {
      const expense = await client.rates.getExpense(700);
      expect(expense.ExpenseID).toBe(700);
      expect(expense.ExpenseName).toBe('Hardware Purchase');
    });
  });
});
