import React from 'react';
import styles from './SkillPage.module.css';
import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';
import Stacks from './Stacks';

function SkillPage() {
  return (
    <div className={styles.skill_page}>
      <div className={styles.skill__top}>
        <FrontEnd />
        <BackEnd />
      </div>
      <div className={styles.skill__bottom}>
        <Stacks />
      </div>
      
    </div>
  )
}
export default SkillPage;