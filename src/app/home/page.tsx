'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Header } from '@/components/header/header';
import { CreateCourseModal } from '@/components/modalCart/CreateCourseModal';
import { JoinTheCourseModal } from '@/components/modalCart/JoinTheCourseModal';
import { ActionButtons } from './components/actionButtons';
import { loadCourses } from '@/redux/features/coursesSlice';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { CoursesList } from './components/listOfCourses';
import { BookOpen, BookPlus, Plus, X } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export const Hero: React.FC = () => {
  const [showJoinCourse, setShowJoinCourse] = useState(false);
  const [showCreateCourse, setShowCreateCourse] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const { studyingCourses: courses, loading } = useAppSelector(state => state.courses);
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    dispatch(loadCourses());
  }, []);

  const visibleCourses = useMemo(() => {
    if (query && query.length > 0) {
      return courses.filter(course => course.name.toLowerCase().includes(query.toLowerCase()));
    }

    return courses;
  }, [query, courses]);

  const handleShowActions = useCallback(() => {
    setShowActions(current => !current);
  }, []);

  const handleJoinCourse = useCallback(() => {
    if (showActions) {
      setShowActions(false);
    }

    setShowJoinCourse(current => !current);
  }, [showActions]);

  const handleCreateCourse = useCallback(() => {
    if (showActions) {
      setShowActions(false);
    }

    setShowCreateCourse(current => !current);
  }, [showActions]);

  return (
    <div className="main-padding flex w-full flex-col">
      <Header title="Homepage" />

      {loading ? (
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <p className="loading-text text-gray-800 font-ubuntuBold text-3xl">
              Loading...
            </p>
            <p className="loader relative w-full"></p>
          </div>
        </div>
      ) : courses.length === 0 ? (
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
      ) : (
        <CoursesList courses={visibleCourses} />
      )}

      <div className="absolute bottom-10 right-10 flex flex-col items-end gap-7">
        {showActions && (
          <div className="fixed bottom-0 right-0 flex w-full flex-col items-start justify-center gap-4 rounded-t-3xl bg-gray-0 px-8 py-6 lg:static lg:bottom-10 lg:right-10 lg:w-72 lg:rounded-3xl lg:p-[20px]">
            <button
              onClick={handleShowActions}
              className="fixed bottom-14 right-8 lg:hidden"
            >
              <X />
            </button>
            <button
              onClick={handleJoinCourse}
                className="main-text flex gap-2 w-3/4 relative lg:w-full after:content-[''] after:block after:absolute after:left-0 after:top-7 after:h-[2px] after:w-0 after:bg-primary-100 after:transition-all after:duration-300 after:origin-left hover:after:w-full"
            >
              <BookOpen />
              Join the course
            </button>
            <button
              onClick={handleCreateCourse}
              className="main-text flex gap-2 w-3/4 relative lg:w-full after:content-[''] after:block after:absolute after:left-0 after:top-7 after:h-[2px] after:w-0 after:bg-primary-100 after:transition-all after:duration-300 after:origin-left hover:after:w-full"
            >
              <BookPlus />
              Create a course
            </button>
          </div>
        )}

        <button
          onClick={handleShowActions}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-0"
        >
          <Plus />
        </button>
      </div>

      {showCreateCourse && (
        <CreateCourseModal closeModal={handleCreateCourse} />
      )}
      {showJoinCourse && <JoinTheCourseModal closeModal={handleJoinCourse} />}
    </div>
  );
};

export default Hero;
