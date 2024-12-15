import React from 'react';
import { Button } from '../ui/button';

export type FilterOption = 'all' | 'trial' | 'active' | 'expiring';

interface FilterBarProps {
  activeFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex space-x-2 h-10">
      <Button
        variant={activeFilter === 'all' ? 'default' : 'outline'}
        size="sm"
        className="h-full"
        onClick={() => onFilterChange('all')}
      >
        All
      </Button>
      <Button
        variant={activeFilter === 'trial' ? 'default' : 'outline'}
        size="sm"
        className="h-full"
        onClick={() => onFilterChange('trial')}
      >
        Trial
      </Button>
      <Button
        variant={activeFilter === 'active' ? 'default' : 'outline'}
        size="sm"
        className="h-full"
        onClick={() => onFilterChange('active')}
      >
        Active
      </Button>
      <Button
        variant={activeFilter === 'expiring' ? 'default' : 'outline'}
        size="sm"
        className="h-full"
        onClick={() => onFilterChange('expiring')}
      >
        Expiring Soon
      </Button>
    </div>
  );
}