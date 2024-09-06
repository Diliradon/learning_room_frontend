import React from "react";

export const ModalCart: React.FC = () => {
  return(
    <div className="fixed inset-0 z-10 md:main-padding">
      <div className="grid-container w-full h-full bg-white items-center justify-center">
        <div className="col-start-4 col-span-6 bg-gray-0 h-[366px] rounded-3xl shadow-sm">
          <div className="flex items-center justify-center py-[60px]">
            <div className="flex flex-col items-center gap-2">
              <h5 className="text-gray-100">Join the course</h5>
              <p className="main-text text-gray-80">Enter the course code created by the teacher</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
