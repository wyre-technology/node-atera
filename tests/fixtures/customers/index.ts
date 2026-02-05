/**
 * Customer fixtures
 */

export const single = {
  CustomerID: 100,
  CustomerName: 'Acme Corp',
  BusinessNumber: 'AC-100',
  Domain: 'acmecorp.com',
  Address: '123 Main Street',
  City: 'Springfield',
  State: 'IL',
  Country: 'USA',
  ZipCode: '62701',
  Phone: '+1-555-123-4567',
  Fax: '+1-555-123-4568',
  Notes: 'Premium customer since 2020',
  Website: 'https://www.acmecorp.com',
  CreatedDate: '2020-01-15T08:00:00Z',
  LastModifiedDate: '2026-02-01T10:00:00Z',
  Logo: 'https://cdn.atera.com/logos/acme.png',
  PrimaryContact: {
    ContactID: 200,
    ContactName: 'John Smith',
    Email: 'jsmith@acmecorp.com',
    Phone: '+1-555-123-4569',
  },
};

export const list = {
  items: [
    single,
    {
      ...single,
      CustomerID: 101,
      CustomerName: 'TechStart Inc',
      BusinessNumber: 'TS-101',
      Domain: 'techstart.io',
      Address: '456 Tech Drive',
      City: 'San Jose',
      State: 'CA',
      Website: 'https://www.techstart.io',
      PrimaryContact: {
        ContactID: 201,
        ContactName: 'Jane Doe',
        Email: 'jdoe@techstart.io',
        Phone: '+1-555-987-6543',
      },
    },
  ],
  totalItemCount: 2,
  page: 1,
  itemsInPage: 50,
  totalPages: 1,
  prevLink: null,
  nextLink: null,
};
