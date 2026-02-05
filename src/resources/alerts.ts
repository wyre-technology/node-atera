/**
 * Alerts resource operations
 */

import type { HttpClient } from '../http.js';
import type { ResolvedConfig } from '../config.js';
import type { PaginationParams, PaginatedResponse } from '../pagination.js';
import { createPaginatedIterable, type PaginatedIterable } from '../pagination.js';
import type { Alert, AlertListParams } from '../types/alerts.js';

/**
 * Alerts resource operations
 */
export class AlertsResource {
  private readonly httpClient: HttpClient;
  private readonly config: ResolvedConfig;

  constructor(httpClient: HttpClient, config: ResolvedConfig) {
    this.httpClient = httpClient;
    this.config = config;
  }

  /**
   * List alerts with pagination
   * GET /alerts
   */
  async list(params?: AlertListParams): Promise<PaginatedResponse<Alert>> {
    const queryParams: Record<string, string | number | boolean | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;
    if (params?.alertSeverity) queryParams['AlertSeverity'] = params.alertSeverity;
    if (params?.customerId) queryParams['CustomerID'] = params.customerId;
    if (params?.archived !== undefined) queryParams['Archived'] = params.archived;

    return this.httpClient.request<PaginatedResponse<Alert>>('/alerts', { params: queryParams });
  }

  /**
   * List all alerts with automatic pagination
   */
  listAll(params?: Omit<AlertListParams, 'page'>): PaginatedIterable<Alert> {
    const additionalParams: Record<string, string | number | boolean | undefined> = {};
    if (params?.alertSeverity) additionalParams['AlertSeverity'] = params.alertSeverity;
    if (params?.customerId) additionalParams['CustomerID'] = params.customerId;
    if (params?.archived !== undefined) additionalParams['Archived'] = params.archived;

    return createPaginatedIterable<Alert>(
      this.httpClient,
      this.config.baseUrl,
      '/alerts',
      { itemsInPage: params?.itemsInPage },
      additionalParams
    );
  }

  /**
   * Get a single alert by ID
   * GET /alerts/{alertId}
   */
  async get(alertId: number): Promise<Alert> {
    return this.httpClient.request<Alert>(`/alerts/${alertId}`);
  }

  /**
   * List alerts for a specific agent
   * GET /alerts/agent/{agentId}
   */
  async listByAgent(agentId: number, params?: PaginationParams): Promise<PaginatedResponse<Alert>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;

    return this.httpClient.request<PaginatedResponse<Alert>>(
      `/alerts/agent/${agentId}`,
      { params: queryParams }
    );
  }

  /**
   * List all alerts for an agent with automatic pagination
   */
  listByAgentAll(agentId: number, params?: PaginationParams): PaginatedIterable<Alert> {
    return createPaginatedIterable<Alert>(
      this.httpClient,
      this.config.baseUrl,
      `/alerts/agent/${agentId}`,
      params
    );
  }

  /**
   * List alerts for a specific device
   * GET /alerts/device/{deviceId}
   */
  async listByDevice(deviceId: number, params?: PaginationParams): Promise<PaginatedResponse<Alert>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;

    return this.httpClient.request<PaginatedResponse<Alert>>(
      `/alerts/device/${deviceId}`,
      { params: queryParams }
    );
  }

  /**
   * List all alerts for a device with automatic pagination
   */
  listByDeviceAll(deviceId: number, params?: PaginationParams): PaginatedIterable<Alert> {
    return createPaginatedIterable<Alert>(
      this.httpClient,
      this.config.baseUrl,
      `/alerts/device/${deviceId}`,
      params
    );
  }
}
