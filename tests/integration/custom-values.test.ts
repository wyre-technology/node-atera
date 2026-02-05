/**
 * Custom values integration tests
 */

import { describe, it, expect } from 'vitest';
import { AteraClient } from '../../src/client.js';

const client = new AteraClient({
  apiKey: 'test-api-key',
});

describe('CustomValuesResource', () => {
  describe('Agent Custom Values', () => {
    it('should list agent fields', async () => {
      const fields = await client.customValues.listAgentFields();
      expect(fields).toBeDefined();
      expect(fields.length).toBeGreaterThan(0);
    });

    it('should list values by agent', async () => {
      const values = await client.customValues.listByAgent(12345);
      expect(values).toBeDefined();
    });

    it('should get agent field by name', async () => {
      const field = await client.customValues.getAgentFieldByName('Location');
      expect(field.FieldName).toBe('Location');
    });

    it('should set agent value', async () => {
      const value = await client.customValues.setAgentValue(12345, {
        FieldName: 'Location',
        Value: 'Building A',
      });
      expect(value).toBeDefined();
    });

    it('should delete agent value', async () => {
      await expect(client.customValues.deleteAgentValue(12345, 1)).resolves.toBeUndefined();
    });
  });

  describe('Ticket Custom Values', () => {
    it('should list ticket fields', async () => {
      const fields = await client.customValues.listTicketFields();
      expect(fields).toBeDefined();
      expect(fields.length).toBeGreaterThan(0);
    });

    it('should list values by ticket', async () => {
      const values = await client.customValues.listByTicket(1001);
      expect(values).toBeDefined();
    });

    it('should set ticket value', async () => {
      const value = await client.customValues.setTicketValue(1001, {
        FieldName: 'Affected Systems',
        Value: 'Email Server',
      });
      expect(value).toBeDefined();
    });

    it('should delete ticket value', async () => {
      await expect(client.customValues.deleteTicketValue(1001, 10)).resolves.toBeUndefined();
    });
  });

  describe('Customer Custom Values', () => {
    it('should list customer fields', async () => {
      const fields = await client.customValues.listCustomerFields();
      expect(fields).toBeDefined();
      expect(fields.length).toBeGreaterThan(0);
    });

    it('should list values by customer', async () => {
      const values = await client.customValues.listByCustomer(100);
      expect(values).toBeDefined();
    });

    it('should set customer value', async () => {
      const value = await client.customValues.setCustomerValue(100, {
        FieldName: 'Account Manager',
        Value: 'John Doe',
      });
      expect(value).toBeDefined();
    });

    it('should delete customer value', async () => {
      await expect(client.customValues.deleteCustomerValue(100, 20)).resolves.toBeUndefined();
    });
  });

  describe('Contact Custom Values', () => {
    it('should list contact fields', async () => {
      const fields = await client.customValues.listContactFields();
      expect(fields).toBeDefined();
      expect(fields.length).toBeGreaterThan(0);
    });

    it('should list values by contact', async () => {
      const values = await client.customValues.listByContact(200);
      expect(values).toBeDefined();
    });

    it('should set contact value', async () => {
      const value = await client.customValues.setContactValue(200, {
        FieldName: 'Preferred Contact Time',
        Value: 'Morning',
      });
      expect(value).toBeDefined();
    });

    it('should delete contact value', async () => {
      await expect(client.customValues.deleteContactValue(200, 30)).resolves.toBeUndefined();
    });
  });

  describe('Contract Custom Values', () => {
    it('should list contract fields', async () => {
      const fields = await client.customValues.listContractFields();
      expect(fields).toBeDefined();
      expect(fields.length).toBeGreaterThan(0);
    });

    it('should list values by contract', async () => {
      const values = await client.customValues.listByContract(300);
      expect(values).toBeDefined();
    });

    it('should create contract field', async () => {
      const field = await client.customValues.createContractField({
        FieldName: 'New Field',
        FieldType: 'Text',
      });
      expect(field).toBeDefined();
    });

    it('should set contract value', async () => {
      const value = await client.customValues.setContractValue(300, {
        FieldName: 'SLA Level',
        Value: 'Gold',
      });
      expect(value).toBeDefined();
    });

    it('should delete contract value', async () => {
      await expect(client.customValues.deleteContractValue(300, 40)).resolves.toBeUndefined();
    });
  });
});
