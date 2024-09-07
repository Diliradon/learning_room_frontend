'use client';

import { useAppSelector } from '@/hooks/useAppSelector';
import { Loader } from './loader/loader';
import HeroLayout from '@/app/home/layout';
import Hero from '@/app/home/page';

export default function ConditionalRenderer() {
  const loading = useAppSelector(state => state.auth.loading);

  if (loading) {
    return <Loader />;
  }

  return (
    <HeroLayout>
      <Hero />
    </HeroLayout>
  );
}
