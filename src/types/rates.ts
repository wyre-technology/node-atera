/**
 * Rate types for the Atera API
 */

/**
 * Rate entity
 */
export interface Rate {
  RateID: number;
  RateName: string;
  RateType: string;
  Amount: number;
  Currency: string;
  Description: string;
  Active: boolean;
  CreatedDate: string;
  LastModifiedDate: string;
}

/**
 * Parameters for listing rates
 */
export interface RateListParams {
  /** Page number (1-indexed) */
  page?: number;
  /** Number of items per page */
  itemsInPage?: number;
}

/**
 * Request body for creating a rate
 */
export interface RateCreateRequest {
  RateName: string;
  RateType?: string;
  Amount: number;
  Currency?: string;
  Description?: string;
  Active?: boolean;
}

/**
 * Request body for updating a rate
 */
export interface RateUpdateRequest {
  RateName?: string;
  RateType?: string;
  Amount?: number;
  Currency?: string;
  Description?: string;
  Active?: boolean;
}

/**
 * Product entity
 */
export interface Product {
  ProductID: number;
  ProductName: string;
  ProductType: string;
  Price: number;
  Currency: string;
  Description: string;
  Active: boolean;
  CreatedDate: string;
}

/**
 * Expense entity
 */
export interface Expense {
  ExpenseID: number;
  ExpenseName: string;
  ExpenseType: string;
  Amount: number;
  Currency: string;
  Description: string;
  Date: string;
  CustomerID: number;
  CustomerName: string;
}
