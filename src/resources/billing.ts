/**
 * Billing resource operations
 */

import type { HttpClient } from '../http.js';
import type { ResolvedConfig } from '../config.js';
import type { PaginatedResponse } from '../pagination.js';
import { createPaginatedIterable, type PaginatedIterable } from '../pagination.js';
import type { Invoice, InvoiceListParams } from '../types/billing.js';

/**
 * Billing resource operations
 */
export class BillingResource {
  private readonly httpClient: HttpClient;
  private readonly config: ResolvedConfig;

  constructor(httpClient: HttpClient, config: ResolvedConfig) {
    this.httpClient = httpClient;
    this.config = config;
  }

  /**
   * List invoices with pagination
   * GET /billing/invoices
   */
  async listInvoices(params?: InvoiceListParams): Promise<PaginatedResponse<Invoice>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;

    return this.httpClient.request<PaginatedResponse<Invoice>>('/billing/invoices', { params: queryParams });
  }

  /**
   * List all invoices with automatic pagination
   */
  listInvoicesAll(params?: InvoiceListParams): PaginatedIterable<Invoice> {
    return createPaginatedIterable<Invoice>(
      this.httpClient,
      this.config.baseUrl,
      '/billing/invoices',
      params
    );
  }

  /**
   * Get a single invoice by ID
   * GET /billing/invoices/{invoiceId}
   */
  async getInvoice(invoiceId: number): Promise<Invoice> {
    return this.httpClient.request<Invoice>(`/billing/invoices/${invoiceId}`);
  }
}
