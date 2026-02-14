import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * PageTransition Component
 * 
 * Wraps page content with smooth fade-in and slide-up animations.
 * Uses pure CSS/Tailwind for zero-dependency transitions.
 */
export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both">
      {children}
    </div>
  );
};
