'use client';

import NotFoundPage from '@/app/not-found';
import { CourseBlock } from '@/components/courseBlock';
import { Header } from '@/components/header/header';
import { CousreSettigsModal } from '@/components/modalCart/CourseSettings';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { loadCourses, setTeachingCourses } from '@/redux/features/coursesSlice';
import { Book, EllipsisVertical, Pen, Plus, Settings } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface CoursePageProps {
  params: {
    courseId: string;
  };
}

export const CoursePage: React.FC<CoursePageProps> = ({ params }) => {
  const { courseId } = params;
  const { teachingCourses } = useAppSelector(state => state.courses);
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const course = teachingCourses.find(c => c.id.toString() === courseId);

  useEffect(() => {
    if (teachingCourses.length === 0) {
      const storedCourses = localStorage.getItem('teaching-courses');

      if (storedCourses && storedCourses !== 'undefined') {
        dispatch(setTeachingCourses(JSON.parse(storedCourses)));
      } else {
        dispatch(loadCourses('teaching'));
      }
    }
  }, [dispatch]);

  if (!course) {
    return <NotFoundPage title="Such course does not exist" />;
  }

  return (
    <div className="main-padding flex w-full flex-col">
      <Header title="Teaching" />

      <nav className="grid-container pt-8 lg:pt-[34px]">
        <ul className="col-span-full flex w-full items-center justify-between lg:col-start-2 lg:col-end-13">
          <li className="align-center flex items-center gap-4">
            <span className="border-main-text box-border h-7 border-b-2 border-primary-200">
              Event feed
            </span>
            <span className="main-text box-border h-7 text-gray-60">
              People
            </span>
          </li>
          <li>
            <button onClick={() => setIsModalOpen(true)}>
              <Settings size={32} />
            </button>
          </li>
        </ul>
      </nav>

      <div className="grid-container pt-6">
        <CourseBlock course={course} coursePage={true} />
      </div>

      <div className="grid-container pt-4">
        <div className="relative col-span-2 rounded-2xl bg-gray-0 p-[10px] lg:col-start-2">
          <p className="main-text pb-2">Course code</p>
          <h5>{course.id}</h5>
          <div className="absolute right-[10px] top-[10px]">
            <EllipsisVertical />
          </div>
        </div>
        <button className="col-span-2 flex items-center justify-center gap-1 rounded-2xl bg-gray-0 p-[10px]">
          <Plus size={32} />
          <p className="main-text">Create a task</p>
        </button>
      </div>

      <div className="grid-container pt-4">
        <div className="col-span-full flex justify-between rounded-2xl bg-gray-0 p-[15px] lg:col-start-2">
          <div className="flex items-center gap-2">
            <Book />
            <p className="main-text">Task Name</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="secondary-text text-gray-60">01.07.2024</p>
            <Pen />
          </div>
        </div>
      </div>

      {isModalOpen && <CousreSettigsModal course={course} closeModal={() => setIsModalOpen(false)}/>}
    </div>
  );
};

export default CoursePage;
