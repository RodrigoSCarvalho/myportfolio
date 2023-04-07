import React from 'react';
import styles from './main.module.css';
import Foto from '../assets/super.png';

const main = () => {
  return (
    <>
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
            SOBRE MIM{' '}
          </h1>
          <p className={styles.ctext}>
            Sou desenvolvedor web full-stack com foco no desenvolvimento de APIs
            back-end. Me formei bacharel em Sistemas de Informação pela
            Universidade Federal Fluminense em 2023. Atualmente atuo como
            Analista Júnior na Supergasbras, trabalhando com desenvolvimento em
            programação declarativa com a PowerPlatform da Microsoft e
            desenvolvimento RPA.
          </p>
        </div>
      </section>
      <section className={`${styles.sectionXp}`}>
        <div className={`container ${styles.experiencias} `}>
          <h1 className={`${styles.txtXp} `} id={styles.subtitleXp}>
            EXPERIÊNCIAS{' '}
          </h1>
          <div className={styles.cardWrapped}>
            <div className={styles.xpCard}>
              <h1 className={`${styles.jobTitle} `}> Analista Jr</h1>
              <h2 className={`${styles.jobSubtitle} `}>Supergasbras</h2>
              <p className={`${styles.jobPeriod} `}>Mar 2021 - Presente</p>
              <p className={`${styles.ctext} ${styles.jobDescription} `}>
                {' '}
                Na Supergasbras eu iniciei como estagiário me destacando na
                equipe de Arquitetura de Sistemas, com o desenvolvimento de
                aplicações internas utilizando tecnologias de programação
                declarativa, agregando valor com baixo custo, o que encadeou na
                minha efetivação como Analista Júnior de Tecnologia de Negócios.
                <br></br>
                <br></br>No começo da minha tragetória como estagiário ainda
                atuei na equipe de Service Desk, resolvendo incidentes de
                Windows e SAP. E na equipe de Segurança da Informação, tratando
                demandas de auditoria externa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default main;
