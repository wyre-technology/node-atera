/**
 * HTTP device monitors resource operations
 */

import type { HttpClient } from '../http.js';
import type { ResolvedConfig } from '../config.js';
import type { PaginationParams, PaginatedResponse } from '../pagination.js';
import { createPaginatedIterable, type PaginatedIterable } from '../pagination.js';
import type { HttpDevice, HttpDeviceCreateRequest } from '../types/devices.js';

/**
 * HTTP device monitors resource operations
 */
export class DevicesHttpResource {
  private readonly httpClient: HttpClient;
  private readonly config: ResolvedConfig;

  constructor(httpClient: HttpClient, config: ResolvedConfig) {
    this.httpClient = httpClient;
    this.config = config;
  }

  /**
   * List HTTP device monitors with pagination
   * GET /devices/httpdevices
   */
  async list(params?: PaginationParams): Promise<PaginatedResponse<HttpDevice>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;

    return this.httpClient.request<PaginatedResponse<HttpDevice>>('/devices/httpdevices', { params: queryParams });
  }

  /**
   * List all HTTP device monitors with automatic pagination
   */
  listAll(params?: PaginationParams): PaginatedIterable<HttpDevice> {
    return createPaginatedIterable<HttpDevice>(
      this.httpClient,
      this.config.baseUrl,
      '/devices/httpdevices',
      params
    );
  }

  /**
   * Create a new HTTP device monitor
   * POST /devices/httpdevices
   */
  async create(data: HttpDeviceCreateRequest): Promise<HttpDevice> {
    return this.httpClient.request<HttpDevice>('/devices/httpdevices', { method: 'POST', body: data });
  }

  /**
   * Delete an HTTP device monitor
   * DELETE /devices/httpdevices/{deviceId}
   */
  async delete(deviceId: number): Promise<void> {
    await this.httpClient.request<void>(`/devices/httpdevices/${deviceId}`, { method: 'DELETE' });
  }
}
