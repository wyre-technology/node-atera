/**
 * Generic devices resource operations
 */

import type { HttpClient } from '../http.js';
import type { ResolvedConfig } from '../config.js';
import type { PaginatedResponse } from '../pagination.js';
import { createPaginatedIterable, type PaginatedIterable } from '../pagination.js';
import type {
  Device,
  DeviceListParams,
  DeviceCreateRequest,
  DeviceUpdateRequest,
} from '../types/devices.js';

/**
 * Generic devices resource operations
 */
export class DevicesResource {
  private readonly httpClient: HttpClient;
  private readonly config: ResolvedConfig;

  constructor(httpClient: HttpClient, config: ResolvedConfig) {
    this.httpClient = httpClient;
    this.config = config;
  }

  /**
   * List devices with pagination
   * GET /devices
   */
  async list(params?: DeviceListParams): Promise<PaginatedResponse<Device>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;
    if (params?.customerId) queryParams['CustomerID'] = params.customerId;

    return this.httpClient.request<PaginatedResponse<Device>>('/devices', { params: queryParams });
  }

  /**
   * List all devices with automatic pagination
   */
  listAll(params?: Omit<DeviceListParams, 'page'>): PaginatedIterable<Device> {
    const additionalParams: Record<string, string | number | undefined> = {};
    if (params?.customerId) additionalParams['CustomerID'] = params.customerId;

    return createPaginatedIterable<Device>(
      this.httpClient,
      this.config.baseUrl,
      '/devices',
      { itemsInPage: params?.itemsInPage },
      additionalParams
    );
  }

  /**
   * Get a single device by ID
   * GET /devices/{deviceId}
   */
  async get(deviceId: number): Promise<Device> {
    return this.httpClient.request<Device>(`/devices/${deviceId}`);
  }

  /**
   * Create a new device
   * POST /devices
   */
  async create(data: DeviceCreateRequest): Promise<Device> {
    return this.httpClient.request<Device>('/devices', { method: 'POST', body: data });
  }

  /**
   * Update an existing device
   * POST /devices/{deviceId}
   */
  async update(deviceId: number, data: DeviceUpdateRequest): Promise<Device> {
    return this.httpClient.request<Device>(`/devices/${deviceId}`, { method: 'POST', body: data });
  }

  /**
   * Delete a device
   * DELETE /devices/{deviceId}
   */
  async delete(deviceId: number): Promise<void> {
    await this.httpClient.request<void>(`/devices/${deviceId}`, { method: 'DELETE' });
  }
}
