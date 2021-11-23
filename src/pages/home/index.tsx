import MainTemplate from '../../templates/main';

export default function Home() {
  return (
    <MainTemplate>
      <h1 className='text-5xl font-bold text-center'>
        Welcome to Newsday.
      </h1>
      <p className='text-2xl text-center mt-2'>
        Your one stop for daily news.
      </p>
    </MainTemplate>
  );
}
