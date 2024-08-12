import Link from 'next/link';
import React, { useContext } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
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
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

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

const SideBar: React.FC = () => {
  const pathname = usePathname();
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

  const handleBurger = () => toggleSidebar();

  return (
    <aside
      className={cn(
        'bg-gray-0 fixed z-50 h-full rounded-br-[24px] rounded-tr-[24px] p-6 shadow-xl md:px-8 md:py-10 lg:p-10',
        isSidebarOpen
          ? 'w-[254px] md:w-[376px] lg:w-[328px]'
          : 'hidden w-[125px] lg:block lg:pr-[33px]',
      )}
    >
      <div className="after:bg-gray-20 relative pb-8 after:mt-8 after:block after:h-[1px] after:content-['']">
        <button
          onClick={handleBurger}
          className={cn('flex w-full', !isSidebarOpen && 'justify-center')}
        >
          <Menu className="text-gray-100 h-8 w-8" />
        </button>
      </div>
      <div>
        <ul className="flex flex-col gap-y-8">
          <li
            className={cn(
              'flex items-center gap-x-2',
              !isSidebarOpen && 'justify-center',
            )}
          >
            <img className="h-12 w-12" src="./avatar.svg" alt="avatar" />
            {isSidebarOpen && <h6>Ann Kovalenko</h6>}
          </li>
          {menuItems.map(item => (
            <li
              key={item.name}
              className={` ${pathname === item.link && 'bg-primary-100'} hover:bg-primary-100 rounded-lg`}
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
