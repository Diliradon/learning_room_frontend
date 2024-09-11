import React, { useState } from 'react';
import { Button } from '../Button';
import { ModalCart } from './ModalCart';
import { cn } from '@/lib/utils';
import { useAppDispatch } from '@/hooks/useAppDispatch';

const inputFields = [
  { name: 'Name of the course', placeholder: 'Math' },
  { name: 'Classroom', placeholder: '001' },
];

type Props = {
  closeModal: () => void;
};

export const CreateCourseModal: React.FC<Props> = ({ closeModal }) => {
  const dispatch = useAppDispatch();
  const [courseKey, setCourseKey] = useState('');

  const handleOnCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // dispatch(joinCourseAction(courseKey));
  };

  const handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCourseKey(event.target.value);
  };

  return (
    <ModalCart title="Create a course" closeModal={closeModal}>
      <form
        onSubmit={event => handleOnCreate(event)}
        className="flex h-full flex-col justify-between pt-10 md:mx-auto md:h-auto md:w-2/3 md:justify-normal md:pt-6"
      >
        <div className="flex flex-col gap-6">
          {inputFields.map(item => (
            <label
              key={item.name}
              className="relative flex flex-col gap-2 text-start"
            >
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
                'main-text focus:outline-primary/200 h-[96px] w-full rounded-[16px] border border-gray-10 px-[12px] py-2.5',
              )}
              placeholder="First semester"
            />
          </label>
        </div>
        <div className="flex flex-col-reverse gap-4 pt-6 md:gap-6 lg:flex-row lg:gap-4">
          <Button
            className="border-gray-500 border-[1px]"
            applyBackground={false}
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button>Create</Button>
        </div>
      </form>
    </ModalCart>
  );
};
