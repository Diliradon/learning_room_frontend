import { cn } from '@/lib/utils';
import { CourseType } from '@/redux/features/coursesSlice';
import React from 'react';

type Props = {
  courses: CourseType[];
};

const colors = ['#A6DCEF', '#77D99F', '#FDB7AA', '#D2ADE6', '#FC846A', '#F9E783' ];

export const CoursesList: React.FC<Props> = ({ courses }) => {

  return (
    <div className="grid-container w-full py-6">
      {courses.map((course, index) => (
        <div
          className={cn(
            'flex flex-col justify-between col-span-full h-[136px] lg:col-span-2 lg:h-[187px] rounded-3xl border-0 p-[15px]',
            index % 5 === 0 && 'lg:col-start-2',
          )}
          style={{ backgroundColor: colors[index % 6] }}
          key={course.id}
        >
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h5>{course.name}</h5>
              <p>{course.number_of_classroom}</p>
            </div>
            <p>{course.description}</p>
          </div>

          <div className="flex flex-col">
            {course.teachers.map((teacher, index)=> (
              <p className='secondary-text' key={index}>{`${teacher.first_name} ${teacher.last_name}`}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
