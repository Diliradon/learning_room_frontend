import { ReactNode } from 'react';
import bgImage from '../../../public/bg-image.jpg';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <div className="h-full w-full bg-cover bg-center md:bg-[url('/bg-image.jpg')]">
        <div className="bg-grey/0 border-box flex h-full w-full justify-center md:absolute md:bottom-0 md:max-h-[672px] md:rounded-tl-[24px] md:rounded-tr-[24px] shadow-[20px_0px_32px_0px_#0000000D] lg:bottom-auto lg:left-0 lg:max-h-none lg:max-w-[608px] lg:items-center lg:justify-start lg:rounded-none lg:rounded-br-[24px] lg:rounded-tr-[24px] lg:border-t-0 lg:pl-36 lg:pr-[71px]">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
