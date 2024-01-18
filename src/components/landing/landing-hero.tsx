import TypewriterComponent from 'typewriter-effect';

const title = 'BIOME Visualizer';
const typeWriterStrings = [
  'Developed by Cristian',
  'React.js + Vite',
  'Styled with NextUI',
  'Type Safe by TypeScript',
];

export const LandingHero = () => {
  return (
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
  );
};
