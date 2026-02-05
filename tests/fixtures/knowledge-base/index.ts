/**
 * Knowledge base fixtures
 */

export const single = {
  ArticleID: 800,
  Title: 'How to reset your password',
  Content: '<h1>Password Reset Guide</h1><p>Follow these steps to reset your password...</p>',
  CategoryID: 1,
  CategoryName: 'User Guides',
  Tags: ['password', 'security', 'account'],
  CreatedDate: '2025-01-15T08:00:00Z',
  LastModifiedDate: '2026-01-01T10:00:00Z',
  CreatedBy: 'Admin',
  LastModifiedBy: 'Admin',
  ViewCount: 150,
  IsPublished: true,
};

export const list = {
  items: [
    single,
    {
      ...single,
      ArticleID: 801,
      Title: 'VPN Setup Instructions',
      Content: '<h1>VPN Setup</h1><p>Configure your VPN client with these settings...</p>',
      CategoryName: 'Network',
      Tags: ['vpn', 'network', 'remote'],
      ViewCount: 89,
    },
    {
      ...single,
      ArticleID: 802,
      Title: 'Email Configuration on Mobile',
      Content: '<h1>Mobile Email Setup</h1><p>Add your work email to your phone...</p>',
      CategoryName: 'Email',
      Tags: ['email', 'mobile', 'setup'],
      ViewCount: 234,
    },
  ],
  totalItemCount: 3,
  page: 1,
  itemsInPage: 50,
  totalPages: 1,
  prevLink: null,
  nextLink: null,
};
