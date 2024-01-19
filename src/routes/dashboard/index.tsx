import { FileRoute } from '@tanstack/react-router';

import { BacteriaTable } from '@/components/bacteria-table';

function DashboardIndexComponent() {
  return <BacteriaTable />;
}

export const Route = new FileRoute('/dashboard/').createRoute({
  component: DashboardIndexComponent,
});
