import React from 'react';
import styles from './ProjectPage.module.css';
import Project from './ProjectDisplay';

function ProjectPage() {
  return (
    <div className={styles.project__page}>
      <div className={styles.title}>Projects Display</div>
      <div className={styles.projects__container}>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  )
}

export default ProjectPage;