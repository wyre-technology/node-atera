/**
 * Ticket types for the Atera API
 */

/**
 * Ticket entity
 */
export interface Ticket {
  TicketID: number;
  TicketTitle: string;
  TicketNumber: string;
  TicketPriority: string;
  TicketImpact: string;
  TicketStatus: string;
  TicketType: string;
  TicketSource: string;
  CustomerID: number;
  CustomerName: string;
  CustomerBusinessNumber: string;
  ContactID: number;
  ContactFullName: string;
  ContactEmail: string;
  ContractID: number;
  ContractName: string;
  TechnicianContactID: number;
  TechnicianFullName: string;
  FirstComment: string;
  LastEndUserComment: string;
  OnSiteVisits: number;
  SLAName: string;
  SLAStatus: string;
  DueDate: string;
  FirstResponseDueDate: string;
  FirstResponseDate: string;
  ResolvedDate: string;
  ClosedDate: string;
  CreatedDate: string;
  LastUpdatedDate: string;
  Tags: string[];
}

/**
 * Parameters for listing tickets
 */
export interface TicketListParams {
  /** Page number (1-indexed) */
  page?: number;
  /** Number of items per page */
  itemsInPage?: number;
  /** Filter by ticket status */
  ticketStatus?: string;
  /** Filter by customer ID */
  customerId?: number;
  /** Filter by technician ID */
  technicianId?: number;
  /** Filter by start date (ISO 8601) */
  dateFrom?: string;
  /** Filter by end date (ISO 8601) */
  dateTo?: string;
}

/**
 * Request body for creating a ticket
 */
export interface TicketCreateRequest {
  TicketTitle: string;
  CustomerID?: number;
  CustomerEmail?: string;
  ContactID?: number;
  TicketPriority?: string;
  TicketImpact?: string;
  TicketStatus?: string;
  TicketType?: string;
  TechnicianContactID?: number;
  Description?: string;
}

/**
 * Request body for updating a ticket
 */
export interface TicketUpdateRequest {
  TicketTitle?: string;
  TicketPriority?: string;
  TicketImpact?: string;
  TicketStatus?: string;
  TicketType?: string;
  TechnicianContactID?: number;
}

/**
 * Ticket comment entity
 */
export interface TicketComment {
  CommentID: number;
  TicketID: number;
  Comment: string;
  Date: string;
  IsInternal: boolean;
  CreatorName: string;
  CreatorEmail: string;
}

/**
 * Request body for creating a ticket comment
 */
export interface TicketCommentCreateRequest {
  Comment: string;
  IsInternal?: boolean;
}

/**
 * Ticket work hours entry
 */
export interface TicketWorkHours {
  WorkHoursID: number;
  TicketID: number;
  TechnicianContactID: number;
  TechnicianFullName: string;
  Date: string;
  StartTime: string;
  EndTime: string;
  Duration: number;
  Description: string;
  IsBillable: boolean;
}

/**
 * Request body for creating work hours
 */
export interface TicketWorkHoursCreateRequest {
  TechnicianContactID: number;
  Date: string;
  StartTime: string;
  EndTime: string;
  Description?: string;
  IsBillable?: boolean;
}

/**
 * Ticket billable duration entry
 */
export interface TicketBillableDuration {
  BillableDurationID: number;
  TicketID: number;
  Duration: number;
  Rate: number;
  Total: number;
}

/**
 * Ticket timesheet entry
 */
export interface TicketTimesheet {
  TimesheetID: number;
  TicketID: number;
  TechnicianContactID: number;
  TechnicianFullName: string;
  Date: string;
  Duration: number;
  Description: string;
}

/**
 * Request body for creating a timesheet entry
 */
export interface TicketTimesheetCreateRequest {
  TechnicianContactID: number;
  Date: string;
  Duration: number;
  Description?: string;
}

/**
 * Ticket filter
 */
export interface TicketFilter {
  FilterID: number;
  FilterName: string;
}

/**
 * Ticket status
 */
export interface TicketStatusItem {
  StatusID: number;
  StatusName: string;
}
