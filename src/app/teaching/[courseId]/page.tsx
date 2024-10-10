import { CourseBlock } from '@/components/courseBlock';
import { Header } from '@/components/header/header';
import { Settings } from 'lucide-react';
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
      <div className="grid-container pt-8">
        <nav className="col-span-full flex lg:col-start-2 lg:col-end-12">
          <ul className="flex w-full items-center justify-between">
            <li className="align-center flex items-center gap-4">
              <span className="h-7 box-border border-b-2 border-primary-200 border-main-text">Event feed</span>
              <span className="h-7 text-gray-60 box-border main-text">People</span>
            </li>
            <li>
              <Settings size={32} />
            </li>
          </ul>
        </nav>

        <div className="pt-6">
          {/* <CourseBlock course={} /> */}
        </div>

      </div>
    </div>
  );
};

export default CoursePage;
