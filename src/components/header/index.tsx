import Brand from '../../assets/brand.png';
import NavLink from '../../atoms/nav-link';
import LinkButton from '../../atoms/link-button';

export default function Header() {
  return (
    <header className='w-full flex items-center h-9 px-2 shadow-md' data-testid='header'>
      <div className='container flex items-center justify-between'>
        <div className='flex items-center'>
          <img className='h-5 w-5 mr-5' src={Brand} alt='logo'/>
          <nav className='text-white text-lg leading-[1.2]'>
            <NavLink label='Home' url='/home' className='mr-5'/>
            <NavLink label='Dashboard' url='/dashboard'/>
          </nav>
        </div>
        <LinkButton label='Login' className='secondary-button' url='/login'/>
      </div>
    </header>
  );
}
