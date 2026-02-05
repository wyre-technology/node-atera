/**
 * Ticket fixtures
 */

export const single = {
  TicketID: 1001,
  TicketTitle: 'Email not working',
  TicketNumber: 'TKT-001001',
  TicketPriority: 'High',
  TicketImpact: 'Major',
  TicketStatus: 'Open',
  TicketType: 'Problem',
  TicketSource: 'Email',
  CustomerID: 100,
  CustomerName: 'Acme Corp',
  CustomerBusinessNumber: 'AC-100',
  ContactID: 200,
  ContactFullName: 'John Smith',
  ContactEmail: 'jsmith@acmecorp.com',
  ContractID: 300,
  ContractName: 'Premium Support',
  TechnicianContactID: 400,
  TechnicianFullName: 'Tech Support',
  FirstComment: 'User reports email is not syncing',
  LastEndUserComment: 'Still having issues',
  OnSiteVisits: 0,
  SLAName: 'Standard SLA',
  SLAStatus: 'On Track',
  DueDate: '2026-02-05T17:00:00Z',
  FirstResponseDueDate: '2026-02-04T12:00:00Z',
  FirstResponseDate: '2026-02-04T11:30:00Z',
  ResolvedDate: null,
  ClosedDate: null,
  CreatedDate: '2026-02-04T10:00:00Z',
  LastUpdatedDate: '2026-02-04T11:30:00Z',
  Tags: ['email', 'outlook', 'sync'],
};

export const listPage1 = {
  items: [
    single,
    {
      ...single,
      TicketID: 1002,
      TicketTitle: 'Printer not working',
      TicketNumber: 'TKT-001002',
      TicketPriority: 'Medium',
      TicketType: 'Incident',
      Tags: ['printer', 'hardware'],
    },
  ],
  totalItemCount: 4,
  page: 1,
  itemsInPage: 2,
  totalPages: 2,
  prevLink: null,
  nextLink: 'https://app.atera.com/api/v3/tickets?Page=2&ItemsInPage=2',
};

export const listPage2 = {
  items: [
    {
      ...single,
      TicketID: 1003,
      TicketTitle: 'VPN connection issues',
      TicketNumber: 'TKT-001003',
      TicketPriority: 'High',
      TicketType: 'Problem',
      Tags: ['vpn', 'network'],
    },
    {
      ...single,
      TicketID: 1004,
      TicketTitle: 'Software installation request',
      TicketNumber: 'TKT-001004',
      TicketPriority: 'Low',
      TicketType: 'Request',
      TicketStatus: 'Pending',
      Tags: ['software', 'installation'],
    },
  ],
  totalItemCount: 4,
  page: 2,
  itemsInPage: 2,
  totalPages: 2,
  prevLink: 'https://app.atera.com/api/v3/tickets?Page=1&ItemsInPage=2',
  nextLink: null,
};

export const comments = {
  items: [
    {
      CommentID: 5001,
      TicketID: 1001,
      Comment: 'Initial investigation started',
      Date: '2026-02-04T11:00:00Z',
      IsInternal: true,
      CreatorName: 'Tech Support',
      CreatorEmail: 'tech@support.com',
    },
    {
      CommentID: 5002,
      TicketID: 1001,
      Comment: 'Checking email server configuration',
      Date: '2026-02-04T11:30:00Z',
      IsInternal: false,
      CreatorName: 'Tech Support',
      CreatorEmail: 'tech@support.com',
    },
  ],
  totalItemCount: 2,
  page: 1,
  itemsInPage: 50,
  totalPages: 1,
  prevLink: null,
  nextLink: null,
};

export const workHours = {
  items: [
    {
      WorkHoursID: 6001,
      TicketID: 1001,
      TechnicianContactID: 400,
      TechnicianFullName: 'Tech Support',
      Date: '2026-02-04',
      StartTime: '11:00:00',
      EndTime: '12:00:00',
      Duration: 60,
      Description: 'Email server troubleshooting',
      IsBillable: true,
    },
  ],
  totalItemCount: 1,
  page: 1,
  itemsInPage: 50,
  totalPages: 1,
  prevLink: null,
  nextLink: null,
};

export const billableDurations = {
  items: [
    {
      BillableDurationID: 7001,
      TicketID: 1001,
      Duration: 60,
      Rate: 150.0,
      Total: 150.0,
    },
  ],
  totalItemCount: 1,
  page: 1,
  itemsInPage: 50,
  totalPages: 1,
  prevLink: null,
  nextLink: null,
};

export const timesheets = {
  items: [
    {
      TimesheetID: 8001,
      TicketID: 1001,
      TechnicianContactID: 400,
      TechnicianFullName: 'Tech Support',
      Date: '2026-02-04',
      Duration: 60,
      Description: 'Email troubleshooting',
    },
  ],
  totalItemCount: 1,
  page: 1,
  itemsInPage: 50,
  totalPages: 1,
  prevLink: null,
  nextLink: null,
};

export const filters = [
  { FilterID: 1, FilterName: 'All Open Tickets' },
  { FilterID: 2, FilterName: 'My Tickets' },
  { FilterID: 3, FilterName: 'High Priority' },
];

export const statuses = [
  { StatusID: 1, StatusName: 'Open' },
  { StatusID: 2, StatusName: 'Pending' },
  { StatusID: 3, StatusName: 'Resolved' },
  { StatusID: 4, StatusName: 'Closed' },
];
