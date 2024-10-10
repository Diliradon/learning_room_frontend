import { cn } from '@/lib/utils';
import { CourseType } from '@/redux/features/coursesSlice';
import { redirect, usePathname, useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  course: CourseType;
  index?: number;
  teaching?: boolean;
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
  index = Math.floor(Math.random() * 6),
  teaching = false,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSelectCourse = () => {
    router.push(`${pathname}/${course.id}`);
  }
  
  return (
    <div
      className={cn(
        'cursor-pointer col-span-full flex h-[136px] flex-col justify-between rounded-3xl border-0 p-[15px] lg:col-span-2 lg:h-[187px]',
        index % 5 === 0 && 'lg:col-start-2',
      )}
      onClick={handleSelectCourse}
      style={{ backgroundColor: colors[index % 6] }}
      key={course.id}
    >
      <div className="flex flex-col">
        <div className="relative flex justify-between">
          <h5>{course.name}</h5>
          <p className="absolute w-1/3 right-0 text-right">{course.number_of_classroom}</p>
        </div>
        <p>{course.description}</p>
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
