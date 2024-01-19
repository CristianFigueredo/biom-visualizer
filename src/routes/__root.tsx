import React from 'react';
import { Outlet, rootRouteWithContext } from '@tanstack/react-router';

const TanStackRouterDevtools =
  // TODO: install types for node
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );

export const Route = rootRouteWithContext()({
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
