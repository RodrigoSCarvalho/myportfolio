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
            <div className={styles.projectImage}></div>
            <div className={styles.stacksWrapper}>
              <div className={styles.stacks}>
                <img
                  src="https://img.shields.io/badge/-React-05122A?style=flat&logo=react"
                  alt="React Js"
                  width={72}
                  height={24}
                />
                <img
                  src="https://img.shields.io/badge/-Flask-05122A?style=flat&logo=flask"
                  alt="Flask"
                  width={64}
                  height={24}
                />
              </div>
              <div className={styles.gitWrapper}>
                <button className={styles.btnGit}>
                  <i
                    class="bx bx-sm bxl-github"
                    style={{ color: '#58430E' }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projeto;
