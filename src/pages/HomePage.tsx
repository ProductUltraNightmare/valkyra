import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot } from 'lucide-react';
import { AuthDialog } from '../components/auth/AuthDialog';
import { ThemeToggle } from '../components/ui/theme-toggle';
import { Button } from '../components/ui/button';
import { useAuthStore } from '../store/auth-store';
import LogoValkyra from '../assets/logo/LogoValkyra.tsx';

export function HomePage() {
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <header className="absolute top-0 left-0 right-0 p-4">
        <div className="max-w-7xl mx-auto flex justify-end">
          <ThemeToggle />
        </div>
      </header>

      <main className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className='flex flex-col space-y-2 justify-center'>
            <div className="flex justify-center">
              <LogoValkyra width={120} height={60} />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Valkyra
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Monitor your AI service subscriptions, trials, and credit balances in one place.
            Never miss a renewal or trial expiration again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setIsAuthDialogOpen(true)}
              className="text-lg px-8"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsAuthDialogOpen(true)}
              className="text-lg px-8"
            >
              Sign In
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-lg font-semibold mb-2">Track Everything</h3>
              <p className="text-muted-foreground">
                Monitor all your AI subscriptions, credit balances, and trial periods in a single dashboard.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-lg font-semibold mb-2">Smart Notifications</h3>
              <p className="text-muted-foreground">
                Get timely alerts for upcoming renewals, trial expirations, and low credit balances.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-lg font-semibold mb-2">Cost Analytics</h3>
              <p className="text-muted-foreground">
                Visualize your spending patterns and optimize your AI service costs.
              </p>
            </div>
          </div>
        </div>
      </main>

      <AuthDialog
        isOpen={isAuthDialogOpen}
        onClose={() => setIsAuthDialogOpen(false)}
      />
    </div>
  );
}