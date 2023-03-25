import React from 'react';
import styles from './main.module.css';

const main = () => {
  return (
    <section className={`container ${styles.me}`}>
      <div className={`${styles.text} animeLeft`}>
        <p className={styles.nome}>
          Olá, eu sou o <strong> Rodrigo!</strong>{' '}
        </p>
        <h1 className={styles.title}>
          {' '}
          Desenvolvedor Web <br /> Full-Stack
        </h1>
      </div>
      <div className={styles.picture}></div>
    </section>
  );
};

export default main;
