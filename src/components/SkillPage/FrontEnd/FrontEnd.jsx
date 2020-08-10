import React from 'react';
import styles from './FrontEnd.module.css';

function FrontEnd() {
  return (
    <div className={styles.frontend}>
      <div className={styles.html}>
        &rarr; Semantic HTML &radic;
      </div>
      <div className={styles.css}>
        ------&rarr; CSS3 & SCSS &radic;
      </div>
      <div className={styles.js}>
        -&rarr; JavaScript & TypeScript &radic;
      </div>
      <div className={styles.react}>
        -------&rarr; React, Redux & Hooks &radic;
      </div>
    </div>
  )
}

export default FrontEnd;