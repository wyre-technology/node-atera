# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2026-02-04

### Added

- Initial release with complete Atera API v3 coverage
- Full TypeScript type definitions for all entities
- API key authentication via X-API-KEY header
- Automatic pagination with async iterators
- Built-in rate limiting (700 req/min) with configurable thresholds
- Exponential backoff retry logic for rate limit errors

#### Endpoints Implemented

- **Agents**: list, get, getByMachineName, delete, runPowerShell
- **Tickets**: full CRUD, comments, work hours, timesheets, billable durations, filters, statuses
- **Devices**: generic CRUD, HTTP monitors, SNMP devices, TCP monitors
- **Customers**: full CRUD, list agents, list alerts
- **Contacts**: full CRUD, list by customer
- **Alerts**: list, get, list by agent, list by device
- **Custom Values**: full support for agent, ticket, customer, contact, contract custom values
- **Contracts**: list, get, list by customer
- **Billing**: list invoices, get invoice
- **Rates**: full CRUD, products, expenses
- **Knowledge Base**: list articles

#### Error Handling

- `AteraError` - Base error class
- `AteraAuthenticationError` - 401 unauthorized
- `AteraNotFoundError` - 404 not found
- `AteraValidationError` - 400 bad request with validation errors
- `AteraRateLimitError` - 429 rate limit exceeded
- `AteraServerError` - 500+ server errors

### Testing

- Full test suite using Vitest and MSW for mocked HTTP responses
- Zero live API calls in tests
- Coverage targets: 80%+ lines, functions, branches, statements

[unreleased]: https://github.com/asachs01/node-atera/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/asachs01/node-atera/releases/tag/v0.1.0
