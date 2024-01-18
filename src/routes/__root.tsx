import React from 'react';
import { Outlet, rootRouteWithContext } from '@tanstack/react-router';

import type { Auth } from '@/libs/auth';

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

export const Route = rootRouteWithContext<{ auth: Auth }>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools position='bottom-right' />
    </>
  );
}
