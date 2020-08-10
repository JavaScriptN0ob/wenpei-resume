import React from 'react';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import PersonalPage from './components/PersonalPage';
import SkillPage from './components/SkillPage';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <div className={styles.resume__container}>
      <NavBar />
      <PersonalPage />
      <SkillPage />
      <ProjectPage />
    </div>
  );
}

export default App;
