'use client';

import React from 'react';
import { AsideMenu } from '../../components/AsideMenu/AsideMenu';
import { Button } from '@/components/Button';

export const Hero: React.FC = () => {
  return (
    <div className="bg-grey/10 flex h-screen">
      <AsideMenu />

      <div
      className="h-full w-full pl-[141px] pt-[46px]"
      >
        <header className="flex items-center gap-x-24 pl-6 pr-36">
          <h4>Homepage</h4>

          <div className="relative w-full font-ubuntu">
            <input
              placeholder="Search in courses"
              type="text"
              className="w-full rounded-full px-12 py-3"
            />
            <img
              src="./svg/search.svg"
              alt=""
              className="absolute left-4 top-1/2 -translate-y-1/2 transform"
            />
          </div>
        </header>

        <div className="flex h-full flex-col items-center justify-center">
          <img className="w-[286px]" src="./mox.svg" alt="mox" />

          <p className="text-gray-700 mt-10 font-ubuntuBold text-4xl">
            There are no courses
          </p>

          <div className="text-gray-500 mt-28 flex gap-4 font-ubuntuMedium text-base">
            <Button className="border-gray-500 rounded-full border-[1px] hover:opacity-80" applyBackground={true}>Create a course</Button>
            <Button>Join the course</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


