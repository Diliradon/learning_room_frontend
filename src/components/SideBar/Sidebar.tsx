'use client';

import Link from 'next/link';
import React, { useContext } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/utils';
import {
  Home,
  Archive,
  Settings,
  UserRound,
  UsersRound,
  Menu,
  LucideProps,
} from 'lucide-react';
import { SidebarContext } from '@/contexts/SideBarContext';
import { useAppSelector } from '@/hooks/useAppSelector';

type MenuItem = {
  name: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  link: string;
};

const menuItems: MenuItem[] = [
  { name: 'Homepage', icon: Home, link: '/' },
  { name: 'Archived courses', icon: Archive, link: '/archive' },
  { name: 'Settings', icon: Settings, link: '/settings' },
  { name: 'Teaching', icon: UserRound, link: '/teaching' },
  { name: 'Study', icon: UsersRound, link: '/study' },
];

const shortString = (string: string) =>
  string.length > 15 ? string.split('').splice(0, 15).join('') + '...' : string;

const SideBar: React.FC = () => {
  const pathname = usePathname();
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);
  const { userInfo } = useAppSelector(state => state.auth);
  const pictureUrl = '/avatar.svg';

  const firstName = userInfo?.firstName || '';
  const lastName = userInfo?.lastName || '';

  const handleBurger = () => toggleSidebar();

  return (
    <aside
      className={cn(
        'fixed z-50 h-full rounded-br-[24px] rounded-tr-[24px] bg-gray-0 p-6 shadow-xl md:px-8 md:py-10 lg:p-10',
        isSidebarOpen
          ? 'w-[254px] md:w-[376px] lg:w-[328px]'
          : 'hidden w-[125px] lg:block lg:pr-[33px]',
      )}
    >
      <div className="relative pb-8 after:mt-8 after:block after:h-[1px] after:bg-gray-20 after:content-['']">
        <button
          onClick={handleBurger}
          className={cn('flex w-full', !isSidebarOpen && 'justify-center')}
        >
          <Menu className="h-8 w-8 text-gray-100" />
        </button>
      </div>
      <div>
        <ul className="flex flex-col gap-y-8">
          <li className="flex items-center gap-x-2">
            <img
              className="align-left h-[52px] w-[52px]"
              src={pictureUrl}
              alt="avatar"
            />
            {isSidebarOpen && (
              <h6>{`${shortString(firstName)} ${shortString(lastName)}`}</h6>
            )}
          </li>
          {menuItems.map(item => (
            <li
              key={item.name}
              className={cn('rounded-lg hover:bg-primary-100', {
                'bg-primary-100': item.link === '/' && pathname === '/' || (pathname.startsWith(item.link) && item.name !== 'Homepage'),
              })}
            >
              <Link
                className="box-border flex items-center gap-x-2 px-[10px] py-[5px]"
                href={item.link}
              >
                <item.icon className="h-8 w-8" />
                {isSidebarOpen && <p>{item.name}</p>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
