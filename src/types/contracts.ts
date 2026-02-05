/**
 * Contract types for the Atera API
 */

/**
 * Contract entity
 */
export interface Contract {
  ContractID: number;
  ContractName: string;
  CustomerID: number;
  CustomerName: string;
  ContractType: string;
  StartDate: string;
  EndDate: string;
  Value: number;
  Currency: string;
  BillingPeriod: string;
  Active: boolean;
  AutoRenew: boolean;
  CreatedDate: string;
  LastModifiedDate: string;
}

/**
 * Parameters for listing contracts
 */
export interface ContractListParams {
  /** Page number (1-indexed) */
  page?: number;
  /** Number of items per page */
  itemsInPage?: number;
}
