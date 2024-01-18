import { Image } from '@nextui-org/react';
import { MapPin, User, Github, FileJson } from 'lucide-react';

import { Sidebar } from './sidebar.styles';
import { SidebarItem } from './sidebar-item';
import { SidebarMenu } from './sidebar-menu';
import { useSidebarContext } from '../layout/layout-context';

import Logo from '@/assets/logo.png';

export const SidebarWrapper = () => {
  const { collapsed } = useSidebarContext();

  return (
    <aside className='h-screen z-[202] sticky top-0'>
      <div className={Sidebar({ collapsed: collapsed })}>
        <div className={Sidebar.Header()}>
          <div className='flex items-center gap-2'>
            <Image className=' w-[40px] h-[40px]' src={Logo} alt='logo' />
            <div className='flex flex-col gap-4'>
              <h3 className='text-xl font-medium m-0 text-default-900 -mb-4 whitespace-nowrap'>
                By Cristian
              </h3>
              <span className='text-xs font-medium text-default-500'>
                <div className='flex gap-1 items-center'>
                  <MapPin width={16} />
                  Latam, PY
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between h-full'>
          <div className={Sidebar.Body()}>
            <SidebarMenu title='More Information'>
              <SidebarItem
                title='Developer'
                onClick={() =>
                  window.open('https://www.cristian-figueredo.com', '_blank')
                }
                icon={<User size={20} />}
              />
              <SidebarItem
                title='Repository'
                onClick={() =>
                  window.open(
                    'https://www.github.com/CristianFigueredo/biome-visualizer',
                    '_blank'
                  )
                }
                icon={<Github size={20} />}
              />
              <SidebarItem
                title='Source Code'
                onClick={() =>
                  window.open(
                    'https://stackblitz.com/github/CristianFigueredo/biome-visualizer',
                    '_blank'
                  )
                }
                icon={<FileJson size={20} />}
              />
            </SidebarMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};
