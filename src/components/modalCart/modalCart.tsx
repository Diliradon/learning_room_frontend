import { cn } from '@/lib/utils';
import React from 'react';
import { X } from 'lucide-react';

type ModalCartProps = {
  title: string;
  children: React.ReactNode;
  closeModal: () => void;
  description?: string;
};

export const ModalCart: React.FC<ModalCartProps> = ({
  title,
  children,
  closeModal,
  description,
}) => {
  return (
    <div className="main-padding fixed inset-0 bg-gray-0 pb-[74px] pt-6 md:bg-gray-100/50 md:py-0">
      <div className="grid-container bg-white h-full w-full justify-center md:items-center">
        <div className="col-span-full flex flex-col md:col-span-6 md:col-start-2 md:rounded-3xl md:bg-gray-0 md:py-[60px] md:shadow-sm lg:col-start-4">
          <div className="flex flex-col items-center gap-4 md:gap-2">
            <div className="relative flex w-full justify-center">
              <h5 className="text-gray-100">{title}</h5>
              <X
                onClick={closeModal}
                className="absolute start-0 top-1/2 -translate-y-1/2 transform cursor-pointer md:hidden"
              />
            </div>
            {description && (
              <p className="main-text text-center text-gray-80">
                {description}
              </p>
            )}
          </div>
          {children}
          {/* <form className="flex h-full flex-col justify-between pt-10 md:mx-auto md:h-auto md:w-2/3 md:justify-normal md:pt-6">
            {children}
          </form> */}
        </div>
      </div>
    </div>
  );
};
