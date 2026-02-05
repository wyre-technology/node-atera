/**
 * Rates resource operations
 */

import type { HttpClient } from '../http.js';
import type { ResolvedConfig } from '../config.js';
import type { PaginationParams, PaginatedResponse } from '../pagination.js';
import { createPaginatedIterable, type PaginatedIterable } from '../pagination.js';
import type {
  Rate,
  RateListParams,
  RateCreateRequest,
  RateUpdateRequest,
  Product,
  Expense,
} from '../types/rates.js';

/**
 * Rates resource operations
 */
export class RatesResource {
  private readonly httpClient: HttpClient;
  private readonly config: ResolvedConfig;

  constructor(httpClient: HttpClient, config: ResolvedConfig) {
    this.httpClient = httpClient;
    this.config = config;
  }

  /**
   * List rates with pagination
   * GET /rates
   */
  async list(params?: RateListParams): Promise<PaginatedResponse<Rate>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;

    return this.httpClient.request<PaginatedResponse<Rate>>('/rates', { params: queryParams });
  }

  /**
   * List all rates with automatic pagination
   */
  listAll(params?: RateListParams): PaginatedIterable<Rate> {
    return createPaginatedIterable<Rate>(
      this.httpClient,
      this.config.baseUrl,
      '/rates',
      params
    );
  }

  /**
   * Get a single rate by ID
   * GET /rates/{rateId}
   */
  async get(rateId: number): Promise<Rate> {
    return this.httpClient.request<Rate>(`/rates/${rateId}`);
  }

  /**
   * Create a new rate
   * POST /rates
   */
  async create(data: RateCreateRequest): Promise<Rate> {
    return this.httpClient.request<Rate>('/rates', { method: 'POST', body: data });
  }

  /**
   * Update an existing rate
   * POST /rates/{rateId}
   */
  async update(rateId: number, data: RateUpdateRequest): Promise<Rate> {
    return this.httpClient.request<Rate>(`/rates/${rateId}`, { method: 'POST', body: data });
  }

  /**
   * Delete a rate
   * DELETE /rates/{rateId}
   */
  async delete(rateId: number): Promise<void> {
    await this.httpClient.request<void>(`/rates/${rateId}`, { method: 'DELETE' });
  }

  /**
   * List products with pagination
   * GET /rates/products
   */
  async listProducts(params?: PaginationParams): Promise<PaginatedResponse<Product>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;

    return this.httpClient.request<PaginatedResponse<Product>>('/rates/products', { params: queryParams });
  }

  /**
   * List all products with automatic pagination
   */
  listProductsAll(params?: PaginationParams): PaginatedIterable<Product> {
    return createPaginatedIterable<Product>(
      this.httpClient,
      this.config.baseUrl,
      '/rates/products',
      params
    );
  }

  /**
   * Get a single product by ID
   * GET /rates/products/{productId}
   */
  async getProduct(productId: number): Promise<Product> {
    return this.httpClient.request<Product>(`/rates/products/${productId}`);
  }

  /**
   * List expenses with pagination
   * GET /rates/expenses
   */
  async listExpenses(params?: PaginationParams): Promise<PaginatedResponse<Expense>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;

    return this.httpClient.request<PaginatedResponse<Expense>>('/rates/expenses', { params: queryParams });
  }

  /**
   * List all expenses with automatic pagination
   */
  listExpensesAll(params?: PaginationParams): PaginatedIterable<Expense> {
    return createPaginatedIterable<Expense>(
      this.httpClient,
      this.config.baseUrl,
      '/rates/expenses',
      params
    );
  }

  /**
   * Get a single expense by ID
   * GET /rates/expenses/{expenseId}
   */
  async getExpense(expenseId: number): Promise<Expense> {
    return this.httpClient.request<Expense>(`/rates/expenses/${expenseId}`);
  }
}
