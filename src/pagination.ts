/**
 * Pagination utilities for the Atera API
 *
 * Atera uses page-based pagination with Page and ItemsInPage query parameters.
 * Responses include pagination metadata with nextLink for traversal.
 */

import type { HttpClient } from './http.js';

/**
 * Pagination parameters for list requests
 */
export interface PaginationParams {
  /** Page number (1-indexed) */
  page?: number;
  /** Number of items per page (default: 50, max: 50) */
  itemsInPage?: number;
}

/**
 * Pagination metadata returned by list endpoints
 */
export interface PaginationMeta {
  /** Total number of items across all pages */
  totalItemCount: number;
  /** Current page number */
  page: number;
  /** Number of items in the current page */
  itemsInPage: number;
  /** Total number of pages */
  totalPages: number;
  /** URL for the previous page, or null if on first page */
  prevLink: string | null;
  /** URL for the next page, or null if on last page */
  nextLink: string | null;
}

/**
 * Generic paginated response structure from Atera
 */
export interface PaginatedResponse<T> extends PaginationMeta {
  /** Array of items in the current page */
  items: T[];
}

/**
 * Async iterable wrapper for paginated results
 */
export class PaginatedIterable<T> implements AsyncIterable<T> {
  private readonly httpClient: HttpClient;
  private readonly initialUrl: string;

  constructor(httpClient: HttpClient, initialUrl: string) {
    this.httpClient = httpClient;
    this.initialUrl = initialUrl;
  }

  async *[Symbol.asyncIterator](): AsyncIterator<T> {
    let nextUrl: string | null = this.initialUrl;

    while (nextUrl) {
      const response: PaginatedResponse<T> = await this.httpClient.requestUrl<PaginatedResponse<T>>(nextUrl);
      const items = response.items;

      if (items) {
        for (const item of items) {
          yield item;
        }
      }

      // Get the next page URL
      nextUrl = response.nextLink ?? null;
    }
  }

  /**
   * Collect all items into an array
   */
  async toArray(): Promise<T[]> {
    const items: T[] = [];
    for await (const item of this) {
      items.push(item);
    }
    return items;
  }
}

/**
 * Build pagination query parameters for Atera API
 */
export function buildPaginationParams(params?: PaginationParams): Record<string, string | number | undefined> {
  if (!params) {
    return {};
  }
  return {
    Page: params.page,
    ItemsInPage: params.itemsInPage,
  };
}

/**
 * Create a paginated iterable for a resource
 */
export function createPaginatedIterable<T>(
  httpClient: HttpClient,
  baseUrl: string,
  path: string,
  params?: PaginationParams,
  additionalParams?: Record<string, string | number | boolean | undefined>
): PaginatedIterable<T> {
  // Build the initial URL with parameters
  let url = `${baseUrl}${path}`;
  const searchParams = new URLSearchParams();

  if (params?.page) {
    searchParams.append('Page', String(params.page));
  }
  if (params?.itemsInPage) {
    searchParams.append('ItemsInPage', String(params.itemsInPage));
  }

  // Add any additional filter parameters
  if (additionalParams) {
    for (const [key, value] of Object.entries(additionalParams)) {
      if (value !== undefined) {
        searchParams.append(key, String(value));
      }
    }
  }

  const queryString = searchParams.toString();
  if (queryString) {
    url += `?${queryString}`;
  }

  return new PaginatedIterable<T>(httpClient, url);
}
