import React from 'react';
import { Calendar, CreditCard, Clock } from 'lucide-react';
import type { Subscription } from '../types/subscription';

interface SubscriptionCardProps {
  subscription: Subscription;
}

export function SubscriptionCard({ subscription }: SubscriptionCardProps) {
  const {
    service_name,
    subscription_details,
    trial_end_date,
    credit_balance,
    last_updated,
  } = subscription;

  return (
    <div className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border dark:border-gray-800">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{service_name}</h3>
        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
          {subscription_details.plan}
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center text-muted-foreground">
          <CreditCard className="w-5 h-5 mr-2" />
          <span className="text-sm">
            {subscription_details.cost} {subscription_details.currency} / {subscription_details.billing_cycle}
          </span>
        </div>

        {trial_end_date && (
          <div className="flex items-center text-muted-foreground">
            <Clock className="w-5 h-5 mr-2" />
            <span className="text-sm">
              Trial ends: {new Date(trial_end_date).toLocaleDateString()}
            </span>
          </div>
        )}

        <div className="flex items-center text-muted-foreground">
          <Calendar className="w-5 h-5 mr-2" />
          <span className="text-sm">
            Next billing: {new Date(subscription_details.next_billing_date).toLocaleDateString()}
          </span>
        </div>

        <div className="mt-4">
          <div className="text-sm font-medium mb-2">Features:</div>
          <div className="flex flex-wrap gap-2">
            {subscription_details.features.map((feature) => (
              <span
                key={feature}
                className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Credit Balance:</span>
            <span className="font-medium text-green-600 dark:text-green-400">${credit_balance}</span>
          </div>
          <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 dark:bg-green-400 rounded-full"
              style={{ width: `${Math.min((credit_balance / 1000) * 100, 100)}%` }}
            />
          </div>
        </div>

        <div className="text-xs text-muted-foreground mt-4">
          Last updated: {new Date(last_updated).toLocaleString()}
        </div>
      </div>
    </div>
  );
}