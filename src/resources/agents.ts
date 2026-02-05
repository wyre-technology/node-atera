/**
 * Agents resource operations
 */

import type { HttpClient } from '../http.js';
import type { ResolvedConfig } from '../config.js';
import type { PaginatedResponse } from '../pagination.js';
import { createPaginatedIterable, type PaginatedIterable } from '../pagination.js';
import type {
  Agent,
  AgentListParams,
  AgentPowerShellRequest,
  AgentPowerShellResponse,
} from '../types/agents.js';

/**
 * Agents resource operations
 */
export class AgentsResource {
  private readonly httpClient: HttpClient;
  private readonly config: ResolvedConfig;

  constructor(httpClient: HttpClient, config: ResolvedConfig) {
    this.httpClient = httpClient;
    this.config = config;
  }

  /**
   * List agents with pagination
   * GET /agents
   */
  async list(params?: AgentListParams): Promise<PaginatedResponse<Agent>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;
    if (params?.customerId) queryParams['CustomerID'] = params.customerId;

    return this.httpClient.request<PaginatedResponse<Agent>>('/agents', { params: queryParams });
  }

  /**
   * List all agents with automatic pagination
   */
  listAll(params?: Omit<AgentListParams, 'page'>): PaginatedIterable<Agent> {
    const additionalParams: Record<string, string | number | undefined> = {};
    if (params?.customerId) additionalParams['CustomerID'] = params.customerId;

    return createPaginatedIterable<Agent>(
      this.httpClient,
      this.config.baseUrl,
      '/agents',
      { itemsInPage: params?.itemsInPage },
      additionalParams
    );
  }

  /**
   * Get a single agent by ID
   * GET /agents/{agentId}
   */
  async get(agentId: number): Promise<Agent> {
    return this.httpClient.request<Agent>(`/agents/${agentId}`);
  }

  /**
   * Get an agent by machine name
   * GET /agents/machine/{machineName}
   */
  async getByMachineName(machineName: string): Promise<Agent> {
    return this.httpClient.request<Agent>(`/agents/machine/${encodeURIComponent(machineName)}`);
  }

  /**
   * Delete an agent
   * DELETE /agents/{agentId}
   */
  async delete(agentId: number): Promise<void> {
    await this.httpClient.request<void>(`/agents/${agentId}`, { method: 'DELETE' });
  }

  /**
   * Run PowerShell script on an agent
   * POST /agents/{agentId}/powershell/runtime/{runtimeId}
   */
  async runPowerShell(
    agentId: number,
    runtimeId: number,
    data: AgentPowerShellRequest
  ): Promise<AgentPowerShellResponse> {
    return this.httpClient.request<AgentPowerShellResponse>(
      `/agents/${agentId}/powershell/runtime/${runtimeId}`,
      { method: 'POST', body: data }
    );
  }
}
