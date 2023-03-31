import React from 'react';
import styles from './main.module.css';
import Foto from '../assets/super.png';

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
      <div className={styles.picture}>
        <img src={Foto} height="360" width="360"></img>
      </div>
      <div className={`${styles.text} ${styles.expand}`}>
        <h1 className={styles.nome} id={styles.subtitle}>
          Sobre mim{' '}
        </h1>
        <p className={styles.ctext}>
          Sou desenvolvedor web full-stack com foco no desenvolvimento de APIs
          back-end. Me formei bacharel em Sistemas de Informação pela
          Universidade Federal Fluminense em 2023. Atualmente atuo como Analista
          Júnior na Supergasbras, trabalhando com desenvolvimento em programação
          declarativa com a PowerPlatform da Microsoft e desenvolvimento RPA.
        </p>
      </div>
    </section>
  );
};

export default main;
