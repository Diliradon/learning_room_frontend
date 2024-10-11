'use client'

import { cn } from '@/lib/utils';
import { CourseType } from '@/types/courseTypes';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  course: CourseType;
  index?: number | null;
  teaching?: boolean;
  clasnames?: string;
  coursePage?: boolean;
};

const colors = [
  '#A6DCEF',
  '#77D99F',
  '#FDB7AA',
  '#D2ADE6',
  '#FC846A',
  '#F9E783',
];

export const CourseBlock: React.FC<Props> = ({
  course,
  index = null,
  teaching = false,
  clasnames = '',
  coursePage = false,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const ifIndexPassed = index !== null;
  const color = ifIndexPassed ? colors[index] : colors[Math.floor(Math.random() * 6)];

  const handleSelectCourse = () => {
    router.push(`${pathname}/${course.id}`);
  }

  return (
    <div
      className={cn(
        'cursor-pointer col-span-full flex h-[136px] flex-col justify-between rounded-3xl border-0 p-[15px] lg:h-[187px]',
        (ifIndexPassed && index % 5 === 0) || !ifIndexPassed ? 'lg:col-start-2' : '',
        !coursePage && 'lg:col-span-2',
        clasnames,
      )}
      onClick={handleSelectCourse}
      style={{ backgroundColor: color }}
      key={course.id}
    >
      <div className="flex flex-col">
        <div className="relative flex justify-between">
          <h5>{course.name.charAt(0).toUpperCase() + course.name.slice(1)}</h5>
          <p className="absolute w-1/3 right-0 text-right">{course.number_of_classroom}</p>
        </div>
        <p className='pt-1 lg:pt-2'>{course.description}</p>
      </div>

      <div className="flex flex-col">
        {course.teachers.map((teacher, index) => (
          <p
            className="secondary-text"
            key={index}
          >{`${teacher.first_name} ${teacher.last_name}`}</p>
        ))}
      </div>
    </div>
  );
};
