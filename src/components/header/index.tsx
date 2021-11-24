import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Brand from '../../assets/brand.png';

import NavLink from '../../atoms/nav-link';
import LinkButton from '../../atoms/link-button';

import ApplicationContext from '../../ApplicationContext';

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const { isLoggedIn } = useContext(ApplicationContext);
  const { pathname } = useLocation();

  function handleOpenClick() {
    setOpen(true);
  }

  function handleCloseClick() {
    setOpen(false);
  }

  return (
    <header className='w-full flex items-center h-9 px-2 shadow-md' data-testid='header'>
      <div className='container flex items-center justify-between'>
        <div className='flex items-center'>
          <img className='h-5 w-5 mr-5' src={Brand} alt='logo'/>
          <nav className='text-white text-lg leading-[1.2] hidden md:block'>
            <NavLink label='Home' url='/home' className={`mr-5 ${pathname === '/home' || pathname === '/' ? 'active' : ''}`}/>
            <NavLink label='Boards' url='/boards' className={`${pathname === '/boards' ? 'active' : ''}`}/>
          </nav>
        </div>
        {
          isLoggedIn() ? (
            <LinkButton label='Logout' className='secondary-button hidden md:flex' url='/logout'/>
          ) : (
            <LinkButton label='Login' className='secondary-button hidden md:flex' url='/login'/>
          )
        }
        {
          isOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 md:hidden cursor-pointer'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              onClick={handleCloseClick}
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'/>
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 md:hidden cursor-pointer'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              onClick={handleOpenClick}
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16'/>
            </svg>
          )
        }
      </div>
      {
        isOpen
          && (
            <nav className='text-white text-lg leading-[1.2] fixed flex flex-col items-center md:hidden h-screen w-full max-w-[400px] top-9 right-[0] bg-white'>
              <NavLink label='Home' url='/home' className={`mb-5 ${pathname === '/home' || pathname === '/' ? 'active' : ''}`}/>
              <NavLink label='Boards' url='/boards' className={`mb-5 ${pathname === '/boards' ? 'active' : ''}`}/>
              {
                isLoggedIn() ? (
                  <LinkButton label='Logout' className='secondary-button md:flex' url='/logout'/>
                ) : (
                  <LinkButton label='Login' className='secondary-button md:flex' url='/login'/>
                )
              }
            </nav>
          )
      }
    </header>
  );
}
