'use client'

import { createContext, useState } from 'react';

const initial = {
  isSidebarOpen: false,
  toggleSidebar: () => {},
}
export const SidebarContext = createContext(initial);

type Props = {
  children: React.ReactNode;
}

export default function SidebarProvider({ children }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}
