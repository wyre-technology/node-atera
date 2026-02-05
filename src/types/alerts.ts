/**
 * Alert types for the Atera API
 */

import type { AlertSeverity } from './common.js';

/**
 * Alert entity
 */
export interface Alert {
  AlertID: number;
  AlertCategoryID: number;
  AlertMessage: string;
  AlertSeverity: AlertSeverity;
  Created: string;
  AgentID: number;
  AgentName: string;
  DeviceID: number;
  DeviceName: string;
  CustomerID: number;
  CustomerName: string;
  Archived: boolean;
  AlertTitle: string;
  Code: number;
  Source: string;
  TicketID: number;
  FolderID: number;
  PollingCyclesCount: number;
  Snoozed: boolean;
}

/**
 * Parameters for listing alerts
 */
export interface AlertListParams {
  /** Page number (1-indexed) */
  page?: number;
  /** Number of items per page */
  itemsInPage?: number;
  /** Filter by alert severity */
  alertSeverity?: AlertSeverity;
  /** Filter by customer ID */
  customerId?: number;
  /** Filter by archived status */
  archived?: boolean;
}
