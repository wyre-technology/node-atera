/**
 * TCP device monitors resource operations
 */

import type { HttpClient } from '../http.js';
import type { ResolvedConfig } from '../config.js';
import type { PaginationParams, PaginatedResponse } from '../pagination.js';
import { createPaginatedIterable, type PaginatedIterable } from '../pagination.js';
import type { TcpDevice, TcpDeviceCreateRequest } from '../types/devices.js';

/**
 * TCP device monitors resource operations
 */
export class DevicesTcpResource {
  private readonly httpClient: HttpClient;
  private readonly config: ResolvedConfig;

  constructor(httpClient: HttpClient, config: ResolvedConfig) {
    this.httpClient = httpClient;
    this.config = config;
  }

  /**
   * List TCP devices with pagination
   * GET /devices/tcpdevices
   */
  async list(params?: PaginationParams): Promise<PaginatedResponse<TcpDevice>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;

    return this.httpClient.request<PaginatedResponse<TcpDevice>>('/devices/tcpdevices', { params: queryParams });
  }

  /**
   * List all TCP devices with automatic pagination
   */
  listAll(params?: PaginationParams): PaginatedIterable<TcpDevice> {
    return createPaginatedIterable<TcpDevice>(
      this.httpClient,
      this.config.baseUrl,
      '/devices/tcpdevices',
      params
    );
  }

  /**
   * Create a new TCP device monitor
   * POST /devices/tcpdevices
   */
  async create(data: TcpDeviceCreateRequest): Promise<TcpDevice> {
    return this.httpClient.request<TcpDevice>('/devices/tcpdevices', { method: 'POST', body: data });
  }

  /**
   * Delete a TCP device monitor
   * DELETE /devices/tcpdevices/{deviceId}
   */
  async delete(deviceId: number): Promise<void> {
    await this.httpClient.request<void>(`/devices/tcpdevices/${deviceId}`, { method: 'DELETE' });
  }
}
