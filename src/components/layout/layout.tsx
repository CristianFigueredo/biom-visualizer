import { useState } from 'react';

import { SidebarContext } from './layout-context';
import { SidebarWrapper } from '../sidebar/sidebar';
import { useLockedBody } from '../../hooks/useBodyLock';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };

  return (
    <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
      }}
    >
      <section className='flex'>
        <SidebarWrapper />
        {children}
      </section>
    </SidebarContext.Provider>
  );
};
