'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header/header';
import { cn } from '@/lib/utils/utils';
import { Button } from '@/components/Button';

export const Study: React.FC = () => {
  console.log('I render')
  return (
    <div className="main-padding flex h-full w-full flex-col bg-gray-0 md:bg-transparent">
      <Header title="Studing" />
      <div className="flex flex-1 flex-col items-center h-full md:h-auto md:justify-center">
        <div className="grid-container h-full w-full pt-4 pb-[74px] md:pb-20 md:pt-8 md:h-auto">
        </div>
      </div>
    </div>
  );
};

export default Study;
