import React from "react";
import '../../styles/components/loader.scss';

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-neutral-50">
      <div className="flex flex-col items-center">
        <img className="mb-16" src="./toby.svg" alt="toby" />

        <p className="loading-text text-3xl font-ubuntuBold text-gray-800">
          Loading...
        </p>
        <p className="relative loader w-full">
        </p>
      </div>
    </div>
  );
}
