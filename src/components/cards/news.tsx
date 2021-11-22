import { News } from '../../types';

interface NewsCardProps {
  className?: string;
}

export default function NewsCard({
  author, title, description, imageURL, className,
}: NewsCardProps & News) {
  return (
    <div className={`${className || ''} p-2 flex flex-col w-[300px] shadow-md`}>
      <img className='w-full mb-1.5' src={imageURL} alt={title}/>
      <h3 className='mb-1.5'>{title}</h3>
      <p className='mb-1.5'>{description}</p>
      <small>{author}</small>
    </div>
  );
}
