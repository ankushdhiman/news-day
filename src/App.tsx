import Button from './atoms/button';

export default function App() {
  return (
    <>
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
    </>
  );
}
