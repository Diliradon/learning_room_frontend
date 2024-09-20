'use client';

import React, { useState } from 'react';
import { Header } from '@/app/home/components/header/header';
import { cn } from '@/lib/utils';
import { Button } from '@/components/Button';

const inputFields = [
  { name:'Name of the course', placeholder: 'Math'},
  { name:'Classroom', placeholder: '001'},
]

export const Teaching: React.FC = () => {
  return (
    <div className="main-padding flex h-full w-full flex-col bg-gray-0 md:bg-transparent">
      <Header title="Teaching" />
      <div className="flex h-full flex-1 flex-col items-center md:h-auto md:justify-center">
        <div className="grid-container h-full w-full pb-[74px] pt-4 md:h-auto md:pb-20 md:pt-8">
        </div>
      </div>
    </div>
  );
};

export default Teaching;
