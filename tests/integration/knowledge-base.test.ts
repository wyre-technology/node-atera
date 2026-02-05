/**
 * Knowledge base integration tests
 */

import { describe, it, expect } from 'vitest';
import { AteraClient } from '../../src/client.js';

const client = new AteraClient({
  apiKey: 'test-api-key',
});

describe('KnowledgeBaseResource', () => {
  describe('list', () => {
    it('should list knowledge base articles', async () => {
      const result = await client.knowledgeBase.list();
      expect(result.items).toBeDefined();
      expect(result.items.length).toBeGreaterThan(0);
    });
  });

  describe('listAll', () => {
    it('should iterate through all articles', async () => {
      const articles = await client.knowledgeBase.listAll().toArray();
      expect(articles.length).toBe(3);
    });
  });
});
