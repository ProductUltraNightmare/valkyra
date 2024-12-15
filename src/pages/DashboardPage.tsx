import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { SubscriptionGrid } from '../components/SubscriptionGrid';
import { SearchBar } from '../components/search/SearchBar';
import { FilterBar, FilterOption } from '../components/filters/FilterBar';
import { mockSubscriptions } from '../data/mock-data';
import { useAuthStore } from '../store/auth-store';

export function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const filterSubscriptions = (subscriptions: typeof mockSubscriptions) => {
    return subscriptions
      .filter((sub) => {
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          return (
            sub.service_name.toLowerCase().includes(query) ||
            sub.subscription_details.plan.toLowerCase().includes(query)
          );
        }
        return true;
      })
      .filter((sub) => {
        switch (activeFilter) {
          case 'trial':
            return !!sub.trial_end_date;
          case 'active':
            return !sub.trial_end_date;
          case 'expiring':
            if (sub.trial_end_date) {
              const daysUntilExpiry = Math.ceil(
                (new Date(sub.trial_end_date).getTime() - new Date().getTime()) /
                  (1000 * 60 * 60 * 24)
              );
              return daysUntilExpiry <= 7;
            }
            return false;
          default:
            return true;
        }
      });
  };

  const filteredSubscriptions = filterSubscriptions(mockSubscriptions);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onLogout={handleLogout} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-lg font-medium">Active Subscriptions</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Monitor your AI service subscriptions, trials, and credit balances.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-64">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
            <FilterBar
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>

          <SubscriptionGrid subscriptions={filteredSubscriptions} />
        </div>
      </main>
    </div>
  );
}