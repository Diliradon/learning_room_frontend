import Link from 'next/link';
import React, { FC, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Home, Archive, Settings, UserRound, UsersRound } from 'lucide-react';

type Props = {
  isOpen?: boolean;
};

const navList = [
  { name: 'Homepage', icon: Home, link: '/' },
  { name: 'Archived courses', icon: Archive, link: '/archive' },
  { name: 'Settings', icon: Settings, link: '/settings' },
  { name: 'Teaching', icon: UserRound, link: '/teaching' },
  { name: 'Study', icon: UsersRound, link: '/study' },
];

export const AsideMenu: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const handleBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={cn(
        'fixed z-50 h-full w-auto rounded-br-[24px] rounded-tr-[24px] bg-gray-0 py-10 pl-[42px] pr-[35px] shadow-xl',
        isOpen && 'w-[254px] md:w-[376px] lg:w-[328px]',
      )}
    >
      <div className="relative mb-8 after:block after:h-8 after:w-full after:border-b after:border-gray-20 after:content-['']">
        <button
          onClick={handleBurger}
          className={cn('flex w-full', !isOpen && 'justify-center')}
        >
          <img className="" src="./svg/burger.svg" alt="menu" />
        </button>
      </div>

      <div>
        <ul className="flex flex-col gap-y-8">
          <li
            className={cn('flex items-center gap-x-2',
              !isOpen && 'justify-center',
            )}
          >
            <img className="h-12 w-12" src="./avatar.svg" alt="avatar" />
            {isOpen && <h6>Ann Kovalenko</h6>}
          </li>
          {navList.map(item => (
            <li
              key={item.name}
              className={` ${pathname === item.link && 'bg-primary-100'} rounded-lg transition-all duration-300 hover:bg-primary-100`}
            >
              <Link
                className="box-border flex items-center gap-x-2 px-[10px] py-[5px]"
                href={item.link}
              >
                <item.icon className="h-8 w-8" />
                {isOpen && <p>{item.name}</p>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
