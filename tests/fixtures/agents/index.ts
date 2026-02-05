/**
 * Agent fixtures
 */

export const single = {
  AgentID: 12345,
  AgentName: 'WORKSTATION-01',
  MachineName: 'WORKSTATION-01',
  CustomerID: 100,
  CustomerName: 'Acme Corp',
  FolderID: 1,
  FolderName: 'Workstations',
  AgentType: 'Workstation',
  LastSeenDate: '2026-02-04T10:30:00Z',
  Online: true,
  OS: 'Windows 11 Pro',
  OSVersion: '10.0.22621',
  OSType: 'Windows',
  Domain: 'ACME',
  CurrentUser: 'jsmith',
  IPAddresses: ['192.168.1.100', '10.0.0.50'],
  ReportedFromIP: '203.0.113.50',
  Processor: 'Intel Core i7-12700',
  TotalMemory: 32768,
  LastReboot: '2026-02-01T08:00:00Z',
  AgentVersion: '2.5.0',
  HardwareSerialNumber: 'ABC123XYZ',
  Vendor: 'Dell',
  Model: 'OptiPlex 7090',
  Office: 'Microsoft Office 365',
  OfficeVersion: '16.0',
  AntivirusDefinitionUpdateDate: '2026-02-04T06:00:00Z',
  HasAntivirusConflicts: false,
};

export const listPage1 = {
  items: [
    single,
    {
      ...single,
      AgentID: 12346,
      AgentName: 'SERVER-01',
      MachineName: 'SERVER-01',
      AgentType: 'Server',
      FolderName: 'Servers',
      OS: 'Windows Server 2022',
    },
  ],
  totalItemCount: 4,
  page: 1,
  itemsInPage: 2,
  totalPages: 2,
  prevLink: null,
  nextLink: 'https://app.atera.com/api/v3/agents?Page=2&ItemsInPage=2',
};

export const listPage2 = {
  items: [
    {
      ...single,
      AgentID: 12347,
      AgentName: 'LAPTOP-01',
      MachineName: 'LAPTOP-01',
      AgentType: 'Workstation',
      Vendor: 'Lenovo',
      Model: 'ThinkPad X1 Carbon',
    },
    {
      ...single,
      AgentID: 12348,
      AgentName: 'MAC-01',
      MachineName: 'MAC-01',
      AgentType: 'Mac',
      OS: 'macOS Ventura',
      OSType: 'Mac',
      Vendor: 'Apple',
      Model: 'MacBook Pro',
    },
  ],
  totalItemCount: 4,
  page: 2,
  itemsInPage: 2,
  totalPages: 2,
  prevLink: 'https://app.atera.com/api/v3/agents?Page=1&ItemsInPage=2',
  nextLink: null,
};

export const powerShellResponse = {
  JobId: 99001,
  Status: 'Scheduled',
};
