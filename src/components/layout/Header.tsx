import React from 'react';
import { Bot } from 'lucide-react';
import { ThemeToggle } from '../ui/theme-toggle';
import { Button } from '../ui/button';
import { useAuthStore } from '../../store/auth-store';
import { cn } from '../../lib/utils';

import LogoValkyra from '../../assets/logo/LogoValkyra.tsx';

interface HeaderProps {
  onLogout: () => void;
}

export function Header({ onLogout }: HeaderProps) {
  const { user } = useAuthStore();

  return (
    <header className={cn("bg-card", "border-b", "dark:border-b-gray-900")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <LogoValkyra className="h-10 w-12" />
            <h1 className="text-2xl font-bold">Valkyra</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              {user?.email}
            </span>
            <Button
              variant="outline"
              onClick={onLogout}
            >
              Sign Out
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}