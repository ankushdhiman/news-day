import Brand from '../../assets/brand.png';

export default function Footer() {
  return (
    <footer className='w-full bg-copy text-white px-2 py-4' data-testid='footer'>
      <div className='container flex flex-col md:flex-row items-center justify-between'>
        <img className='h-5' src={Brand} alt='logo'/>
        <div className='flex flex-col justify-center md:flex-row md:mt-[0] mt-2'>
          <p className='text-xl text-white'>
            Copyright 2021, Newsday GmbH
          </p>
        </div>
      </div>
    </footer>
  );
}
