/**
 * Contracts resource operations
 */

import type { HttpClient } from '../http.js';
import type { ResolvedConfig } from '../config.js';
import type { PaginationParams, PaginatedResponse } from '../pagination.js';
import { createPaginatedIterable, type PaginatedIterable } from '../pagination.js';
import type { Contract, ContractListParams } from '../types/contracts.js';

/**
 * Contracts resource operations
 */
export class ContractsResource {
  private readonly httpClient: HttpClient;
  private readonly config: ResolvedConfig;

  constructor(httpClient: HttpClient, config: ResolvedConfig) {
    this.httpClient = httpClient;
    this.config = config;
  }

  /**
   * List contracts with pagination
   * GET /contracts
   */
  async list(params?: ContractListParams): Promise<PaginatedResponse<Contract>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;

    return this.httpClient.request<PaginatedResponse<Contract>>('/contracts', { params: queryParams });
  }

  /**
   * List all contracts with automatic pagination
   */
  listAll(params?: ContractListParams): PaginatedIterable<Contract> {
    return createPaginatedIterable<Contract>(
      this.httpClient,
      this.config.baseUrl,
      '/contracts',
      params
    );
  }

  /**
   * Get a single contract by ID
   * GET /contracts/{contractId}
   */
  async get(contractId: number): Promise<Contract> {
    return this.httpClient.request<Contract>(`/contracts/${contractId}`);
  }

  /**
   * List contracts for a specific customer
   * GET /contracts/customer/{customerId}
   */
  async listByCustomer(customerId: number, params?: PaginationParams): Promise<PaginatedResponse<Contract>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;

    return this.httpClient.request<PaginatedResponse<Contract>>(
      `/contracts/customer/${customerId}`,
      { params: queryParams }
    );
  }

  /**
   * List all contracts for a customer with automatic pagination
   */
  listByCustomerAll(customerId: number, params?: PaginationParams): PaginatedIterable<Contract> {
    return createPaginatedIterable<Contract>(
      this.httpClient,
      this.config.baseUrl,
      `/contracts/customer/${customerId}`,
      params
    );
  }
}
