import { Link } from 'react-router-dom';
import './nav-link.scss';

interface NavLinkProps {
  label: string;
  url: string;
  isActive?: boolean;
  testid?: string;
  className?: string;
}

export default function NavLink({ label, url, testid, className, isActive }: NavLinkProps) {
  return (
    <Link to={url} data-testid={testid} className={`nav-link ${className || ''} ${isActive ? 'active' : ''}`}>
      {label}
    </Link>
  );
}
