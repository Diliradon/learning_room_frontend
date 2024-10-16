'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Header } from '@/components/header/header';
import { cn } from '@/lib/utils';
import { Button } from '@/components/Button';
import { useAppSelector } from '@/hooks/useAppSelector';
import { ActionButtons } from '../home/components/actionButtons';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { loadCourses, setTeachingCourses } from '@/redux/features/coursesSlice';
import { PlusActionButton } from '@/components/PlusActionButton';
import { CreateCourseModal } from '@/components/modalCart/CreateCourseModal';
import { JoinTheCourseModal } from '@/components/modalCart/JoinTheCourseModal';
import { CoursesList } from '@/components/courseList';

const inputFields = [
  { name: 'Name of the course', placeholder: 'Math' },
  { name: 'Classroom', placeholder: '001' },
];

export const Teaching: React.FC = () => {
  const [showJoinCourse, setShowJoinCourse] = useState(false);
  const [showCreateCourse, setShowCreateCourse] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const { teachingCourses: courses, loading } = useAppSelector(
    state => state.courses,
  );
  const dispatch = useAppDispatch();

  const handleCreateCourse = useCallback(() => {
    if (showActions) {
      setShowActions(false);
    }

    setShowCreateCourse(current => !current);
  }, [showActions]);

  const handleJoinCourse = useCallback(() => {
    if (showActions) {
      setShowActions(false);
    }

    setShowJoinCourse(current => !current);
  }, [showActions]);

  const handleShowActions = useCallback(() => {
    setShowActions(current => !current);
  }, []);

  useEffect(() => {
    const storedCourses = localStorage.getItem('teaching-courses');

    if (storedCourses && storedCourses !== 'undefined') {
      dispatch(setTeachingCourses(JSON.parse(storedCourses)));
    } else {
      dispatch(loadCourses('teaching'));
    }
  }, [dispatch]);

  return (
    <div className="main-padding flex w-full flex-col">
      <Header title="Teaching" />
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
        <CoursesList courses={courses} teaching={true} />
      )}

      <PlusActionButton
        showActions={showActions}
        handleShowActions={handleShowActions}
        handleJoinCourse={handleJoinCourse}
        handleCreateCourse={handleCreateCourse}
      />

      {showCreateCourse && (
        <CreateCourseModal closeModal={handleCreateCourse} />
      )}
      {showJoinCourse && <JoinTheCourseModal closeModal={handleJoinCourse} />}
    </div>
  );
};

export default Teaching;
