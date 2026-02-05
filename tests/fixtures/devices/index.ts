/**
 * Device fixtures
 */

export const single = {
  DeviceID: 2001,
  DeviceName: 'Main Router',
  DeviceType: 'Network',
  CustomerID: 100,
  CustomerName: 'Acme Corp',
  Online: true,
  LastSeenDate: '2026-02-04T10:00:00Z',
  CreatedDate: '2025-01-15T08:00:00Z',
  Description: 'Main office router',
  Hostname: 'router.acmecorp.local',
  IPAddress: '192.168.1.1',
  Port: 443,
};

export const list = {
  items: [
    single,
    {
      ...single,
      DeviceID: 2002,
      DeviceName: 'Backup Router',
      Description: 'Failover router',
      IPAddress: '192.168.1.2',
    },
  ],
  totalItemCount: 2,
  page: 1,
  itemsInPage: 50,
  totalPages: 1,
  prevLink: null,
  nextLink: null,
};

export const httpSingle = {
  DeviceID: 3001,
  DeviceName: 'Company Website',
  CustomerID: 100,
  CustomerName: 'Acme Corp',
  URL: 'https://www.acmecorp.com',
  CheckIntervalMinutes: 5,
  Timeout: 30,
  Online: true,
  LastSeenDate: '2026-02-04T10:00:00Z',
  CreatedDate: '2025-01-15T08:00:00Z',
};

export const httpList = {
  items: [
    httpSingle,
    {
      ...httpSingle,
      DeviceID: 3002,
      DeviceName: 'Customer Portal',
      URL: 'https://portal.acmecorp.com',
    },
  ],
  totalItemCount: 2,
  page: 1,
  itemsInPage: 50,
  totalPages: 1,
  prevLink: null,
  nextLink: null,
};

export const snmpSingle = {
  DeviceID: 4001,
  DeviceName: 'Core Switch',
  CustomerID: 100,
  CustomerName: 'Acme Corp',
  Hostname: 'switch01.acmecorp.local',
  Port: 161,
  CommunityString: 'public',
  SNMPVersion: 'v2c',
  Online: true,
  LastSeenDate: '2026-02-04T10:00:00Z',
  CreatedDate: '2025-01-15T08:00:00Z',
};

export const snmpList = {
  items: [
    snmpSingle,
    {
      ...snmpSingle,
      DeviceID: 4002,
      DeviceName: 'Distribution Switch',
      Hostname: 'switch02.acmecorp.local',
    },
  ],
  totalItemCount: 2,
  page: 1,
  itemsInPage: 50,
  totalPages: 1,
  prevLink: null,
  nextLink: null,
};

export const tcpSingle = {
  DeviceID: 5001,
  DeviceName: 'SMTP Server',
  CustomerID: 100,
  CustomerName: 'Acme Corp',
  Hostname: 'mail.acmecorp.com',
  Port: 25,
  Online: true,
  LastSeenDate: '2026-02-04T10:00:00Z',
  CreatedDate: '2025-01-15T08:00:00Z',
};

export const tcpList = {
  items: [
    tcpSingle,
    {
      ...tcpSingle,
      DeviceID: 5002,
      DeviceName: 'IMAP Server',
      Port: 993,
    },
  ],
  totalItemCount: 2,
  page: 1,
  itemsInPage: 50,
  totalPages: 1,
  prevLink: null,
  nextLink: null,
};
