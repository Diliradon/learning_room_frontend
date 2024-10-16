'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Header } from '@/components/header/header';
import { CreateCourseModal } from '@/components/modalCart/CreateCourseModal';
import { JoinTheCourseModal } from '@/components/modalCart/JoinTheCourseModal';
import { ActionButtons } from './components/actionButtons';
import { loadCourses, setStudyingCourses } from '@/redux/features/coursesSlice';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useSearchParams } from 'next/navigation';
import { PlusActionButton } from '@/components/PlusActionButton';
import { CoursesList } from '@/components/courseList';

export const Hero: React.FC = () => {
  const [showJoinCourse, setShowJoinCourse] = useState(false);
  const [showCreateCourse, setShowCreateCourse] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const { studyingCourses: courses, loading } = useAppSelector(
    state => state.courses,
  );
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    const storedCourses = localStorage.getItem('studying-courses');

    if (storedCourses && storedCourses !== 'undefined') {
      dispatch(setStudyingCourses(JSON.parse(storedCourses)));
    } else {
      dispatch(loadCourses('studying'));
    }
  }, [dispatch]);

  const visibleCourses = useMemo(() => {
    if (query && query.length > 0) {
      return courses.filter(course =>
        course.name.toLowerCase().includes(query.toLowerCase()),
      );
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
      <Header title="Homepage" searchBar={true} />

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

export default Hero;
