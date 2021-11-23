import { Link } from 'react-router-dom';
import { News } from '../../types';

interface NewsCardProps {
  className?: string;
  key?: string;
}

export default function NewsCard({
  author, title, description, imageURL, className, id, key,
}: NewsCardProps & News) {
  return (
    <div key={key} className={`${className || ''} flex flex-col w-[300px] shadow-md`}>
      <img className='w-full mb-1.5' src={imageURL} alt={title}/>
      <div className='p-2 text-center'>
        <h3 className='mb-1.5 text-bold text-2xl text-brand text-center'>{title}</h3>
        <p className='mb-1.5 text-center'>{description}</p>
        <small className='text-copy-light text-sm block text-center mb-2'>{author}</small>
        <Link className='text-center text-brand hover:text-brand-light' to={`/news/${id}`}>EDIT</Link>
      </div>
    </div>
  );
}
