import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const useLocalStorage = (key: string) => {
  try {
    const item = localStorage.getItem(key);
    if (item === null || item === 'undefined') {
      return null;
    }
    return JSON.parse(item);
  } catch (e) {
    console.error('Failed to parse data from localStorage', e);
    return null;
  }
};

