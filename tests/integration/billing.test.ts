/**
 * Billing integration tests
 */

import { describe, it, expect } from 'vitest';
import { AteraClient } from '../../src/client.js';
import { AteraNotFoundError } from '../../src/errors.js';

const client = new AteraClient({
  apiKey: 'test-api-key',
});

describe('BillingResource', () => {
  describe('listInvoices', () => {
    it('should list invoices', async () => {
      const result = await client.billing.listInvoices();
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
    });
  });

  describe('listInvoicesAll', () => {
    it('should iterate through all invoices', async () => {
      const invoices = await client.billing.listInvoicesAll().toArray();
      expect(invoices.length).toBe(2);
    });
  });

  describe('getInvoice', () => {
    it('should get a single invoice', async () => {
      const invoice = await client.billing.getInvoice(10001);
      expect(invoice.InvoiceID).toBe(10001);
      expect(invoice.InvoiceNumber).toBe('INV-2026-001');
    });

    it('should throw not found error for non-existent invoice', async () => {
      await expect(client.billing.getInvoice(99999)).rejects.toThrow(AteraNotFoundError);
    });
  });
});
