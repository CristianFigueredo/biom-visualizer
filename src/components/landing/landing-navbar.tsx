import { Button, Image } from '@nextui-org/react';
import { Link } from '@tanstack/react-router';
import Logo from '@/assets/logo.png';

const redirectToPortfolio = () => {
  window.location.href = 'https://www.cristian-figueredo.com';
};

export const LandingNavbar = () => {
  return (
    <nav className='p-4  bg-transparent flex items-center justify-between'>
      <Link to='/' className='flex items-center'>
        <div className='relative h-9 w-9 mr-4'>
          <Image onClick={redirectToPortfolio} alt='logo' src={Logo} />
        </div>
      </Link>
      <div className='flex items-center gap-x-2'>
        <Link to='/dashboard'>
          <Button className='premium' variant='bordered' color='black'>
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </nav>
  );
};
