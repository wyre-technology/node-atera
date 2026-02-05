/**
 * Knowledge base types for the Atera API
 */

/**
 * Knowledge base article entity
 */
export interface KnowledgeBaseArticle {
  ArticleID: number;
  Title: string;
  Content: string;
  CategoryID: number;
  CategoryName: string;
  Tags: string[];
  CreatedDate: string;
  LastModifiedDate: string;
  CreatedBy: string;
  LastModifiedBy: string;
  ViewCount: number;
  IsPublished: boolean;
}

/**
 * Parameters for listing knowledge base articles
 */
export interface KnowledgeBaseListParams {
  /** Page number (1-indexed) */
  page?: number;
  /** Number of items per page */
  itemsInPage?: number;
}
