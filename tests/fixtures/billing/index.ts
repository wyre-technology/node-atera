/**
 * Billing fixtures
 */

export const invoiceSingle = {
  InvoiceID: 10001,
  InvoiceNumber: 'INV-2026-001',
  CustomerID: 100,
  CustomerName: 'Acme Corp',
  ContractID: 300,
  ContractName: 'Premium Support',
  Amount: 1000.0,
  Currency: 'USD',
  Status: 'Paid',
  DueDate: '2026-02-15T00:00:00Z',
  PaidDate: '2026-02-10T00:00:00Z',
  CreatedDate: '2026-02-01T00:00:00Z',
};

export const invoicesList = {
  items: [
    invoiceSingle,
    {
      ...invoiceSingle,
      InvoiceID: 10002,
      InvoiceNumber: 'INV-2026-002',
      Amount: 1000.0,
      Status: 'Unpaid',
      DueDate: '2026-03-15T00:00:00Z',
      PaidDate: null,
      CreatedDate: '2026-03-01T00:00:00Z',
    },
  ],
  totalItemCount: 2,
  page: 1,
  itemsInPage: 50,
  totalPages: 1,
  prevLink: null,
  nextLink: null,
};
