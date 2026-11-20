import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">SSCafe</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/menu" className="nav-link">Menu</Link>
              <Link to="/review" className="nav-link">Review</Link>
              <Link to="/book" className="nav-link">Book</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}

export default Layout