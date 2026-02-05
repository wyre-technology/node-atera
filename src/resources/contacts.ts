/**
 * Contacts resource operations
 */

import type { HttpClient } from '../http.js';
import type { ResolvedConfig } from '../config.js';
import type { PaginationParams, PaginatedResponse } from '../pagination.js';
import { createPaginatedIterable, type PaginatedIterable } from '../pagination.js';
import type {
  Contact,
  ContactListParams,
  ContactCreateRequest,
  ContactUpdateRequest,
} from '../types/contacts.js';

/**
 * Contacts resource operations
 */
export class ContactsResource {
  private readonly httpClient: HttpClient;
  private readonly config: ResolvedConfig;

  constructor(httpClient: HttpClient, config: ResolvedConfig) {
    this.httpClient = httpClient;
    this.config = config;
  }

  /**
   * List contacts with pagination
   * GET /contacts
   */
  async list(params?: ContactListParams): Promise<PaginatedResponse<Contact>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;

    return this.httpClient.request<PaginatedResponse<Contact>>('/contacts', { params: queryParams });
  }

  /**
   * List all contacts with automatic pagination
   */
  listAll(params?: ContactListParams): PaginatedIterable<Contact> {
    return createPaginatedIterable<Contact>(
      this.httpClient,
      this.config.baseUrl,
      '/contacts',
      params
    );
  }

  /**
   * Get a single contact by ID
   * GET /contacts/{contactId}
   */
  async get(contactId: number): Promise<Contact> {
    return this.httpClient.request<Contact>(`/contacts/${contactId}`);
  }

  /**
   * Create a new contact
   * POST /contacts
   */
  async create(data: ContactCreateRequest): Promise<Contact> {
    return this.httpClient.request<Contact>('/contacts', { method: 'POST', body: data });
  }

  /**
   * Update an existing contact
   * POST /contacts/{contactId}
   */
  async update(contactId: number, data: ContactUpdateRequest): Promise<Contact> {
    return this.httpClient.request<Contact>(`/contacts/${contactId}`, { method: 'POST', body: data });
  }

  /**
   * Delete a contact
   * DELETE /contacts/{contactId}
   */
  async delete(contactId: number): Promise<void> {
    await this.httpClient.request<void>(`/contacts/${contactId}`, { method: 'DELETE' });
  }

  /**
   * List contacts for a specific customer
   * GET /contacts/customer/{customerId}
   */
  async listByCustomer(customerId: number, params?: PaginationParams): Promise<PaginatedResponse<Contact>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;

    return this.httpClient.request<PaginatedResponse<Contact>>(
      `/contacts/customer/${customerId}`,
      { params: queryParams }
    );
  }

  /**
   * List all contacts for a customer with automatic pagination
   */
  listByCustomerAll(customerId: number, params?: PaginationParams): PaginatedIterable<Contact> {
    return createPaginatedIterable<Contact>(
      this.httpClient,
      this.config.baseUrl,
      `/contacts/customer/${customerId}`,
      params
    );
  }
}
