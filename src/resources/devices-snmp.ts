/**
 * SNMP device monitors resource operations
 */

import type { HttpClient } from '../http.js';
import type { ResolvedConfig } from '../config.js';
import type { PaginationParams, PaginatedResponse } from '../pagination.js';
import { createPaginatedIterable, type PaginatedIterable } from '../pagination.js';
import type { SnmpDevice, SnmpDeviceCreateRequest } from '../types/devices.js';

/**
 * SNMP device monitors resource operations
 */
export class DevicesSnmpResource {
  private readonly httpClient: HttpClient;
  private readonly config: ResolvedConfig;

  constructor(httpClient: HttpClient, config: ResolvedConfig) {
    this.httpClient = httpClient;
    this.config = config;
  }

  /**
   * List SNMP devices with pagination
   * GET /devices/snmpdevices
   */
  async list(params?: PaginationParams): Promise<PaginatedResponse<SnmpDevice>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;

    return this.httpClient.request<PaginatedResponse<SnmpDevice>>('/devices/snmpdevices', { params: queryParams });
  }

  /**
   * List all SNMP devices with automatic pagination
   */
  listAll(params?: PaginationParams): PaginatedIterable<SnmpDevice> {
    return createPaginatedIterable<SnmpDevice>(
      this.httpClient,
      this.config.baseUrl,
      '/devices/snmpdevices',
      params
    );
  }

  /**
   * Create a new SNMP device
   * POST /devices/snmpdevices
   */
  async create(data: SnmpDeviceCreateRequest): Promise<SnmpDevice> {
    return this.httpClient.request<SnmpDevice>('/devices/snmpdevices', { method: 'POST', body: data });
  }

  /**
   * Delete an SNMP device
   * DELETE /devices/snmpdevices/{deviceId}
   */
  async delete(deviceId: number): Promise<void> {
    await this.httpClient.request<void>(`/devices/snmpdevices/${deviceId}`, { method: 'DELETE' });
  }
}
