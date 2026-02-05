/**
 * Contact fixtures
 */

export const single = {
  ContactID: 200,
  CustomerID: 100,
  CustomerName: 'Acme Corp',
  Email: 'jsmith@acmecorp.com',
  FirstName: 'John',
  LastName: 'Smith',
  FullName: 'John Smith',
  JobTitle: 'IT Manager',
  Phone: '+1-555-123-4569',
  MobilePhone: '+1-555-123-4570',
  IsContactPerson: true,
  InIgnoreMode: false,
  CreatedDate: '2020-01-15T08:00:00Z',
  LastModifiedDate: '2026-02-01T10:00:00Z',
};

export const list = {
  items: [
    single,
    {
      ...single,
      ContactID: 201,
      Email: 'mjohnson@acmecorp.com',
      FirstName: 'Mary',
      LastName: 'Johnson',
      FullName: 'Mary Johnson',
      JobTitle: 'Office Manager',
      Phone: '+1-555-123-4571',
      MobilePhone: '+1-555-123-4572',
      IsContactPerson: false,
    },
  ],
  totalItemCount: 2,
  page: 1,
  itemsInPage: 50,
  totalPages: 1,
  prevLink: null,
  nextLink: null,
};
