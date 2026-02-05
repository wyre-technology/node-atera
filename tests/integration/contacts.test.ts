/**
 * Contacts integration tests
 */

import { describe, it, expect } from 'vitest';
import { AteraClient } from '../../src/client.js';
import { AteraNotFoundError } from '../../src/errors.js';

const client = new AteraClient({
  apiKey: 'test-api-key',
});

describe('ContactsResource', () => {
  describe('list', () => {
    it('should list contacts', async () => {
      const result = await client.contacts.list();
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
    });
  });

  describe('listAll', () => {
    it('should iterate through all contacts', async () => {
      const contacts = await client.contacts.listAll().toArray();
      expect(contacts.length).toBe(2);
    });
  });

  describe('get', () => {
    it('should get a single contact', async () => {
      const contact = await client.contacts.get(200);
      expect(contact.ContactID).toBe(200);
      expect(contact.FirstName).toBe('John');
      expect(contact.LastName).toBe('Smith');
    });

    it('should throw not found error for non-existent contact', async () => {
      await expect(client.contacts.get(99999)).rejects.toThrow(AteraNotFoundError);
    });
  });

  describe('create', () => {
    it('should create a contact', async () => {
      const contact = await client.contacts.create({
        CustomerID: 100,
        Email: 'newcontact@example.com',
        FirstName: 'New',
        LastName: 'Contact',
      });
      expect(contact.Email).toBe('newcontact@example.com');
    });
  });

  describe('update', () => {
    it('should update a contact', async () => {
      const contact = await client.contacts.update(200, {
        JobTitle: 'Senior IT Manager',
      });
      expect(contact.JobTitle).toBe('Senior IT Manager');
    });
  });

  describe('delete', () => {
    it('should delete a contact', async () => {
      await expect(client.contacts.delete(200)).resolves.toBeUndefined();
    });
  });

  describe('listByCustomer', () => {
    it('should list contacts for a customer', async () => {
      const result = await client.contacts.listByCustomer(100);
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
    });
  });
});
