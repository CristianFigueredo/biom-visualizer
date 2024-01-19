import TypewriterComponent from 'typewriter-effect';
import { Button, Image } from '@nextui-org/react';
import { Link } from '@tanstack/react-router';
import Logo from '@/assets/logo.png';

const title = 'BIOME Visualizer';
const typeWriterStrings = [
  'Developed by Cristian',
  'React.js + Vite',
  'Styled with NextUI',
  'Type Safe by TypeScript',
];

export function LandingPageComponent() {
  return (
    <main className='min-h-screen h-full  overflow-auto'>
      <div className='mx-auto max-w-screen-xl  h-full w-full'>
        <nav className='p-4  bg-transparent flex items-center justify-between'>
          <Link to='/' className='flex items-center'>
            <div className='relative h-9 w-9 mr-4'>
              <Image
                onClick={() => {
                  window.open('https://www.cristian-figueredo.com', '_blank');
                }}
                alt='logo'
                src={Logo}
              />
            </div>
          </Link>
          <div className='flex items-center gap-x-2'>
            <Link to='/dashboard'>
              <Button className='premium' variant='bordered'>
                Go to Dashboard
              </Button>
            </Link>
          </div>
        </nav>
        <div className='w-full h-full mt-10'>
          <div className='text-white font-bold py-36 text-center space-y-5'>
            <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5'>
              <h1 className='text-black font-light'>{title}</h1>
              <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                <TypewriterComponent
                  options={{
                    strings: typeWriterStrings,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
