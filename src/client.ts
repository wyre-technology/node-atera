/**
 * Main Atera Client
 */

import type { AteraConfig, ResolvedConfig } from './config.js';
import { resolveConfig } from './config.js';
import { HttpClient } from './http.js';
import { RateLimiter } from './rate-limiter.js';
import { AgentsResource } from './resources/agents.js';
import { TicketsResource } from './resources/tickets.js';
import { DevicesResource } from './resources/devices.js';
import { DevicesHttpResource } from './resources/devices-http.js';
import { DevicesSnmpResource } from './resources/devices-snmp.js';
import { DevicesTcpResource } from './resources/devices-tcp.js';
import { CustomersResource } from './resources/customers.js';
import { ContactsResource } from './resources/contacts.js';
import { AlertsResource } from './resources/alerts.js';
import { CustomValuesResource } from './resources/custom-values.js';
import { ContractsResource } from './resources/contracts.js';
import { BillingResource } from './resources/billing.js';
import { RatesResource } from './resources/rates.js';
import { KnowledgeBaseResource } from './resources/knowledge-base.js';

/**
 * Atera API Client
 *
 * @example
 * ```typescript
 * const client = new AteraClient({
 *   apiKey: 'your-api-key',
 * });
 *
 * // List all agents
 * const agents = await client.agents.list();
 *
 * // Auto-paginate all tickets
 * for await (const ticket of client.tickets.listAll()) {
 *   console.log(ticket.TicketTitle);
 * }
 * ```
 */
export class AteraClient {
  private readonly config: ResolvedConfig;
  private readonly rateLimiter: RateLimiter;
  private readonly httpClient: HttpClient;

  /** Agent operations */
  readonly agents: AgentsResource;
  /** Ticket operations */
  readonly tickets: TicketsResource;
  /** Generic device operations */
  readonly devices: DevicesResource;
  /** HTTP device monitor operations */
  readonly devicesHttp: DevicesHttpResource;
  /** SNMP device operations */
  readonly devicesSnmp: DevicesSnmpResource;
  /** TCP device monitor operations */
  readonly devicesTcp: DevicesTcpResource;
  /** Customer operations */
  readonly customers: CustomersResource;
  /** Contact operations */
  readonly contacts: ContactsResource;
  /** Alert operations */
  readonly alerts: AlertsResource;
  /** Custom value operations */
  readonly customValues: CustomValuesResource;
  /** Contract operations */
  readonly contracts: ContractsResource;
  /** Billing operations */
  readonly billing: BillingResource;
  /** Rate operations */
  readonly rates: RatesResource;
  /** Knowledge base operations */
  readonly knowledgeBase: KnowledgeBaseResource;

  constructor(config: AteraConfig) {
    this.config = resolveConfig(config);
    this.rateLimiter = new RateLimiter(this.config.rateLimit);
    this.httpClient = new HttpClient(this.config, this.rateLimiter);

    // Initialize resources
    this.agents = new AgentsResource(this.httpClient, this.config);
    this.tickets = new TicketsResource(this.httpClient, this.config);
    this.devices = new DevicesResource(this.httpClient, this.config);
    this.devicesHttp = new DevicesHttpResource(this.httpClient, this.config);
    this.devicesSnmp = new DevicesSnmpResource(this.httpClient, this.config);
    this.devicesTcp = new DevicesTcpResource(this.httpClient, this.config);
    this.customers = new CustomersResource(this.httpClient, this.config);
    this.contacts = new ContactsResource(this.httpClient, this.config);
    this.alerts = new AlertsResource(this.httpClient, this.config);
    this.customValues = new CustomValuesResource(this.httpClient, this.config);
    this.contracts = new ContractsResource(this.httpClient, this.config);
    this.billing = new BillingResource(this.httpClient, this.config);
    this.rates = new RatesResource(this.httpClient, this.config);
    this.knowledgeBase = new KnowledgeBaseResource(this.httpClient, this.config);
  }

  /**
   * Get the current configuration
   */
  getConfig(): Readonly<ResolvedConfig> {
    return this.config;
  }

  /**
   * Get the current rate limiter state
   */
  getRateLimiterState(): { currentRate: number; remainingRequests: number } {
    return {
      currentRate: this.rateLimiter.getCurrentRate(),
      remainingRequests: this.rateLimiter.getRemainingRequests(),
    };
  }
}
