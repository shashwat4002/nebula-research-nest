import { memo } from 'react';
import { StarField } from '@/components/StarField';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayoutComponent = ({ children }: AuthLayoutProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated star-field background */}
      <StarField />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export const AuthLayout = memo(AuthLayoutComponent);
