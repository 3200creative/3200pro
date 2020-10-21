import React from 'react';
import styles from './logo.css';
import Logo from './paranet_white.svg';

const myLogo = () => (
  <img className={styles.logo} src={Logo} alt="Logo" />
  );

export default myLogo;