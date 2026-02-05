/**
 * Agent types for the Atera API
 */

/**
 * Agent entity
 */
export interface Agent {
  AgentID: number;
  AgentName: string;
  MachineName: string;
  CustomerID: number;
  CustomerName: string;
  FolderID: number;
  FolderName: string;
  AgentType: string;
  LastSeenDate: string;
  Online: boolean;
  OS: string;
  OSVersion: string;
  OSType: string;
  Domain: string;
  CurrentUser: string;
  IPAddresses: string[];
  ReportedFromIP: string;
  Processor: string;
  TotalMemory: number;
  LastReboot: string;
  AgentVersion: string;
  HardwareSerialNumber: string;
  Vendor: string;
  Model: string;
  Office: string;
  OfficeVersion: string;
  AntivirusDefinitionUpdateDate: string;
  HasAntivirusConflicts: boolean;
}

/**
 * Parameters for listing agents
 */
export interface AgentListParams {
  /** Page number (1-indexed) */
  page?: number;
  /** Number of items per page */
  itemsInPage?: number;
  /** Filter by customer ID */
  customerId?: number;
}

/**
 * Request body for running PowerShell on an agent
 */
export interface AgentPowerShellRequest {
  /** PowerShell script content */
  Script?: string;
  /** Script arguments */
  Arguments?: string;
}

/**
 * Response from PowerShell execution
 */
export interface AgentPowerShellResponse {
  /** Job ID for tracking execution */
  JobId?: number;
  /** Execution status */
  Status?: string;
}
