/**
 * Alert fixtures
 */

export const single = {
  AlertID: 9001,
  AlertCategoryID: 1,
  AlertMessage: 'CPU usage exceeded 90%',
  AlertSeverity: 'Critical',
  Created: '2026-02-04T09:30:00Z',
  AgentID: 12345,
  AgentName: 'WORKSTATION-01',
  DeviceID: 0,
  DeviceName: '',
  CustomerID: 100,
  CustomerName: 'Acme Corp',
  Archived: false,
  AlertTitle: 'High CPU Usage',
  Code: 1001,
  Source: 'Performance Monitor',
  TicketID: 1001,
  FolderID: 1,
  PollingCyclesCount: 3,
  Snoozed: false,
};

export const list = {
  items: [
    single,
    {
      ...single,
      AlertID: 9002,
      AlertMessage: 'Disk space below 10%',
      AlertSeverity: 'Warning',
      AlertTitle: 'Low Disk Space',
      Code: 1002,
      Created: '2026-02-04T08:00:00Z',
    },
    {
      ...single,
      AlertID: 9003,
      AlertMessage: 'Antivirus definitions outdated',
      AlertSeverity: 'Information',
      AlertTitle: 'Antivirus Update Required',
      Code: 1003,
      Created: '2026-02-03T15:00:00Z',
    },
  ],
  totalItemCount: 3,
  page: 1,
  itemsInPage: 50,
  totalPages: 1,
  prevLink: null,
  nextLink: null,
};
