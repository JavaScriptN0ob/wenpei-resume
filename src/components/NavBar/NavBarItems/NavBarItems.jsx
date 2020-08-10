import React from 'react';
import styles from './NavBarItems.module.css';

function NavBarItems() {
  return (
    <nav className={styles.navbar_item__container}>
    <div className={styles.social}>Social Links</div>
    <div className={styles.project}>Project</div>
    <div className={styles.contact}>Contact</div>
  </nav>
  )
  
}

export default NavBarItems;