/**
 * Custom values resource operations
 */

import type { HttpClient } from '../http.js';
import type {
  CustomField,
  CustomValue,
  CustomValueSetRequest,
  ContractCustomFieldCreateRequest,
} from '../types/custom-values.js';

/**
 * Custom values resource operations for all entity types
 */
export class CustomValuesResource {
  private readonly httpClient: HttpClient;

  constructor(httpClient: HttpClient, _config: unknown) {
    this.httpClient = httpClient;
  }

  // ==================== Agent Custom Values ====================

  /**
   * List available agent custom fields
   * GET /customvalues/agentfield
   */
  async listAgentFields(): Promise<CustomField[]> {
    return this.httpClient.request<CustomField[]>('/customvalues/agentfield');
  }

  /**
   * Get custom values for a specific agent
   * GET /customvalues/agent/{agentId}
   */
  async listByAgent(agentId: number): Promise<CustomValue[]> {
    return this.httpClient.request<CustomValue[]>(`/customvalues/agent/${agentId}`);
  }

  /**
   * Get agent custom field by name
   * GET /customvalues/agentfieldname/{fieldName}
   */
  async getAgentFieldByName(fieldName: string): Promise<CustomField> {
    return this.httpClient.request<CustomField>(`/customvalues/agentfieldname/${encodeURIComponent(fieldName)}`);
  }

  /**
   * Set custom value for an agent
   * POST /customvalues/agent/{agentId}
   */
  async setAgentValue(agentId: number, data: CustomValueSetRequest): Promise<CustomValue> {
    return this.httpClient.request<CustomValue>(`/customvalues/agent/${agentId}`, { method: 'POST', body: data });
  }

  /**
   * Delete custom value from an agent
   * DELETE /customvalues/agent/{agentId}/field/{fieldId}
   */
  async deleteAgentValue(agentId: number, fieldId: number): Promise<void> {
    await this.httpClient.request<void>(`/customvalues/agent/${agentId}/field/${fieldId}`, { method: 'DELETE' });
  }

  // ==================== Ticket Custom Values ====================

  /**
   * List available ticket custom fields
   * GET /customvalues/ticketfield
   */
  async listTicketFields(): Promise<CustomField[]> {
    return this.httpClient.request<CustomField[]>('/customvalues/ticketfield');
  }

  /**
   * Get custom values for a specific ticket
   * GET /customvalues/ticket/{ticketId}
   */
  async listByTicket(ticketId: number): Promise<CustomValue[]> {
    return this.httpClient.request<CustomValue[]>(`/customvalues/ticket/${ticketId}`);
  }

  /**
   * Get ticket custom field by name
   * GET /customvalues/ticketfieldname/{fieldName}
   */
  async getTicketFieldByName(fieldName: string): Promise<CustomField> {
    return this.httpClient.request<CustomField>(`/customvalues/ticketfieldname/${encodeURIComponent(fieldName)}`);
  }

  /**
   * Set custom value for a ticket
   * POST /customvalues/ticket/{ticketId}
   */
  async setTicketValue(ticketId: number, data: CustomValueSetRequest): Promise<CustomValue> {
    return this.httpClient.request<CustomValue>(`/customvalues/ticket/${ticketId}`, { method: 'POST', body: data });
  }

  /**
   * Delete custom value from a ticket
   * DELETE /customvalues/ticket/{ticketId}/field/{fieldId}
   */
  async deleteTicketValue(ticketId: number, fieldId: number): Promise<void> {
    await this.httpClient.request<void>(`/customvalues/ticket/${ticketId}/field/${fieldId}`, { method: 'DELETE' });
  }

  // ==================== Customer Custom Values ====================

  /**
   * List available customer custom fields
   * GET /customvalues/customerfield
   */
  async listCustomerFields(): Promise<CustomField[]> {
    return this.httpClient.request<CustomField[]>('/customvalues/customerfield');
  }

  /**
   * Get custom values for a specific customer
   * GET /customvalues/customer/{customerId}
   */
  async listByCustomer(customerId: number): Promise<CustomValue[]> {
    return this.httpClient.request<CustomValue[]>(`/customvalues/customer/${customerId}`);
  }

