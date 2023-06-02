import React from 'react';
import styles from './SectionTitle.module.css';

const SectionTitle = ({ text }) => {
  return <h1 className={styles.title}>{text}</h1>;
};

export default SectionTitle;
