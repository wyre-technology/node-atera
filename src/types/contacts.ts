/**
 * Contact types for the Atera API
 */

/**
 * Contact entity
 */
export interface Contact {
  ContactID: number;
  CustomerID: number;
  CustomerName: string;
  Email: string;
  FirstName: string;
  LastName: string;
  FullName: string;
  JobTitle: string;
  Phone: string;
  MobilePhone: string;
  IsContactPerson: boolean;
  InIgnoreMode: boolean;
  CreatedDate: string;
  LastModifiedDate: string;
}

/**
 * Parameters for listing contacts
 */
export interface ContactListParams {
  /** Page number (1-indexed) */
  page?: number;
  /** Number of items per page */
  itemsInPage?: number;
}

/**
 * Request body for creating a contact
 */
export interface ContactCreateRequest {
  CustomerID: number;
  Email: string;
  FirstName?: string;
  LastName?: string;
  JobTitle?: string;
  Phone?: string;
  MobilePhone?: string;
  IsContactPerson?: boolean;
}

/**
 * Request body for updating a contact
 */
export interface ContactUpdateRequest {
  Email?: string;
  FirstName?: string;
  LastName?: string;
  JobTitle?: string;
  Phone?: string;
  MobilePhone?: string;
  IsContactPerson?: boolean;
}