  /**
   * Get customer custom field by name
   * GET /customvalues/customerfieldname/{fieldName}
   */
  async getCustomerFieldByName(fieldName: string): Promise<CustomField> {
    return this.httpClient.request<CustomField>(`/customvalues/customerfieldname/${encodeURIComponent(fieldName)}`);
  }

  /**
   * Set custom value for a customer
   * POST /customvalues/customer/{customerId}
   */
  async setCustomerValue(customerId: number, data: CustomValueSetRequest): Promise<CustomValue> {
    return this.httpClient.request<CustomValue>(`/customvalues/customer/${customerId}`, { method: 'POST', body: data });
  }

  /**
   * Delete custom value from a customer
   * DELETE /customvalues/customer/{customerId}/field/{fieldId}
   */
  async deleteCustomerValue(customerId: number, fieldId: number): Promise<void> {
    await this.httpClient.request<void>(`/customvalues/customer/${customerId}/field/${fieldId}`, { method: 'DELETE' });
  }

  // ==================== Contact Custom Values ====================

  /**
   * List available contact custom fields
   * GET /customvalues/contactfield
   */
  async listContactFields(): Promise<CustomField[]> {
    return this.httpClient.request<CustomField[]>('/customvalues/contactfield');
  }

  /**
   * Get custom values for a specific contact
   * GET /customvalues/contact/{contactId}
   */
  async listByContact(contactId: number): Promise<CustomValue[]> {
    return this.httpClient.request<CustomValue[]>(`/customvalues/contact/${contactId}`);
  }

  /**
   * Get contact custom field by name
   * GET /customvalues/contactfieldname/{fieldName}
   */
  async getContactFieldByName(fieldName: string): Promise<CustomField> {
    return this.httpClient.request<CustomField>(`/customvalues/contactfieldname/${encodeURIComponent(fieldName)}`);
  }

  /**
   * Set custom value for a contact
   * POST /customvalues/contact/{contactId}
   */
  async setContactValue(contactId: number, data: CustomValueSetRequest): Promise<CustomValue> {
    return this.httpClient.request<CustomValue>(`/customvalues/contact/${contactId}`, { method: 'POST', body: data });
  }

  /**
   * Delete custom value from a contact
   * DELETE /customvalues/contact/{contactId}/field/{fieldId}
   */
  async deleteContactValue(contactId: number, fieldId: number): Promise<void> {
    await this.httpClient.request<void>(`/customvalues/contact/${contactId}/field/${fieldId}`, { method: 'DELETE' });
  }

  // ==================== Contract Custom Values ====================

  /**
   * List available contract custom fields
   * GET /customvalues/contractfield
   */
  async listContractFields(): Promise<CustomField[]> {
    return this.httpClient.request<CustomField[]>('/customvalues/contractfield');
  }

  /**
   * Get custom values for a specific contract
   * GET /customvalues/contract/{contractId}
   */
  async listByContract(contractId: number): Promise<CustomValue[]> {
    return this.httpClient.request<CustomValue[]>(`/customvalues/contract/${contractId}`);
  }

  /**
   * Get contract custom field by name
   * GET /customvalues/contractfieldname/{fieldName}
   */
  async getContractFieldByName(fieldName: string): Promise<CustomField> {
    return this.httpClient.request<CustomField>(`/customvalues/contractfieldname/${encodeURIComponent(fieldName)}`);
  }

  /**
   * Create a new contract custom field
   * POST /customvalues/contractfield
   */
  async createContractField(data: ContractCustomFieldCreateRequest): Promise<CustomField> {
    return this.httpClient.request<CustomField>('/customvalues/contractfield', { method: 'POST', body: data });
  }

  /**
   * Set custom value for a contract
   * POST /customvalues/contract/{contractId}
   */
  async setContractValue(contractId: number, data: CustomValueSetRequest): Promise<CustomValue> {
    return this.httpClient.request<CustomValue>(`/customvalues/contract/${contractId}`, { method: 'POST', body: data });
  }

  /**
   * Delete custom value from a contract
   * DELETE /customvalues/contract/{contractId}/field/{fieldId}
   */
  async deleteContractValue(contractId: number, fieldId: number): Promise<void> {
    await this.httpClient.request<void>(`/customvalues/contract/${contractId}/field/${fieldId}`, { method: 'DELETE' });
  }
}
