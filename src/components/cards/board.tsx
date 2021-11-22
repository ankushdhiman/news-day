import { Link } from 'react-router-dom';
import { Board } from '../../types';

interface BoardCardProps {
  className?: string;
}

export default function NewsBoard({ id, name, className }: BoardCardProps & Board) {
  const classes = 'p-2 shadow-md text-2xl hover:bg-brand hover:text-white color-transition';
  return (
    <Link className={`${className || ''} ${classes}`} to={`/board/${id}`}>
      {name}
    </Link>
  );
}
