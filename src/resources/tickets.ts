/**
 * Tickets resource operations
 */

import type { HttpClient } from '../http.js';
import type { ResolvedConfig } from '../config.js';
import type { PaginationParams, PaginatedResponse } from '../pagination.js';
import { createPaginatedIterable, type PaginatedIterable } from '../pagination.js';
import type {
  Ticket,
  TicketListParams,
  TicketCreateRequest,
  TicketUpdateRequest,
  TicketComment,
  TicketCommentCreateRequest,
  TicketWorkHours,
  TicketWorkHoursCreateRequest,
  TicketBillableDuration,
  TicketTimesheet,
  TicketTimesheetCreateRequest,
  TicketFilter,
  TicketStatusItem,
} from '../types/tickets.js';

/**
 * Tickets resource operations
 */
export class TicketsResource {
  private readonly httpClient: HttpClient;
  private readonly config: ResolvedConfig;

  constructor(httpClient: HttpClient, config: ResolvedConfig) {
    this.httpClient = httpClient;
    this.config = config;
  }

  /**
   * List tickets with pagination
   * GET /tickets
   */
  async list(params?: TicketListParams): Promise<PaginatedResponse<Ticket>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;
    if (params?.ticketStatus) queryParams['TicketStatus'] = params.ticketStatus;
    if (params?.customerId) queryParams['CustomerID'] = params.customerId;
    if (params?.technicianId) queryParams['TechnicianID'] = params.technicianId;
    if (params?.dateFrom) queryParams['DateFrom'] = params.dateFrom;
    if (params?.dateTo) queryParams['DateTo'] = params.dateTo;

    return this.httpClient.request<PaginatedResponse<Ticket>>('/tickets', { params: queryParams });
  }

  /**
   * List all tickets with automatic pagination
   */
  listAll(params?: Omit<TicketListParams, 'page'>): PaginatedIterable<Ticket> {
    const additionalParams: Record<string, string | number | undefined> = {};
    if (params?.ticketStatus) additionalParams['TicketStatus'] = params.ticketStatus;
    if (params?.customerId) additionalParams['CustomerID'] = params.customerId;
    if (params?.technicianId) additionalParams['TechnicianID'] = params.technicianId;
    if (params?.dateFrom) additionalParams['DateFrom'] = params.dateFrom;
    if (params?.dateTo) additionalParams['DateTo'] = params.dateTo;

    return createPaginatedIterable<Ticket>(
      this.httpClient,
      this.config.baseUrl,
      '/tickets',
      { itemsInPage: params?.itemsInPage },
      additionalParams
    );
  }

  /**
   * Get a single ticket by ID
   * GET /tickets/{ticketId}
   */
  async get(ticketId: number): Promise<Ticket> {
    return this.httpClient.request<Ticket>(`/tickets/${ticketId}`);
  }

  /**
   * Create a new ticket
   * POST /tickets
   */
  async create(data: TicketCreateRequest): Promise<Ticket> {
    return this.httpClient.request<Ticket>('/tickets', { method: 'POST', body: data });
  }

  /**
   * Update an existing ticket
   * POST /tickets/{ticketId}
   */
  async update(ticketId: number, data: TicketUpdateRequest): Promise<Ticket> {
    return this.httpClient.request<Ticket>(`/tickets/${ticketId}`, { method: 'POST', body: data });
  }

  /**
   * Delete a ticket
   * DELETE /tickets/{ticketId}
   */
  async delete(ticketId: number): Promise<void> {
    await this.httpClient.request<void>(`/tickets/${ticketId}`, { method: 'DELETE' });
  }

  /**
   * List comments for a ticket
   * GET /tickets/{ticketId}/comments
   */
  async listComments(ticketId: number, params?: PaginationParams): Promise<PaginatedResponse<TicketComment>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;

    return this.httpClient.request<PaginatedResponse<TicketComment>>(
      `/tickets/${ticketId}/comments`,
      { params: queryParams }
    );
  }

  /**
   * Create a comment on a ticket
   * POST /tickets/{ticketId}/comments
   */
  async createComment(ticketId: number, data: TicketCommentCreateRequest): Promise<TicketComment> {
    return this.httpClient.request<TicketComment>(
      `/tickets/${ticketId}/comments`,
      { method: 'POST', body: data }
    );
  }

  /**
   * List work hours for a ticket
   * GET /tickets/{ticketId}/workhours
   */
  async listWorkHours(ticketId: number, params?: PaginationParams): Promise<PaginatedResponse<TicketWorkHours>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;

    return this.httpClient.request<PaginatedResponse<TicketWorkHours>>(
      `/tickets/${ticketId}/workhours`,
      { params: queryParams }
    );
  }

  /**
   * Create work hours entry for a ticket
   * POST /tickets/{ticketId}/workhours
   */
  async createWorkHours(ticketId: number, data: TicketWorkHoursCreateRequest): Promise<TicketWorkHours> {
    return this.httpClient.request<TicketWorkHours>(
      `/tickets/${ticketId}/workhours`,
      { method: 'POST', body: data }
    );
  }

  /**
   * List billable durations for a ticket
   * GET /tickets/{ticketId}/billabledurations
   */
  async listBillableDurations(
    ticketId: number,
    params?: PaginationParams
  ): Promise<PaginatedResponse<TicketBillableDuration>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;

    return this.httpClient.request<PaginatedResponse<TicketBillableDuration>>(
      `/tickets/${ticketId}/billabledurations`,
      { params: queryParams }
    );
  }

  /**
   * List timesheets for a ticket
   * GET /tickets/{ticketId}/timesheets
   */
  async listTimesheets(ticketId: number, params?: PaginationParams): Promise<PaginatedResponse<TicketTimesheet>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;

    return this.httpClient.request<PaginatedResponse<TicketTimesheet>>(
      `/tickets/${ticketId}/timesheets`,
      { params: queryParams }
    );
  }

  /**
   * Create a timesheet entry for a ticket
   * POST /tickets/{ticketId}/timesheets
   */
  async createTimesheet(ticketId: number, data: TicketTimesheetCreateRequest): Promise<TicketTimesheet> {
    return this.httpClient.request<TicketTimesheet>(
      `/tickets/${ticketId}/timesheets`,
      { method: 'POST', body: data }
    );
  }

  /**
   * List available ticket filters
   * GET /tickets/filters
   */
  async listFilters(): Promise<TicketFilter[]> {
    return this.httpClient.request<TicketFilter[]>('/tickets/filters');
  }

  /**
   * List available ticket statuses
   * GET /tickets/statuses
   */
  async listStatuses(): Promise<TicketStatusItem[]> {
    return this.httpClient.request<TicketStatusItem[]>('/tickets/statuses');
  }
}
