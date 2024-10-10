import { CourseType } from '@/redux/features/coursesSlice';
import React from 'react';
import { CourseBlock } from '../../../components/courseBlock';

type Props = {
  courses: CourseType[];
  teaching?: boolean;
};

export const CoursesList: React.FC<Props> = ({ courses, teaching }) => {

  return (
    <div className="grid-container w-full py-6">
      {courses.map((course, index) => (
        <CourseBlock  key={course.id} course={course} index={index} teaching={teaching} />
      ))}
    </div>
  );
};
