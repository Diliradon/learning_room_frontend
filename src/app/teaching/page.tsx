'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header/header';
import { cn } from '@/lib/utils';
import { Button } from '@/components/Button';

const inputFields = [
  { name:'Name of the course', placeholder: 'Math'},
  { name:'Classroom', placeholder: '001'},
]

export const Teaching: React.FC = () => {
  return (
    <div className="main-padding flex h-full w-full flex-col bg-gray-0 md:bg-transparent">
      <Header title="Create a course" />
      <div className="flex h-full flex-1 flex-col items-center md:h-auto md:justify-center">
        <div className="grid-container h-full w-full pb-[74px] pt-4 md:h-auto md:pb-20 md:pt-8">
          <div className="col-span-full flex flex-col md:col-span-6 md:col-start-2 md:rounded-3xl md:bg-gray-0 md:py-[60px] md:shadow-sm lg:col-start-4">
            <div className="flex flex-col items-center gap-2">
              <h5 className="hidden text-gray-100 md:block">Create a course</h5>
            </div>

            <form className="flex h-full flex-col justify-between gap-6 pt-6 md:mx-auto md:h-auto md:w-2/3 md:justify-normal">
              <div className="flex flex-col gap-6">
                {inputFields.map(item => (
                  <label className="relative flex flex-col gap-2 text-start">
                  <p className="main-text-medium">{item.name}</p>
                  <input
                    type="text"
                    className={cn(
                      'main-text focus:outline-primary/200 w-full rounded-[100px] border border-gray-10 px-[12px] py-2.5',
                    )}
                    placeholder={item.placeholder}
                  />
                </label>
                ))}
                <label className="relative flex flex-col gap-2 text-start">
                  <p className="main-text-medium">Description</p>
                  <textarea
                    className={cn(
                      'main-text h-[96px] focus:outline-primary/200 w-full rounded-[16px] border border-gray-10 px-[12px] py-2.5',
                    )}
                    placeholder="First semester"
                  />
                </label>
              </div>

              <div className="flex flex-col gap-4 md:flex-col md:gap-6 lg:flex-row lg:gap-4">
                <Button
                  className="border-gray-500 border-[1px]"
                  applyBackground={false}
                >
                  Cancel
                </Button>
                <Button className="">Create</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teaching;
