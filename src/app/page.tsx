import HeroLayout from './home/layout';
import Hero from './home/page';

export default function Home() {
  return (
    <main>
      <HeroLayout>
        <Hero />
      </HeroLayout>
    </main>
  );
}
