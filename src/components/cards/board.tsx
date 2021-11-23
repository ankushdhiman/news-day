import { Link } from 'react-router-dom';
import { Board } from '../../types';

interface BoardCardProps {
  className?: string;
  key?: string;
}

export default function NewsBoard({ id, name, className, key }: BoardCardProps & Board) {
  const classes = 'p-2 shadow-md text-2xl hover:bg-brand hover:text-white color-transition';
  return (
    <Link key={key} className={`${className || ''} ${classes}`} to={`/board/${id}`}>
      {name}
    </Link>
  );
}
