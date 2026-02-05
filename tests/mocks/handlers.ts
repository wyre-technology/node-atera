/**
 * MSW request handlers for mocking the Atera API
 */

import { http, HttpResponse } from 'msw';
import * as fixtures from '../fixtures/index.js';

const BASE_URL = 'https://app.atera.com/api/v3';

export const handlers = [
  // ==================== Agents ====================
  http.get(`${BASE_URL}/agents`, ({ request }) => {
    const url = new URL(request.url);
    const apiKey = request.headers.get('X-API-KEY');

    if (!apiKey || apiKey === 'invalid-api-key') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const page = url.searchParams.get('Page') || '1';
    if (page === '2') {
      return HttpResponse.json(fixtures.agents.listPage2);
    }
    return HttpResponse.json(fixtures.agents.listPage1);
  }),

  http.get(`${BASE_URL}/agents/:agentId`, ({ params }) => {
    const { agentId } = params;
    if (agentId === '99999') {
      return HttpResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return HttpResponse.json(fixtures.agents.single);
  }),

  http.get(`${BASE_URL}/agents/machine/:machineName`, () => {
    return HttpResponse.json(fixtures.agents.single);
  }),

  http.delete(`${BASE_URL}/agents/:agentId`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  http.post(`${BASE_URL}/agents/:agentId/powershell/runtime/:runtimeId`, () => {
    return HttpResponse.json(fixtures.agents.powerShellResponse);
  }),

  // ==================== Tickets ====================
  // ==================== Tickets ====================
  // Specific routes must come before parameterized routes
  http.get(`${BASE_URL}/tickets/filters`, () => {
    return HttpResponse.json(fixtures.tickets.filters);
  }),

  http.get(`${BASE_URL}/tickets/statuses`, () => {
    return HttpResponse.json(fixtures.tickets.statuses);
  }),

  http.get(`${BASE_URL}/tickets`, ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('Page') || '1';
    if (page === '2') {
      return HttpResponse.json(fixtures.tickets.listPage2);
    }
    return HttpResponse.json(fixtures.tickets.listPage1);
  }),

  http.get(`${BASE_URL}/tickets/:ticketId/comments`, () => {
    return HttpResponse.json(fixtures.tickets.comments);
  }),

  http.post(`${BASE_URL}/tickets/:ticketId/comments`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ CommentID: 1, ...(body as object) }, { status: 201 });
  }),

  http.get(`${BASE_URL}/tickets/:ticketId/workhours`, () => {
    return HttpResponse.json(fixtures.tickets.workHours);
  }),

  http.post(`${BASE_URL}/tickets/:ticketId/workhours`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ WorkHoursID: 1, ...(body as object) }, { status: 201 });
  }),

  http.get(`${BASE_URL}/tickets/:ticketId/billabledurations`, () => {
    return HttpResponse.json(fixtures.tickets.billableDurations);
  }),

  http.get(`${BASE_URL}/tickets/:ticketId/timesheets`, () => {
    return HttpResponse.json(fixtures.tickets.timesheets);
  }),

  http.post(`${BASE_URL}/tickets/:ticketId/timesheets`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ TimesheetID: 1, ...(body as object) }, { status: 201 });
  }),

  http.get(`${BASE_URL}/tickets/:ticketId`, ({ params }) => {
    const { ticketId } = params;
    if (ticketId === '99999') {
      return HttpResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return HttpResponse.json(fixtures.tickets.single);
  }),

  http.post(`${BASE_URL}/tickets`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ ...fixtures.tickets.single, ...(body as object) }, { status: 201 });
  }),

  http.post(`${BASE_URL}/tickets/:ticketId`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ ...fixtures.tickets.single, ...(body as object) });
  }),

  http.delete(`${BASE_URL}/tickets/:ticketId`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  // ==================== Devices ====================
  // HTTP devices (specific routes must come before parameterized routes)
  http.get(`${BASE_URL}/devices/httpdevices`, () => {
    return HttpResponse.json(fixtures.devices.httpList);
  }),

  http.post(`${BASE_URL}/devices/httpdevices`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ ...fixtures.devices.httpSingle, ...(body as object) }, { status: 201 });
  }),

  http.delete(`${BASE_URL}/devices/httpdevices/:deviceId`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  // SNMP devices
  http.get(`${BASE_URL}/devices/snmpdevices`, () => {
    return HttpResponse.json(fixtures.devices.snmpList);
  }),

  http.post(`${BASE_URL}/devices/snmpdevices`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ ...fixtures.devices.snmpSingle, ...(body as object) }, { status: 201 });
  }),

  http.delete(`${BASE_URL}/devices/snmpdevices/:deviceId`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  // TCP devices
  http.get(`${BASE_URL}/devices/tcpdevices`, () => {
    return HttpResponse.json(fixtures.devices.tcpList);
  }),

  http.post(`${BASE_URL}/devices/tcpdevices`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ ...fixtures.devices.tcpSingle, ...(body as object) }, { status: 201 });
  }),

  http.delete(`${BASE_URL}/devices/tcpdevices/:deviceId`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  // Generic devices (parameterized routes come after specific routes)
  http.get(`${BASE_URL}/devices`, () => {
    return HttpResponse.json(fixtures.devices.list);
  }),

  http.get(`${BASE_URL}/devices/:deviceId`, ({ params }) => {
    const { deviceId } = params;
    if (deviceId === '99999') {
      return HttpResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return HttpResponse.json(fixtures.devices.single);
  }),

  http.post(`${BASE_URL}/devices`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ ...fixtures.devices.single, ...(body as object) }, { status: 201 });
  }),

  http.post(`${BASE_URL}/devices/:deviceId`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ ...fixtures.devices.single, ...(body as object) });
  }),

  http.delete(`${BASE_URL}/devices/:deviceId`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  // ==================== Customers ====================
  http.get(`${BASE_URL}/customers`, () => {
    return HttpResponse.json(fixtures.customers.list);
  }),

  http.get(`${BASE_URL}/customers/:customerId`, ({ params }) => {
    const { customerId } = params;
    if (customerId === '99999') {
      return HttpResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return HttpResponse.json(fixtures.customers.single);
  }),

  http.post(`${BASE_URL}/customers`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ ...fixtures.customers.single, ...(body as object) }, { status: 201 });
  }),

  http.post(`${BASE_URL}/customers/:customerId`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ ...fixtures.customers.single, ...(body as object) });
  }),

  http.delete(`${BASE_URL}/customers/:customerId`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  http.get(`${BASE_URL}/customers/:customerId/agents`, () => {
    return HttpResponse.json(fixtures.agents.listPage1);
  }),

  http.get(`${BASE_URL}/customers/:customerId/alerts`, () => {
    return HttpResponse.json(fixtures.alerts.list);
  }),

  // ==================== Contacts ====================
  http.get(`${BASE_URL}/contacts`, () => {
    return HttpResponse.json(fixtures.contacts.list);
  }),

  http.get(`${BASE_URL}/contacts/:contactId`, ({ params }) => {
    const { contactId } = params;
    if (contactId === '99999') {
      return HttpResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return HttpResponse.json(fixtures.contacts.single);
  }),

  http.post(`${BASE_URL}/contacts`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ ...fixtures.contacts.single, ...(body as object) }, { status: 201 });
  }),

  http.post(`${BASE_URL}/contacts/:contactId`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ ...fixtures.contacts.single, ...(body as object) });
  }),

  http.delete(`${BASE_URL}/contacts/:contactId`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  http.get(`${BASE_URL}/contacts/customer/:customerId`, () => {
    return HttpResponse.json(fixtures.contacts.list);
  }),

  // ==================== Alerts ====================
  http.get(`${BASE_URL}/alerts`, () => {
    return HttpResponse.json(fixtures.alerts.list);
  }),

  http.get(`${BASE_URL}/alerts/:alertId`, ({ params }) => {
    const { alertId } = params;
    if (alertId === '99999') {
      return HttpResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return HttpResponse.json(fixtures.alerts.single);
  }),

  http.get(`${BASE_URL}/alerts/agent/:agentId`, () => {
    return HttpResponse.json(fixtures.alerts.list);
  }),

  http.get(`${BASE_URL}/alerts/device/:deviceId`, () => {
    return HttpResponse.json(fixtures.alerts.list);
  }),

  // ==================== Custom Values ====================
  http.get(`${BASE_URL}/customvalues/agentfield`, () => {
    return HttpResponse.json(fixtures.customValues.agentFields);
  }),

  http.get(`${BASE_URL}/customvalues/agent/:agentId`, () => {
    return HttpResponse.json(fixtures.customValues.values);
  }),

  http.get(`${BASE_URL}/customvalues/agentfieldname/:fieldName`, () => {
    return HttpResponse.json(fixtures.customValues.singleField);
  }),

  http.post(`${BASE_URL}/customvalues/agent/:agentId`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ FieldID: 1, ...(body as object) });
  }),

  http.delete(`${BASE_URL}/customvalues/agent/:agentId/field/:fieldId`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  http.get(`${BASE_URL}/customvalues/ticketfield`, () => {
    return HttpResponse.json(fixtures.customValues.ticketFields);
  }),

  http.get(`${BASE_URL}/customvalues/ticket/:ticketId`, () => {
    return HttpResponse.json(fixtures.customValues.values);
  }),

  http.get(`${BASE_URL}/customvalues/ticketfieldname/:fieldName`, () => {
    return HttpResponse.json(fixtures.customValues.singleField);
  }),

  http.post(`${BASE_URL}/customvalues/ticket/:ticketId`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ FieldID: 1, ...(body as object) });
  }),

  http.delete(`${BASE_URL}/customvalues/ticket/:ticketId/field/:fieldId`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  http.get(`${BASE_URL}/customvalues/customerfield`, () => {
    return HttpResponse.json(fixtures.customValues.customerFields);
  }),

  http.get(`${BASE_URL}/customvalues/customer/:customerId`, () => {
    return HttpResponse.json(fixtures.customValues.values);
  }),

  http.get(`${BASE_URL}/customvalues/customerfieldname/:fieldName`, () => {
    return HttpResponse.json(fixtures.customValues.singleField);
  }),

  http.post(`${BASE_URL}/customvalues/customer/:customerId`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ FieldID: 1, ...(body as object) });
  }),

  http.delete(`${BASE_URL}/customvalues/customer/:customerId/field/:fieldId`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  http.get(`${BASE_URL}/customvalues/contactfield`, () => {
    return HttpResponse.json(fixtures.customValues.contactFields);
  }),

  http.get(`${BASE_URL}/customvalues/contact/:contactId`, () => {
    return HttpResponse.json(fixtures.customValues.values);
  }),

  http.get(`${BASE_URL}/customvalues/contactfieldname/:fieldName`, () => {
    return HttpResponse.json(fixtures.customValues.singleField);
  }),

  http.post(`${BASE_URL}/customvalues/contact/:contactId`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ FieldID: 1, ...(body as object) });
  }),

  http.delete(`${BASE_URL}/customvalues/contact/:contactId/field/:fieldId`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  http.get(`${BASE_URL}/customvalues/contractfield`, () => {
    return HttpResponse.json(fixtures.customValues.contractFields);
  }),

  http.get(`${BASE_URL}/customvalues/contract/:contractId`, () => {
    return HttpResponse.json(fixtures.customValues.values);
  }),

  http.get(`${BASE_URL}/customvalues/contractfieldname/:fieldName`, () => {
    return HttpResponse.json(fixtures.customValues.singleField);
  }),

  http.post(`${BASE_URL}/customvalues/contractfield`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ FieldID: 1, ...(body as object) }, { status: 201 });
  }),

  http.post(`${BASE_URL}/customvalues/contract/:contractId`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ FieldID: 1, ...(body as object) });
  }),

  http.delete(`${BASE_URL}/customvalues/contract/:contractId/field/:fieldId`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  // ==================== Contracts ====================
  http.get(`${BASE_URL}/contracts`, () => {
    return HttpResponse.json(fixtures.contracts.list);
  }),

  http.get(`${BASE_URL}/contracts/:contractId`, ({ params }) => {
    const { contractId } = params;
    if (contractId === '99999') {
      return HttpResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return HttpResponse.json(fixtures.contracts.single);
  }),

  http.get(`${BASE_URL}/contracts/customer/:customerId`, () => {
    return HttpResponse.json(fixtures.contracts.list);
  }),

  // ==================== Billing ====================
  http.get(`${BASE_URL}/billing/invoices`, () => {
    return HttpResponse.json(fixtures.billing.invoicesList);
  }),

  http.get(`${BASE_URL}/billing/invoices/:invoiceId`, ({ params }) => {
    const { invoiceId } = params;
    if (invoiceId === '99999') {
      return HttpResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return HttpResponse.json(fixtures.billing.invoiceSingle);
  }),

  // ==================== Rates ====================
  // Products and expenses (specific routes must come before parameterized routes)
  http.get(`${BASE_URL}/rates/products`, () => {
    return HttpResponse.json(fixtures.rates.products);
  }),

  http.get(`${BASE_URL}/rates/products/:productId`, () => {
    return HttpResponse.json(fixtures.rates.productSingle);
  }),

  http.get(`${BASE_URL}/rates/expenses`, () => {
    return HttpResponse.json(fixtures.rates.expenses);
  }),

  http.get(`${BASE_URL}/rates/expenses/:expenseId`, () => {
    return HttpResponse.json(fixtures.rates.expenseSingle);
  }),

  // Generic rates (parameterized routes come after)
  http.get(`${BASE_URL}/rates`, () => {
    return HttpResponse.json(fixtures.rates.list);
  }),

  http.get(`${BASE_URL}/rates/:rateId`, ({ params }) => {
    const { rateId } = params;
    if (rateId === '99999') {
      return HttpResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return HttpResponse.json(fixtures.rates.single);
  }),

  http.post(`${BASE_URL}/rates`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ ...fixtures.rates.single, ...(body as object) }, { status: 201 });
  }),

  http.post(`${BASE_URL}/rates/:rateId`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ ...fixtures.rates.single, ...(body as object) });
  }),

  http.delete(`${BASE_URL}/rates/:rateId`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  // ==================== Knowledge Base ====================
  http.get(`${BASE_URL}/knowledgebase`, () => {
    return HttpResponse.json(fixtures.knowledgeBase.list);
  }),

  // ==================== Error scenarios ====================
  http.get(`${BASE_URL}/rate-limited`, () => {
    return HttpResponse.json({ error: 'rate_limit_exceeded' }, { status: 429 });
  }),

  http.get(`${BASE_URL}/validation-error`, () => {
    return HttpResponse.json(
      { error: 'Validation failed', errors: [{ message: 'Field is required', field: 'name' }] },
      { status: 400 }
    );
  }),

  http.get(`${BASE_URL}/server-error`, () => {
    return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
  }),
];
