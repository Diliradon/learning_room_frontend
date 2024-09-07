import React from 'react';
import { Button } from '../Button';
import { ModalCart } from './ModalCart';
import { cn } from '@/lib/utils';

type Props = {
  closeModal: () => void;
};

export const JoinTheCourseModal: React.FC<Props> = ({ closeModal }) => {
  return (
    <ModalCart
      title="Join the course"
      closeModal={closeModal}
      description="Enter the course code created by the teacher"
    >
      <label className="relative flex flex-col gap-2 text-start">
        <p className="main-text-medium">Course code</p>
        <input
          type="text"
          className={cn(
            'main-text focus:outline-primary/200 w-full rounded-[100px] border border-gray-10 px-[12px] py-2.5',
          )}
          placeholder="jd5z4k"
        />
        <small className="text-gray-60">
          The course code must consist of 6 numbers and letters without spaces
        </small>
      </label>
      <div className="flex flex-col-reverse gap-4 pt-6 md:gap-6 lg:flex-row lg:gap-4">
        <Button className="border-gray-500 border-[1px]" applyBackground={false} onClick={closeModal}>
          Cancel
        </Button>
        <Button>Join</Button>
      </div>
    </ModalCart>
  );
};
