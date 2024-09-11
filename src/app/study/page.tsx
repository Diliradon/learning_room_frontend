'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header/header';
import { cn } from '@/lib/utils';
import { Button } from '@/components/Button';

export const Study: React.FC = () => {
  console.log('I render')
  return (
    <div className="main-padding flex h-full w-full flex-col bg-gray-0 md:bg-transparent">
      <Header title="Join the course" />
      <div className="flex flex-1 flex-col items-center h-full md:h-auto md:justify-center">
        <div className="grid-container h-full w-full pt-4 pb-[74px] md:pb-20 md:pt-8 md:h-auto">
          <div className="col-span-full flex flex-col md:py-[60px] md:rounded-3xl md:bg-gray-0 md:shadow-sm md:col-start-2 md:col-span-6 lg:col-start-4">
            <div className="flex flex-col items-center gap-2">
              <h5 className="hidden text-gray-100 md:block">Join the course</h5>
              <p className="main-text text-gray-80 text-center">
                Enter the course code created by the teacher
              </p>
            </div>
            <form className='flex flex-col justify-between h-full pt-6 md:w-2/3 md:mx-auto md:h-auto md:justify-normal'>
              <label className='flex flex-col gap-2 text-start relative'>
                <p className="main-text-medium">Course code</p>
                <input
                  type="text"
                  className={cn(
                    'main-text focus:outline-primary/200 w-full rounded-[100px] border border-gray-10 px-[12px] py-2.5',
                  )}
                />
                <small className="text-gray-60">The course code must consist of 6 numbers and letters without spaces</small>
              </label>

              <div className="flex flex-col gap-4 pt-6 md:flex-col md:gap-6 lg:flex-row lg:gap-4">
                <Button className='border-gray-500 border-[1px]' applyBackground={false}>Cancel</Button>
                <Button className=''>Join</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Study;
