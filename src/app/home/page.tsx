'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header/header';
import { CreateCourseModal } from '@/components/modalCart/CreateCourseModal';
import { JoinTheCourseModal } from '@/components/modalCart/JoinTheCourseModal';
import { ActionButtons } from './components/actionButtons';

export const Hero: React.FC = () => {
  const [showJoinCourse, setShowJoinCourse] = useState(false);
  const [showCreateCourse, setShowCreateCourse] = useState(false);

  const modalOpen = showCreateCourse || showJoinCourse;

  const handleJoinCourse = () => {
    setShowJoinCourse(current => !current);
  };
  const handleCreateCourse = () => {
    setShowCreateCourse(current => !current);
  };

  // const title = !modalOpen ? 'Homepage' : (showJoinCourse ? 'Join the course' : 'Create course');

  return (
    <div className="main-padding flex h-full w-full flex-col">
      <Header title="Homepage" />
      {/* {!modalOpen && (<div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex w-full flex-1 flex-col items-center gap-10 pt-32">
          <img
            className="max-w-[148px] md:max-w-[165px] lg:max-w-[186px]"
            src="./mox.svg"
            alt="mox"
          />
          <h3 className="text-center md:block">There are no courses</h3>
        </div>

        <ActionButtons
          onJoinCourse={handleJoinCourse}
          onCreateCourse={handleCreateCourse}
        />
      </div>)} */}

      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex w-full flex-1 flex-col items-center gap-10 pt-32 lg:flex-none lg:pt-0">
          <img
            className="max-w-[148px] md:max-w-[165px] lg:max-w-[186px]"
            src="./mox.svg"
            alt="mox"
          />
          <h3 className="text-center md:block">There are no courses</h3>
        </div>

        <ActionButtons
          onJoinCourse={handleJoinCourse}
          onCreateCourse={handleCreateCourse}
        />
      </div>

      {showCreateCourse && <CreateCourseModal closeModal={handleCreateCourse} />}
      {showJoinCourse && <JoinTheCourseModal closeModal={handleJoinCourse} />}
    </div>
  );
};

export default Hero;
