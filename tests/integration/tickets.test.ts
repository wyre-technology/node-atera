/**
 * Tickets integration tests
 */

import { describe, it, expect } from 'vitest';
import { AteraClient } from '../../src/client.js';
import { AteraNotFoundError } from '../../src/errors.js';

const client = new AteraClient({
  apiKey: 'test-api-key',
});

describe('TicketsResource', () => {
  describe('list', () => {
    it('should list tickets', async () => {
      const result = await client.tickets.list();
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
    });

    it('should list tickets with filters', async () => {
      const result = await client.tickets.list({
        ticketStatus: 'Open',
        customerId: 100,
      });
      expect(result.items).toBeDefined();
    });
  });

  describe('listAll', () => {
    it('should iterate through all tickets', async () => {
      const tickets = await client.tickets.listAll().toArray();
      expect(tickets.length).toBe(4);
    });
  });

  describe('get', () => {
    it('should get a single ticket', async () => {
      const ticket = await client.tickets.get(1001);
      expect(ticket.TicketID).toBe(1001);
      expect(ticket.TicketTitle).toBe('Email not working');
    });

    it('should throw not found error for non-existent ticket', async () => {
      await expect(client.tickets.get(99999)).rejects.toThrow(AteraNotFoundError);
    });
  });

  describe('create', () => {
    it('should create a ticket', async () => {
      const ticket = await client.tickets.create({
        TicketTitle: 'New Issue',
        CustomerID: 100,
        TicketPriority: 'High',
      });
      expect(ticket.TicketTitle).toBe('New Issue');
    });
  });

  describe('update', () => {
    it('should update a ticket', async () => {
      const ticket = await client.tickets.update(1001, {
        TicketStatus: 'Pending',
      });
      expect(ticket.TicketStatus).toBe('Pending');
    });
  });

  describe('delete', () => {
    it('should delete a ticket', async () => {
      await expect(client.tickets.delete(1001)).resolves.toBeUndefined();
    });
  });

  describe('comments', () => {
    it('should list comments', async () => {
      const result = await client.tickets.listComments(1001);
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
    });

    it('should create a comment', async () => {
      const comment = await client.tickets.createComment(1001, {
        Comment: 'Test comment',
        IsInternal: true,
      });
      expect(comment.Comment).toBe('Test comment');
    });
  });

  describe('work hours', () => {
    it('should list work hours', async () => {
      const result = await client.tickets.listWorkHours(1001);
      expect(result.items).toBeDefined();
    });

    it('should create work hours', async () => {
      const workHours = await client.tickets.createWorkHours(1001, {
        TechnicianContactID: 400,
        Date: '2026-02-04',
        StartTime: '10:00:00',
        EndTime: '11:00:00',
      });
      expect(workHours).toBeDefined();
    });
  });

  describe('billable durations', () => {
    it('should list billable durations', async () => {
      const result = await client.tickets.listBillableDurations(1001);
      expect(result.items).toBeDefined();
    });
  });

  describe('timesheets', () => {
    it('should list timesheets', async () => {
      const result = await client.tickets.listTimesheets(1001);
      expect(result.items).toBeDefined();
    });

    it('should create timesheet entry', async () => {
      const timesheet = await client.tickets.createTimesheet(1001, {
        TechnicianContactID: 400,
        Date: '2026-02-04',
        Duration: 60,
      });
      expect(timesheet).toBeDefined();
    });
  });

  describe('filters', () => {
    it('should list ticket filters', async () => {
      const filters = await client.tickets.listFilters();
      expect(filters).toBeDefined();
      expect(filters.length).toBeGreaterThan(0);
    });
  });

  describe('statuses', () => {
    it('should list ticket statuses', async () => {
      const statuses = await client.tickets.listStatuses();
      expect(statuses).toBeDefined();
      expect(statuses.length).toBeGreaterThan(0);
    });
  });
});
