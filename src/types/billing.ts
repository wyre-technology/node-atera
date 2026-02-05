/**
 * Billing types for the Atera API
 */

/**
 * Invoice entity
 */
export interface Invoice {
  InvoiceID: number;
  InvoiceNumber: string;
  CustomerID: number;
  CustomerName: string;
  ContractID: number;
  ContractName: string;
  Amount: number;
  Currency: string;
  Status: string;
  DueDate: string;
  PaidDate: string;
  CreatedDate: string;
}

/**
 * Parameters for listing invoices
 */
export interface InvoiceListParams {
  /** Page number (1-indexed) */
  page?: number;
  /** Number of items per page */
  itemsInPage?: number;
}
