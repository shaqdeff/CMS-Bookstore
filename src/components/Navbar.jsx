import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="cms-logo">
            Bookstore CMS
          </Link>
        </li>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
