'use client'; 

import { SidebarContext } from "@/contexts/SideBarContext";
import { cn } from "@/lib/utils";
import { Menu, Search } from 'lucide-react';
import React, { useContext, useState } from "react";

type Props = {
  title: string;
}

export const Header: React.FC<Props> = ({
  title,
}) => {
  const [courses, setCourses] = useState([]);
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

  const handleBurger = () => toggleSidebar();

  return(
    <header className="lg:grid-container flex items-center pt-6 md:pt-11 lg:pt-[50px]">
        <button onClick={handleBurger} className="block lg:hidden">
          <Menu className="text-gray-100 h-8 w-8" />
        </button>

        <h4
          className={cn(
            'mx-auto text-center block w-full py-1 lg:col-start-2 lg:col-span-2 lg:text-start',
            isSidebarOpen && 'lg:col-start-4',
          )}
        >
          {title}
        </h4>

        {!!courses.length && title !== 'Homepage' && (
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
  );
}
