import React from 'react';
import { SubscriptionCard } from './SubscriptionCard';
import type { Subscription } from '../types/subscription';

interface SubscriptionGridProps {
  subscriptions: Subscription[];
}

export function SubscriptionGrid({ subscriptions }: SubscriptionGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {subscriptions.map((subscription) => (
        <SubscriptionCard
          key={subscription.service_name}
          subscription={subscription}
        />
      ))}
    </div>
  );
}