/**
 * Customer types for the Atera API
 */

/**
 * Primary contact info embedded in customer
 */
export interface PrimaryContact {
  ContactID: number;
  ContactName: string;
  Email: string;
  Phone: string;
}

/**
 * Customer entity
 */
export interface Customer {
  CustomerID: number;
  CustomerName: string;
  BusinessNumber: string;
  Domain: string;
  Address: string;
  City: string;
  State: string;
  Country: string;
  ZipCode: string;
  Phone: string;
  Fax: string;
  Notes: string;
  Website: string;
  CreatedDate: string;
  LastModifiedDate: string;
  Logo: string;
  PrimaryContact: PrimaryContact;
}

/**
 * Parameters for listing customers
 */
export interface CustomerListParams {
  /** Page number (1-indexed) */
  page?: number;
  /** Number of items per page */
  itemsInPage?: number;
}

/**
 * Request body for creating a customer
 */
export interface CustomerCreateRequest {
  CustomerName: string;
  BusinessNumber?: string;
  Domain?: string;
  Address?: string;
  City?: string;
  State?: string;
  Country?: string;
  ZipCode?: string;
  Phone?: string;
  Fax?: string;
  Notes?: string;
  Website?: string;
}

/**
 * Request body for updating a customer
 */
export interface CustomerUpdateRequest {
  CustomerName?: string;
  BusinessNumber?: string;
  Domain?: string;
  Address?: string;
  City?: string;
  State?: string;
  Country?: string;
  ZipCode?: string;
  Phone?: string;
  Fax?: string;
  Notes?: string;
  Website?: string;
}
