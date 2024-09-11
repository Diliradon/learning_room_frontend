import React, { useEffect, useState } from 'react';
import { Button } from '../Button';
import { ModalCart } from './ModalCart';
import { cn } from '@/lib/utils';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { joinCourseAction } from '@/redux/features/coursesSlice';

type Props = {
  closeModal: () => void;
};

export const JoinTheCourseModal: React.FC<Props> = ({ closeModal }) => {
  const dispatch = useAppDispatch();
  const [courseKey, setCourseKey] = useState('');

  const handleOnJoin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(joinCourseAction(courseKey));
  };

  const handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCourseKey(event.target.value);
  };

  return (
    <ModalCart
      title="Join the course"
      closeModal={closeModal}
      description="Enter the course code created by the teacher"
    >
      <form onSubmit={event => handleOnJoin(event)} className="flex h-full flex-col justify-between pt-10 md:mx-auto md:h-auto md:w-2/3 md:justify-normal md:pt-6">
        <label className="relative flex flex-col gap-2 text-start">
          <p className="main-text-medium">Course code</p>
          <input
            type="text"
            className={cn(
              'main-text focus:outline-primary/200 w-full rounded-[100px] border border-gray-10 px-[12px] py-2.5',
            )}
            value={courseKey}
            placeholder="jd5z4k"
            onChange={event => handleOnInputChange(event)}
          />
          <small className="text-gray-60">
            The course code must consist of 6 numbers and letters without spaces
          </small>
        </label>
        <div className="flex flex-col-reverse gap-4 pt-6 md:gap-6 lg:flex-row lg:gap-4">
          <Button
            className="border-gray-500 border-[1px]"
            applyBackground={false}
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button type='submit'>Join</Button>
        </div>
      </form>
    </ModalCart>
  );
};
