import { Header } from '@/components/header/header';
import React from 'react';

interface CoursePageProps {
  params: {
    courseId: string;
  };
}

export const CoursePage: React.FC<CoursePageProps> = ({ params }) => {
  return (
    <div className="main-padding flex h-full w-full flex-col bg-gray-0 md:bg-transparent">
      <Header title="Teaching" />
      <div className="grid-container">
        <div className="flex col-span-full">
          
        </div>
      </div>


      {/* <div className="flex h-full flex-1 flex-col items-center md:h-auto md:justify-center">
        <div className="grid-container h-full w-full pb-[74px] pt-4 md:h-auto md:pb-20 md:pt-8"></div>
      </div> */}
    </div>
  );
};

export default CoursePage;
