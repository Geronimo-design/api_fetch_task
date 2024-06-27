/** @format */

import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from './images/logo.jpg';

const NavBar = () => {
  return (
    <nav className='navBar' data-testid='NavBar test'>
      <img className='logo' src={logo} alt='iTunes logo insignia' />
      <Link to={'/'} className='navItem'>
        <h4>Home</h4>
      </Link>
      <Link to={'/Search'} className='navItem'>
        <h4>Search</h4>
      </Link>
      <Link to={'/Favourites'} className='navItem'>
        <h4>Favourites</h4>
      </Link>
    </nav>
  );
};

export default NavBar;
