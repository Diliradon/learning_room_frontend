import { BookOpen, BookPlus, Plus, X } from 'lucide-react';
import React from 'react';

type Props = {
  showActions: boolean;
  handleShowActions: () => void;
  handleJoinCourse: () => void;
  handleCreateCourse: () => void;
};

export const PlusActionButton: React.FC<Props> = ({
  showActions,
  handleShowActions,
  handleJoinCourse,
  handleCreateCourse,
}) => {
  return (
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
            className="main-text relative flex w-3/4 gap-2 after:absolute after:left-0 after:top-7 after:block after:h-[2px] after:w-0 after:origin-left after:bg-primary-100 after:transition-all after:duration-300 after:content-[''] hover:after:w-full lg:w-full"
          >
            <BookOpen />
            Join the course
          </button>
          <button
            onClick={handleCreateCourse}
            className="main-text relative flex w-3/4 gap-2 after:absolute after:left-0 after:top-7 after:block after:h-[2px] after:w-0 after:origin-left after:bg-primary-100 after:transition-all after:duration-300 after:content-[''] hover:after:w-full lg:w-full"
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
  );
};
