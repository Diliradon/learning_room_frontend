import { ReactNode } from 'react';
import bgImage from '../../../public/bg-image.jpg';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className="flex"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </main>
  );
};

export default AuthLayout;
