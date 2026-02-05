/**
 * Device types for the Atera API
 */

/**
 * Generic device entity
 */
export interface Device {
  DeviceID: number;
  DeviceName: string;
  DeviceType: string;
  CustomerID: number;
  CustomerName: string;
  Online: boolean;
  LastSeenDate: string;
  CreatedDate: string;
  Description: string;
  Hostname: string;
  IPAddress: string;
  Port: number;
}

/**
 * Parameters for listing devices
 */
export interface DeviceListParams {
  /** Page number (1-indexed) */
  page?: number;
  /** Number of items per page */
  itemsInPage?: number;
  /** Filter by customer ID */
  customerId?: number;
}

/**
 * Request body for creating a device
 */
export interface DeviceCreateRequest {
  DeviceName: string;
  DeviceType?: string;
  CustomerID: number;
  Description?: string;
  Hostname?: string;
  IPAddress?: string;
  Port?: number;
}

/**
 * Request body for updating a device
 */
export interface DeviceUpdateRequest {
  DeviceName?: string;
  DeviceType?: string;
  Description?: string;
  Hostname?: string;
  IPAddress?: string;
  Port?: number;
}

/**
 * HTTP device monitor entity
 */
export interface HttpDevice {
  DeviceID: number;
  DeviceName: string;
  CustomerID: number;
  CustomerName: string;
  URL: string;
  CheckIntervalMinutes: number;
  Timeout: number;
  Online: boolean;
  LastSeenDate: string;
  CreatedDate: string;
}

/**
 * Request body for creating an HTTP device monitor
 */
export interface HttpDeviceCreateRequest {
  DeviceName: string;
  CustomerID: number;
  URL: string;
  CheckIntervalMinutes?: number;
  Timeout?: number;
}

/**
 * SNMP device entity
 */
export interface SnmpDevice {
  DeviceID: number;
  DeviceName: string;
  CustomerID: number;
  CustomerName: string;
  Hostname: string;
  Port: number;
  CommunityString: string;
  SNMPVersion: string;
  Online: boolean;
  LastSeenDate: string;
  CreatedDate: string;
}

/**
 * Request body for creating an SNMP device
 */
export interface SnmpDeviceCreateRequest {
  DeviceName: string;
  CustomerID: number;
  Hostname: string;
  Port?: number;
  CommunityString?: string;
  SNMPVersion?: string;
}

/**
 * TCP device monitor entity
 */
export interface TcpDevice {
  DeviceID: number;
  DeviceName: string;
  CustomerID: number;
  CustomerName: string;
  Hostname: string;
  Port: number;
  Online: boolean;
  LastSeenDate: string;
  CreatedDate: string;
}

/**
 * Request body for creating a TCP device monitor
 */
export interface TcpDeviceCreateRequest {
  DeviceName: string;
  CustomerID: number;
  Hostname: string;
  Port: number;
}
