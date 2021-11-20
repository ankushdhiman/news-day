import { BrowserRouter } from 'react-router-dom';

import Button from './atoms/button';
import NavLink from './atoms/nav-link';

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
