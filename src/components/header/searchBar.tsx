'use-client';

import { cn, getSearchWith, SearchParams } from '@/lib/utils/utils';
import debounce from 'lodash.debounce';
import { Search } from 'lucide-react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';

type Props = {
  isSidebarOpen: boolean;
};

export const SearchBar: React.FC<Props> = ({ isSidebarOpen }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const query = searchParams.get('query') || '';
  const [localQuery, setLocalQuery] = useState(query);

  const setSearchWith = useCallback(
    (params: string | null ) => {
      const search = new URLSearchParams(searchParams);
      if (params) {
        search.set('query', params.trim());
      } else {
        search.delete('query');
      }

      console.log(search);

      router.replace(`${pathname}?${search.toString()}`);
    },
    [searchParams],
  );

  const debouncedSetSearchWith = useCallback(
    debounce(newValue => {
      setSearchWith(newValue || null);
    }, 1000),
    [setSearchWith],
  );

  const handleQueryChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      console.log(newValue);

      setLocalQuery(newValue);
      debouncedSetSearchWith(newValue);
    },
    [debouncedSetSearchWith],
  );

  return (
    <div
      className={cn(
        'col-span-full row-start-2 relative w-full font-ubuntu lg:row-start-1 lg:col-start-4 lg:col-end-12',
        isSidebarOpen && 'lg:col-start-6',
      )}
    >
      <input
        placeholder="Search in courses"
        type="text"
        className="w-full rounded-full px-12 py-3"
        value={localQuery}
        onChange={handleQueryChange}
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 transform" />
    </div>
  );
};
