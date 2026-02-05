/**
 * Contract fixtures
 */

export const single = {
  ContractID: 300,
  ContractName: 'Premium Support',
  CustomerID: 100,
  CustomerName: 'Acme Corp',
  ContractType: 'Managed Services',
  StartDate: '2025-01-01T00:00:00Z',
  EndDate: '2025-12-31T23:59:59Z',
  Value: 12000.0,
  Currency: 'USD',
  BillingPeriod: 'Monthly',
  Active: true,
  AutoRenew: true,
  CreatedDate: '2024-12-15T08:00:00Z',
  LastModifiedDate: '2026-01-01T10:00:00Z',
};

export const list = {
  items: [
    single,
    {
      ...single,
      ContractID: 301,
      ContractName: 'Basic Support',
      ContractType: 'Break-Fix',
      Value: 0,
      BillingPeriod: 'Per Incident',
      AutoRenew: false,
    },
  ],
  totalItemCount: 2,
  page: 1,
  itemsInPage: 50,
  totalPages: 1,
  prevLink: null,
  nextLink: null,
};
