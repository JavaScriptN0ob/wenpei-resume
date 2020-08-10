import React from 'react';
import styles from './PersonalPage.module.css';
import Hi from './HiLogo';
import Name from './Name';
import Occupation from './Occupation';

function PersonalPage() {
  return (
    <div className={styles.personal_page__container}>
      <Hi />
      <Name />
      <Occupation />
    </div>
  )
}

export default PersonalPage;