import { useAppDispatch } from '@/hooks/useAppDispatch';
import React, { useEffect, useRef, useState } from 'react';
import { ModalCart } from './modalCart';
import { cn } from '@/lib/utils';
import { CourseType } from '@/types/courseTypes';
import { Pen } from 'lucide-react';
import { Button } from '../Button';
import { editCourse } from '@/lib/api/coursesApi';

type Props = {
  closeModal: () => void;
  course: CourseType;
};

const colors = {
  'secondary-100': '#A6DCEF',
  'secondary-200': '#77D99F',
  'secondary-300': '#FDB7AA',
  'secondary-400': '#D2ADE6',
  'primary-100': '#F9E783',
} as const;

type ColorKeys = keyof typeof colors;

const inputFields = [
  { name: 'Name of the course', placeholder: 'name', default: 'Math' },
  { name: 'Classroom', placeholder: 'number_of_classroom', default: '001' },
];

export const CousreSettigsModal: React.FC<Props> = ({ closeModal, course }) => {
  const dispatch = useAppDispatch();
  const [newColor, setNewColor] = useState<ColorKeys>(course.color);
  const [newName, setNewName] = useState(course.name);
  const [newClassroom, setNewClassroom] = useState(course.number_of_classroom);
  const [newDescription, setNewDescription] = useState(course.description);
  const [nameIsEditing, setNameIsEditing] = useState(false);
  const [classroomIsEditing, setClassroomIsEditing] = useState(false);
  const [descriptionIsEditing, setDescriptionIsEditing] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const classroomInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nameIsEditing && nameInputRef.current) {
      nameInputRef.current.focus();
    }
    if (classroomIsEditing && classroomInputRef.current) {
      classroomInputRef.current.focus();
    }
    if (descriptionIsEditing && descriptionInputRef.current) {
      descriptionInputRef.current.focus();
    }
  }, [nameIsEditing, classroomIsEditing, descriptionIsEditing]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>, setFunc: (value: string) => void) => {
    setFunc(event.target.value);
  };

  // const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const newCourseInfo = {
  //     ...course,
  //     name: newName,
  //     description: newDescription,
  //     number_of_classroom: newClassroom,
  //     color: newColor,
  //   };

  //   editCourse(+course.id, newCourseInfo).then((res) => {
  //     console.log('Updated course:', res);
  //   }).catch((e) => {
  //     console.log('Updated error:', e);
  //   })




  //   // dispatch(createNewCourse(newCourseInfo))
  //   //   .unwrap()
  //   //   .then(() => {
  //   //     setSuccessMessage('The course was successfully created!');
  //   //     setTimeout(() => {
  //   //       closeModal();
  //   //     }, 2000);
  //   //   })
  //   //   .catch(() => {
  //   //     setError('There was an error while creating the course. Please, try again.');
  //   //   });
  // };

  return (
    <ModalCart title="Course settings" closeModal={closeModal}>
      <form
        // onSubmit={event => handleOnSubmit(event)}
        className="flex h-full flex-col justify-between pt-10 md:mx-auto md:h-auto md:w-2/3 md:justify-normal md:pt-6"
      >
        <div className="flex flex-col items-center gap-4 rounded-3xl bg-gray-10 py-[15px]">
          <h5>Choose a cover</h5>
          <div className="flex gap-2">
            {Object.keys(colors).map(color => (
              <div
                key={color}
                className={cn('h-10 w-10 rounded-full', {
                  'border-4 border-gray-100': newColor === color,
                })}
                style={{
                  backgroundColor: colors[color as keyof typeof colors],
                }}
                onClick={() => setNewColor(color as ColorKeys)}
              />
            ))}
          </div>
        </div>
        <div className="relative flex flex-col gap-4 pt-4">
          <label className="flex flex-col gap-2 text-start">
            <p className="main-text-medium">
              Name of the course {nameIsEditing ? 'true' : 'false'}
            </p>
            {nameIsEditing ? (
              <input
                ref={nameInputRef}
                type="text"
                className={cn(
                  'main-text focus:outline-primary/200 w-full rounded-3xl border border-gray-10 px-[12px] py-2.5',
                )}
                placeholder={course.name || 'Math'}
                name="name"
                value={newName}
                onChange={event => handleInput(event, setNewName)}
                onBlur={() => setNameIsEditing(false)}
              />
            ) : (
              <span className="main-text rounded-3xl border border-gray-10 px-[12px] py-2.5 text-gray-60">
                {newName}
              </span>
            )}
          </label>
          <button
            type="button"
            onClick={() => setNameIsEditing(!nameIsEditing)}
            className="absolute right-4 top-[58px]"
          >
            <Pen />
          </button>

          <label className="relative flex flex-col gap-2 text-start">
            <p className="main-text-medium">Classroom</p>
            {classroomIsEditing ? (
              <input
                ref={classroomInputRef}
                type="text"
                className={cn(
                  'main-text focus:outline-primary/200 w-full rounded-3xl border border-gray-10 px-[12px] py-2.5',
                )}
                placeholder={course.number_of_classroom || '001'}
                name="classroom"
                value={newClassroom}
                onChange={event => handleInput(event, setNewClassroom)}
                onBlur={() => setClassroomIsEditing(false)}
              />
            ) : (
              <span className="main-text rounded-3xl border border-gray-10 px-[12px] py-2.5 text-gray-60">
                {newClassroom || '001'}
              </span>
            )}
          </label>
          <button
            type="button"
            onClick={() => setClassroomIsEditing(!classroomIsEditing)}
            className="absolute right-4 top-[154px]"
          >
            <Pen />
          </button>

          <label className="relative flex flex-col gap-2 text-start">
            <p className="main-text-medium">Description</p>
            {descriptionIsEditing ? (
              <input
                ref={descriptionInputRef}
                type="text"
                className={cn(
                  'main-text focus:outline-primary/200 w-full rounded-3xl border border-gray-10 px-[12px] py-2.5',
                )}
                placeholder="First semester"
                name="description"
                value={newDescription}
                onChange={event => handleInput(event, setNewDescription)}
                onBlur={() => setDescriptionIsEditing(false)}
              />
            ) : (
              <span className="main-text rounded-3xl border border-gray-10 px-[12px] py-2.5 text-gray-60">
                {newDescription}
              </span>
            )}
          </label>
          <button
            type="button"
            onClick={() => setDescriptionIsEditing(!descriptionIsEditing)}
            className="absolute right-4 top-[248px]"
          >
            <Pen />
          </button>

          {/* <small className={textStyle}>
            {error ? error : successMessage}
          </small> */}
        </div>
        <div className="flex flex-col-reverse gap-4 pt-12 md:gap-6 lg:flex-row lg:gap-4">
          <Button
            className="border-gray-500 border-[1px]"
            applyBackground={false}
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button>Update</Button>
        </div>
      </form>
    </ModalCart>
  );
};
