/**
 * Custom value fixtures
 */

export const singleField = {
  FieldID: 1,
  FieldName: 'Location',
  FieldType: 'Text',
  FieldDescription: 'Physical location of the asset',
};

export const agentFields = [
  singleField,
  {
    FieldID: 2,
    FieldName: 'Asset Tag',
    FieldType: 'Text',
    FieldDescription: 'Internal asset tracking number',
  },
  {
    FieldID: 3,
    FieldName: 'Purchase Date',
    FieldType: 'Date',
    FieldDescription: 'Date the asset was purchased',
  },
];

export const ticketFields = [
  {
    FieldID: 10,
    FieldName: 'Affected Systems',
    FieldType: 'Text',
    FieldDescription: 'List of affected systems',
  },
  {
    FieldID: 11,
    FieldName: 'Root Cause',
    FieldType: 'Text',
    FieldDescription: 'Root cause analysis',
  },
];

export const customerFields = [
  {
    FieldID: 20,
    FieldName: 'Account Manager',
    FieldType: 'Text',
    FieldDescription: 'Assigned account manager',
  },
  {
    FieldID: 21,
    FieldName: 'Contract Renewal Date',
    FieldType: 'Date',
    FieldDescription: 'Next contract renewal date',
  },
];

export const contactFields = [
  {
    FieldID: 30,
    FieldName: 'Preferred Contact Time',
    FieldType: 'Text',
    FieldDescription: 'Best time to contact',
  },
];

export const contractFields = [
  {
    FieldID: 40,
    FieldName: 'SLA Level',
    FieldType: 'Text',
    FieldDescription: 'Service level agreement tier',
  },
];

export const values = [
  {
    FieldID: 1,
    FieldName: 'Location',
    Value: 'Building A - Floor 3',
  },
  {
    FieldID: 2,
    FieldName: 'Asset Tag',
    Value: 'AT-2026-001',
  },
];
