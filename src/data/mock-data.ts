export const mockSubscriptions = [
  {
    service_name: "OpenAI",
    subscription_details: {
      plan: "Pro",
      cost: 100.0,
      currency: "USD",
      billing_cycle: "monthly",
      next_billing_date: "2024-05-01",
      features: ["GPT-4", "Priority Support", "Advanced Analytics"]
    },
    trial_end_date: "2024-04-15",
    credit_balance: 250.0,
    last_updated: "2024-04-10T12:34:56Z"
  },
  {
    service_name: "Google Cloud AI",
    subscription_details: {
      plan: "Enterprise",
      cost: 500.0,
      currency: "USD",
      billing_cycle: "monthly",
      next_billing_date: "2024-05-15",
      features: ["AutoML", "Custom Models", "24/7 Support"]
    },
    credit_balance: 750.0,
    last_updated: "2024-04-10T14:22:33Z"
  },
  {
    service_name: "Azure AI",
    subscription_details: {
      plan: "Business",
      cost: 300.0,
      currency: "USD",
      billing_cycle: "monthly",
      next_billing_date: "2024-05-10",
      features: ["Computer Vision", "Language Understanding", "Technical Support"]
    },
    trial_end_date: "2024-04-20",
    credit_balance: 500.0,
    last_updated: "2024-04-10T13:15:44Z"
  }
];