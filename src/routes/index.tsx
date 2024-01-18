import { FileRoute } from '@tanstack/react-router';

import { LandingHero } from '@/components/landing/landing-hero';
import { LandingNavbar } from '@/components/landing/landing-navbar';

export const Route = new FileRoute('/').createRoute({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <main className='min-h-screen h-full  overflow-auto'>
      <div className='mx-auto max-w-screen-xl  h-full w-full'>
        <LandingNavbar />
        <div className='w-full h-full mt-10'>
          <LandingHero />
        </div>
      </div>
    </main>
  );
}
