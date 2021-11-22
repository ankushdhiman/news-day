import { Link } from 'react-router-dom';
import { Board } from '../../types';

interface NewsBoardProps {
  className?: string;
}

export default function NewsBoard({ id, name, className }: NewsBoardProps & Board) {
  return (
    <Link className={`${className || ''} p-2`} to={`/board/${id}`}>
      {name}
    </Link>
  );
}
