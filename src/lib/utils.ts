import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const useLocalStorage = (key: string) => {
  try {
    const item = localStorage.getItem(key);
    if (!item || item === 'undefined') {
      return null;
    }
    return JSON.parse(item);
  } catch (e) {
    console.error(`Failed to parse data from localStorage for key "${key}":`, e);
    return null;
  }
};

export type SearchParams = {
  [key: string]: string | string[] | null;
};

export function getSearchWith(
  paramsToUpdate: SearchParams,
  currentParams: string | URLSearchParams,
): string {
  const newParams = new URLSearchParams(currentParams.toString());

  Object.entries(paramsToUpdate).forEach(([key, value]) => {
    if (value === null) {
      newParams.delete(key);
    } else if (Array.isArray(value)) {
      newParams.delete(key);
      value.forEach(part => {
        newParams.append(key, part);
      })
    } else {
      newParams.set(key, value);
    }
  });

  return newParams.toString();
}

