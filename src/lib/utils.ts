import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines clsx and tailwind-merge for optimal className handling
 * 
 * @example
 * cn('px-2 py-1', condition && 'bg-blue-500', 'bg-red-500')
 * // Returns: 'px-2 py-1 bg-red-500' (red overrides blue)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
