import React from 'react';
import styles from './BackEnd.module.css';

function BackEnd() {
  return (
    <div className={styles.backend}>
      <div className={styles.node}>&radic; Node.Js & Express 	&larr;-----------</div>
      <div className={styles.database}>&radic; MySQL & MongoDB 	&larr;----</div>
      <div className={styles.aws}>&radic; Heroku & AWS 	&larr;-----</div>
      <div className={styles.continues_integration}>&radic; CICD 	&larr;---------</div>
  </div>
  )
  
}

export default BackEnd;