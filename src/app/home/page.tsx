'use client';

import React, { useState } from 'react';
import { Button } from '@/components/Button';
import { Header } from '@/components/header/header';
import { ModalCart } from '@/components/modalCart/modalCart';
import { useRouter } from 'next/navigation';

export const Hero: React.FC = () => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  const handleJoinCourse = () => {
    router.push('/study');
  }
  const handleCreateCourse = () => {
    router.push('/teaching');
  }

  return (
    <div className="main-padding flex h-full w-full flex-col">
      <Header title='Homepage' />
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex w-full flex-1 flex-col items-center gap-10 pt-32">
          <img
            className="max-w-[148px] md:max-w-[165px] lg:max-w-[186px]"
            src="./mox.svg"
            alt="mox"
          />
          <h3 className="md:block">There are no courses</h3>
        </div>

        <div className="grid-container w-full pb-20 pt-8">
          <Button onClick={handleJoinCourse} className="col-span-full md:col-start-3 md:col-end-7 lg:col-start-4 lg:col-end-7">
            Join the course
          </Button>
          <Button
            className="border-gray-500 col-span-full border-[1px] md:col-start-3 md:col-end-7 lg:col-start-7 lg:col-end-10"
            applyBackground={false}
            onClick={handleCreateCourse}
          >
            Create a course
          </Button>
        </div>
      </div>

      {/* <ModalCart /> */}
    </div>
  );
};

export default Hero;
