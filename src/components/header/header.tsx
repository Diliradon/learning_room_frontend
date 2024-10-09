'use client';

import { SidebarContext } from '@/contexts/SideBarContext';
import { useAppSelector } from '@/hooks/useAppSelector';
import { cn } from '@/lib/utils';
import { Menu, Search } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { SearchBar } from './searchBar';

type Props = {
  title: string;
};

export const Header: React.FC<Props> = ({ title }) => {
  const { studyingCourses } = useAppSelector(state => state.courses);
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

  const handleBurger = () => toggleSidebar();

  return (
    <header className="grid-container pt-6 md:pt-11 lg:pt-[50px]">
      <button onClick={handleBurger} className="col-span-1 block lg:hidden">
        <Menu className="h-8 w-8 text-gray-100" />
      </button>

      <h4
        className={cn(
          'col-start-2 col-span-2 mx-auto block w-full py-1 text-center md:col-start-4 lg:col-span-2 lg:col-start-2 lg:text-start',
          isSidebarOpen && 'lg:col-start-4',
        )}
      >
        {title}
      </h4>

      {!!studyingCourses.length && <SearchBar isSidebarOpen={isSidebarOpen} />}
    </header>
  );
};
