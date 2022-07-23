import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="active-link">
          <Link to="/" className="cms-logo">
            Bookstore CMS
          </Link>
        </li>
        <li className="active-link">
          <Link to="/">BOOKS</Link>
        </li>
        <li className="active-link">
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
