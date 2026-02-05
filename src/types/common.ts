/**
 * Common types shared across resources
 */

/**
 * Alert severity levels
 */
export type AlertSeverity = 'Information' | 'Warning' | 'Critical';

/**
 * Ticket priority levels
 */
export type TicketPriority = 'Low' | 'Medium' | 'High' | 'Critical';

/**
 * Ticket status values
 */
export type TicketStatus = 'Open' | 'Pending' | 'Resolved' | 'Closed';

/**
 * Ticket impact levels
 */
export type TicketImpact = 'NoImpact' | 'Minor' | 'Major' | 'Site Down' | 'Crisis';

/**
 * Agent types
 */
export type AgentType = 'Server' | 'Workstation' | 'Mac';

/**
 * Operating system types
 */
export type OSType = 'Windows' | 'Mac' | 'Linux';
