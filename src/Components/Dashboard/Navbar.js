import './navbar.css';

import React, { useState } from 'react';

import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import companyLogo from '../../assets/img/LogoRMbg.png'
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const currDate = new Date().toLocaleDateString();
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu active'}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              <img src={companyLogo} alt="BigCo Inc. logo" />
              <div className="date">
                {currDate}</div>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;