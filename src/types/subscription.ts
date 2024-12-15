export interface Subscription {
  service_name: string;
  subscription_details: {
    plan: string;
    cost: number;
    currency: string;
    billing_cycle: string;
    next_billing_date: string;
    features: string[];
  };
  trial_end_date?: string;
  credit_balance: number;
  last_updated: string;
}