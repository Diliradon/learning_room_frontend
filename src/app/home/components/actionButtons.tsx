import { Button } from '@/components/Button';
import { useState } from 'react';

type Props = {
  onJoinCourse: () => void;
  onCreateCourse: () => void;
}

export const ActionButtons: React.FC<Props> = ({ onJoinCourse, onCreateCourse }) => {

  return (
    <div className="grid-container w-full pb-20 pt-8 lg:pt-[104px]">
      <Button
        onClick={onJoinCourse}
        className="col-span-full md:col-start-3 md:col-end-7 lg:col-start-4 lg:col-end-7"
      >
        Join the course
      </Button>
      <Button
        className="border-gray-500 col-span-full border-[1px] md:col-start-3 md:col-end-7 lg:col-start-7 lg:col-end-10"
        applyBackground={false}
        onClick={onCreateCourse}
      >
        Create a course
      </Button>
    </div>
  );
};
