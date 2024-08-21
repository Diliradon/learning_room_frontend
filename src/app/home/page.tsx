'use client';

import React, { useContext, useState } from 'react';
import { Button } from '@/components/Button';
import { Menu, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SidebarContext } from '@/contexts/SideBarContext';
import { useAppSelector } from '@/hooks/useAppSelector';
import Image from 'next/image';

export const Hero: React.FC = () => {
  const [courses, setCourses] = useState([]);
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);
  const auth = useAppSelector(state => state.auth)

  const handleBurger = () => toggleSidebar();
  return (
    <div className="main-padding flex h-full w-full flex-col">
      <header className="lg:grid-container flex items-center pt-6 md:pt-11 lg:pt-[50px]">
        <button onClick={handleBurger} className="block lg:hidden">
          <Menu className="text-gray-100 h-8 w-8" />
        </button>

        <h4
          className={cn(
            'mx-auto block w-full py-1 text-center lg:col-start-2',
            isSidebarOpen && 'lg:col-start-4',
          )}
        >
          Homepage
        </h4>

        {!!courses.length && (
          <div className="relative w-full font-ubuntu">
            <input
              placeholder="Search in courses"
              type="text"
              className="w-full rounded-full px-12 py-3"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 transform" />
          </div>
        )}
      </header>

      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex w-full flex-1 flex-col items-center gap-10 pt-32">
          <img
            className="max-w-[148px] md:max-w-[165px] lg:max-w-[186px]"
            src="./mox.svg"
            alt="mox"
          />
          <h3 className="md:block">There are no courses</h3>
        </div>

        <div className="grid-container w-full pb-20 pt-8">
          <Button className="col-span-full md:col-start-3 md:col-end-7 lg:col-start-4 lg:col-end-7">
            Join the course
          </Button>
          <Button
            className="border-gray-500 col-span-full border-[1px] md:col-start-3 md:col-end-7 lg:col-start-7 lg:col-end-10"
            applyBackground={false}
          >
            Create a course
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
