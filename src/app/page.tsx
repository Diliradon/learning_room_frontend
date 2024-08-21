'use client';

import Head from 'next/head';
import HeroLayout from './home/layout';
import Hero from './home/page';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Loader } from '@/components/loader/loader';

export default function Home() {
  const loading = useAppSelector(state => state.auth.loading);
  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
        <HeroLayout>
          <Hero />
        </HeroLayout>
      )}
    </main>
  );
}
