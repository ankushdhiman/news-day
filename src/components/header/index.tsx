import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import Brand from '../../assets/brand.png';

import NavLink from '../../atoms/nav-link';
import LinkButton from '../../atoms/link-button';

import ApplicationContext from '../../ApplicationContext';

export default function Header() {
  const { isLoggedIn } = useContext(ApplicationContext);
  const { pathname } = useLocation();
  return (
    <header className='w-full flex items-center h-9 px-2 shadow-md' data-testid='header'>
      <div className='container flex items-center justify-between'>
        <div className='flex items-center'>
          <img className='h-5 w-5 mr-5' src={Brand} alt='logo'/>
          <nav className='text-white text-lg leading-[1.2]'>
            <NavLink label='Home' url='/home' className={`mr-5 ${pathname === '/home' || pathname === '/' ? 'active' : ''}`}/>
            <NavLink label='Boards' url='/boards' className={`${pathname === '/boards' ? 'active' : ''}`}/>
          </nav>
        </div>
        {
          isLoggedIn() ? (
            <LinkButton label='Logout' className='secondary-button' url='/logout'/>
          ) : (
            <LinkButton label='Login' className='secondary-button' url='/login'/>
          )
        }
      </div>
    </header>
  );
}
