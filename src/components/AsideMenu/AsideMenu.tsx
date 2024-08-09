import Link from 'next/link';
import React, { FC, useState } from 'react';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

type Props = {
  isOpen?: boolean;
};

const navList = [
  { name: 'Homepage', icon: '/svg/home.svg', link: '/' },
  { name: 'Archived courses', icon: '/svg/archive.svg', link: '/archive' },
  { name: 'Settings', icon: '/svg/settings.svg', link: '/settings' },
  { name: 'Teaching', icon: '/svg/user-round.svg', link: '/teaching' },
  { name: 'Study', icon: '/svg/users-round.svg', link: '/study' },
];

export const AsideMenu: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const handleBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={classNames(
        'fixed z-50 h-full w-auto rounded-br-[24px] rounded-tr-[24px] bg-grey/0 py-10 pl-[42px] pr-[35px] shadow-xl',
        { 'w-[254px] md:w-[376px] lg:w-[328px]': isOpen },
      )}
    >
      <div className="relative mb-8 after:block after:h-8 after:w-full after:border-b after:border-grey/20 after:content-['']">
        <button
          onClick={handleBurger}
          className={classNames('flex w-full', { 'justify-center': !isOpen })}
        >
          <img className="" src="./svg/burger.svg" alt="menu" />
        </button>
      </div>

      <div>
        <ul className="flex flex-col gap-y-8">
          <li
            className={classNames('flex items-center gap-x-2', {
              'justify-center': !isOpen,
            })}
          >
            <img className="h-12 w-12" src="./avatar.svg" alt="avatar" />
            {isOpen && <h6>Ann Kovalenko</h6>}
          </li>
          {navList.map(item => (
            <li
              key={item.name}
              className={` ${pathname === item.link && 'bg-primary/100'} rounded-lg transition-all duration-300 hover:bg-primary/100`}
            >
              <Link
                className="box-border flex items-center gap-x-2 px-[10px] py-[5px]"
                href={item.link}
              >
                <img className="h-8 w-8" src={item.icon} alt="home" />
                {isOpen && <p>{item.name}</p>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
