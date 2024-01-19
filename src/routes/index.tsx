import { FileRoute } from '@tanstack/react-router';

import { LandingPageComponent } from '@/components/landing';

export const Route = new FileRoute('/').createRoute({
  component: LandingPageComponent,
});
