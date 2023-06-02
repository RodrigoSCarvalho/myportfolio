import React from 'react';
import styles from './Projeto.module.css';
import SectionTitle from '../../components/SectionTitle';

const Projeto = () => {
  return (
    <section className={styles.project}>
      <div className={`container`} style={{ paddingTop: 64 }}>
        <SectionTitle text="PROJETOS" />
        <div className={styles.projetosWrapper}>
          <div className={styles.card1}>
            <h1 className={styles.cardTitle}>Depressive Posts Monitoring</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projeto;
