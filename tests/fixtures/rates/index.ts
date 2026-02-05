/**
 * Rate fixtures
 */

export const single = {
  RateID: 500,
  RateName: 'Standard Hourly',
  RateType: 'Hourly',
  Amount: 150.0,
  Currency: 'USD',
  Description: 'Standard hourly rate for support services',
  Active: true,
  CreatedDate: '2024-01-01T00:00:00Z',
  LastModifiedDate: '2026-01-01T00:00:00Z',
};

export const list = {
  items: [
    single,
    {
      ...single,
      RateID: 501,
      RateName: 'After Hours',
      Amount: 225.0,
      Description: 'After hours support rate',
    },
    {
      ...single,
      RateID: 502,
      RateName: 'Emergency',
      Amount: 300.0,
      Description: 'Emergency/critical support rate',
    },
  ],
  totalItemCount: 3,
  page: 1,
  itemsInPage: 50,
  totalPages: 1,
  prevLink: null,
  nextLink: null,
};

export const productSingle = {
  ProductID: 600,
  ProductName: 'Antivirus License',
  ProductType: 'Software',
  Price: 50.0,
  Currency: 'USD',
  Description: 'Annual antivirus license per device',
  Active: true,
  CreatedDate: '2024-01-01T00:00:00Z',
};

export const products = {
  items: [
    productSingle,
    {
      ...productSingle,
      ProductID: 601,
      ProductName: 'Backup Service',
      ProductType: 'Service',
      Price: 25.0,
      Description: 'Monthly cloud backup per device',
    },
  ],
  totalItemCount: 2,
  page: 1,
  itemsInPage: 50,
  totalPages: 1,
  prevLink: null,
  nextLink: null,
};

export const expenseSingle = {
  ExpenseID: 700,
  ExpenseName: 'Hardware Purchase',
  ExpenseType: 'Equipment',
  Amount: 500.0,
  Currency: 'USD',
  Description: 'Replacement hard drive',
  Date: '2026-02-04T00:00:00Z',
  CustomerID: 100,
  CustomerName: 'Acme Corp',
};

export const expenses = {
  items: [
    expenseSingle,
    {
      ...expenseSingle,
      ExpenseID: 701,
      ExpenseName: 'Travel',
      ExpenseType: 'Travel',
      Amount: 75.0,
      Description: 'On-site visit mileage',
    },
  ],
  totalItemCount: 2,
  page: 1,
  itemsInPage: 50,
  totalPages: 1,
  prevLink: null,
  nextLink: null,
};
