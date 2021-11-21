import { BrowserRouter } from 'react-router-dom';

import Button from './atoms/button';
import NavLink from './atoms/nav-link';
import Footer from './components/footer';
import Header from './components/header';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <div className='p-2'>
          <Button
            className='primary-button'
            label='Primary Button'
          />
        </div>
        <div className='p-2'>
          <Button
            className='secondary-button'
            label='Secondary Button'
          />
        </div>
        <div className='p-2'>
          <NavLink
            className=''
            label='Home'
            url='/home'
          />
        </div>
        <div className='p-2'>
          <NavLink
            className=''
            label='Not Home'
            url='/not-home'
            isActive
          />
        </div>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}
