import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { checkEmail } from '../api/userApi';
import { RefObject, useEffect } from 'react';

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

export const validateEmail = async (email: string, invalidEmailMessage: string): Promise<string> => {
  try {
    const res = await checkEmail({ email });
    if (res.message === invalidEmailMessage) {
      return invalidEmailMessage;
    }
  } catch (err) {
    console.log(err);
  }
  return '';
};

export const capitalizeFirstLetter = (name: string): string => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

