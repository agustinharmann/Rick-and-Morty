import React, { useContext } from 'react';
import { UserContext } from '../../utils/useContext';
import { Link } from 'react-router-dom';
import logo_header from '../../assets/logo_header.jpg';
import { CgMenu } from 'react-icons/cg';
import { Navbar } from '../Navbar';
// import { Menu } from '../Menu';
import './styles.css';

const Header = () => {

  const { windowWidth, toggleMenu } = useContext(UserContext);

  return (
    <div className='header'>

      <Link to="/" className='container_logo--header'>
        <img className='logo--header' src={logo_header} alt='Logo App' />
      </Link>

      <div className='search--header'>
        <Navbar />
      </div>

      <div className='container-btn-menu--header'>
        {windowWidth <= 768 && (
          <div className='btn-menu--header' onClick={toggleMenu}>
            <CgMenu className='icon_menu--header' />
          </div>
        )}
      </div>

    </div>
  );
};

export { Header };
