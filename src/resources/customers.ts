/**
 * Customers resource operations
 */

import type { HttpClient } from '../http.js';
import type { ResolvedConfig } from '../config.js';
import type { PaginationParams, PaginatedResponse } from '../pagination.js';
import { createPaginatedIterable, type PaginatedIterable } from '../pagination.js';
import type {
  Customer,
  CustomerListParams,
  CustomerCreateRequest,
  CustomerUpdateRequest,
} from '../types/customers.js';
import type { Agent } from '../types/agents.js';
import type { Alert } from '../types/alerts.js';

/**
 * Customers resource operations
 */
export class CustomersResource {
  private readonly httpClient: HttpClient;
  private readonly config: ResolvedConfig;

  constructor(httpClient: HttpClient, config: ResolvedConfig) {
    this.httpClient = httpClient;
    this.config = config;
  }

  /**
   * List customers with pagination
   * GET /customers
   */
  async list(params?: CustomerListParams): Promise<PaginatedResponse<Customer>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;

    return this.httpClient.request<PaginatedResponse<Customer>>('/customers', { params: queryParams });
  }

  /**
   * List all customers with automatic pagination
   */
  listAll(params?: CustomerListParams): PaginatedIterable<Customer> {
    return createPaginatedIterable<Customer>(
      this.httpClient,
      this.config.baseUrl,
      '/customers',
      params
    );
  }

  /**
   * Get a single customer by ID
   * GET /customers/{customerId}
   */
  async get(customerId: number): Promise<Customer> {
    return this.httpClient.request<Customer>(`/customers/${customerId}`);
  }

  /**
   * Create a new customer
   * POST /customers
   */
  async create(data: CustomerCreateRequest): Promise<Customer> {
    return this.httpClient.request<Customer>('/customers', { method: 'POST', body: data });
  }

  /**
   * Update an existing customer
   * POST /customers/{customerId}
   */
  async update(customerId: number, data: CustomerUpdateRequest): Promise<Customer> {
    return this.httpClient.request<Customer>(`/customers/${customerId}`, { method: 'POST', body: data });
  }

  /**
   * Delete a customer
   * DELETE /customers/{customerId}
   */
  async delete(customerId: number): Promise<void> {
    await this.httpClient.request<void>(`/customers/${customerId}`, { method: 'DELETE' });
  }

  /**
   * List agents for a customer
   * GET /customers/{customerId}/agents
   */
  async listAgents(customerId: number, params?: PaginationParams): Promise<PaginatedResponse<Agent>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;

    return this.httpClient.request<PaginatedResponse<Agent>>(
      `/customers/${customerId}/agents`,
      { params: queryParams }
    );
  }

  /**
   * List all agents for a customer with automatic pagination
   */
  listAgentsAll(customerId: number, params?: PaginationParams): PaginatedIterable<Agent> {
    return createPaginatedIterable<Agent>(
      this.httpClient,
      this.config.baseUrl,
      `/customers/${customerId}/agents`,
      params
    );
  }

  /**
   * List alerts for a customer
   * GET /customers/{customerId}/alerts
   */
  async listAlerts(customerId: number, params?: PaginationParams): Promise<PaginatedResponse<Alert>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;

    return this.httpClient.request<PaginatedResponse<Alert>>(
      `/customers/${customerId}/alerts`,
      { params: queryParams }
    );
  }

  /**
   * List all alerts for a customer with automatic pagination
   */
  listAlertsAll(customerId: number, params?: PaginationParams): PaginatedIterable<Alert> {
    return createPaginatedIterable<Alert>(
      this.httpClient,
      this.config.baseUrl,
      `/customers/${customerId}/alerts`,
      params
    );
  }
}
