/**
 * Custom value types for the Atera API
 */

/**
 * Custom field definition
 */
export interface CustomField {
  FieldID: number;
  FieldName: string;
  FieldType: string;
  FieldDescription: string;
}

/**
 * Custom value entry
 */
export interface CustomValue {
  FieldID: number;
  FieldName: string;
  Value: string;
}

/**
 * Request body for setting a custom value
 */
export interface CustomValueSetRequest {
  FieldName: string;
  Value: string;
}

/**
 * Request body for creating a contract custom field
 */
export interface ContractCustomFieldCreateRequest {
  FieldName: string;
  FieldType?: string;
  FieldDescription?: string;
}
