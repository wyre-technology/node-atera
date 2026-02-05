/**
 * Knowledge base resource operations
 */

import type { HttpClient } from '../http.js';
import type { ResolvedConfig } from '../config.js';
import type { PaginatedResponse } from '../pagination.js';
import { createPaginatedIterable, type PaginatedIterable } from '../pagination.js';
import type { KnowledgeBaseArticle, KnowledgeBaseListParams } from '../types/knowledge-base.js';

/**
 * Knowledge base resource operations
 */
export class KnowledgeBaseResource {
  private readonly httpClient: HttpClient;
  private readonly config: ResolvedConfig;

  constructor(httpClient: HttpClient, config: ResolvedConfig) {
    this.httpClient = httpClient;
    this.config = config;
  }

  /**
   * List knowledge base articles with pagination
   * GET /knowledgebase
   */
  async list(params?: KnowledgeBaseListParams): Promise<PaginatedResponse<KnowledgeBaseArticle>> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.page) queryParams['Page'] = params.page;
    if (params?.itemsInPage) queryParams['ItemsInPage'] = params.itemsInPage;

    return this.httpClient.request<PaginatedResponse<KnowledgeBaseArticle>>('/knowledgebase', { params: queryParams });
  }

  /**
   * List all knowledge base articles with automatic pagination
   */
  listAll(params?: KnowledgeBaseListParams): PaginatedIterable<KnowledgeBaseArticle> {
    return createPaginatedIterable<KnowledgeBaseArticle>(
      this.httpClient,
      this.config.baseUrl,
      '/knowledgebase',
      params
    );
  }
}
