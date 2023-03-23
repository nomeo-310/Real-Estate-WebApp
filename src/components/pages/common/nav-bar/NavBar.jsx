import React from 'react';
import './nav-bar.scss'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { navItems } from './navBarData';


const NavBar = () => {
  const [navBar, setNavBar] = useState('nav-bar');
  const [userBar, setUserBar] = useState('activities-logout-list');

  const navbarFixed =()=> {
    if (window.scrollY >= 200) {
        setNavBar('nav-bar fixed')
    } else {
        setNavBar('nav-bar');
    }
  };

  useEffect(() => {
      window.addEventListener('scroll', navbarFixed)
  }, []);

  const openMenu =()=> {
    setNavBar('nav-bar fixed active')
  }
  const closeMenu =()=> {
    setNavBar('nav-bar')
  }

  const openUser =()=> {
    setUserBar('activities-logout-list active')
  }
  const closeUser =()=> {
    setUserBar('activities-logout-list')
  }
  const [showMenu, setShowMenu] = useState(false);
  const [showUser, setShowUser] = useState(false);

  const handleMenu =()=> {
    if (showMenu) {
      closeMenu()
      setShowMenu(false)
    }else {
      openMenu()
      setShowMenu(true)
    }
  }
  const handleUser =()=> {
    if (showUser) {
      closeUser()
      setShowUser(false)
     
    } else {
      openUser()
      setShowUser(true)
    }
  }
  const handleCloseUser=()=> {
    closeUser();
    closeMenu()
  }

  return (
    <div className={navBar}>
      <div className="nav-bar-wrapper">
        <div className="nav-bar-left">
          <div className="brand-name">
            <Link to='/' onClick={closeMenu}>Nomeo Realtors</Link>
          </div>
          <div className="hamburger-menu-wrapper"onClick={handleMenu}>
            <div className="hamburger-menu"></div>
          </div>
        </div>
        <div className="nav-bar-menu">
          <div className="nav-bar-center">
            <ul className="nav-list">
              {navItems.map((navItem, index) => (
                <li className="nav-item" key={index}>
                <NavLink className='nav-link' to={`${navItem.path}`} onClick={closeMenu}>{navItem.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-bar-right">
            <div className="activities-logout">
                <div className="user-details">
                  <span className="mdi mdi-account" onClick={handleUser}></span>
                  <h3>user name</h3>
                </div>
              <ul className={userBar}>
                <li onClick={handleCloseUser}>logout</li>
                <li onClick={handleCloseUser}>check activities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
