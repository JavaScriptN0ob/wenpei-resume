import React from 'react';
import styles from './NavBar.module.css';
import NavBarLogo from './NavBarLogo';
import NavBarItems from './NavBarItems';

function NavBar() {
  return (
    <div className={styles.navbar_container}>
      <NavBarLogo />
      <NavBarItems />
    </div>
  )
}

export default NavBar;