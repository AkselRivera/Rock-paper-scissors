import React from 'react'
import styles from './header.module.css';

import logo from '../../images/logo.svg';

function Header() {
  return (
    <div className={styles.container}>

    <img className={styles.logo} src={logo} alt='' />

    <div className={styles.score}>
      <span className={styles.title}>SCORE</span>
      <span className={styles.points}>12</span>
    </div>
    </div>
  )
}

export default Header