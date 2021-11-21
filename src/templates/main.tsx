import { ReactNode } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

interface MainTemplateProps {
  children: ReactNode;
}

export default function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Header/>
      <main className='container py-5'>
        {children}
      </main>
      <Footer/>
    </>
  );
}
