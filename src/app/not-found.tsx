import { Button } from '@/components/Button';
import '../styles/components/loader.scss';
import Link from 'next/link';

export const NotFoundPage = () => {
  return (
    <div className="main-padding relative mx-auto flex h-screen w-full max-w-[1280px] items-center justify-center">
      <div className="grid-container w-full">
        <img
          className="col-span-full mb-16 justify-self-center md:col-span-2 md:col-start-4 lg:col-start-6"
          src="/fizz.svg"
          alt="toby"
        />

        <div className="col-span-full flex flex-col items-center gap-6 pb-20 md:col-span-4 md:col-start-3 lg:col-start-5">
          <h1>Oops...</h1>
          <h4 className="text-gray-60">Page not found</h4>
        </div>

        <Link
          href="/"
          className="col-span-full md:col-span-4 md:col-start-3 lg:col-start-5"
        >
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};
export default NotFoundPage;
