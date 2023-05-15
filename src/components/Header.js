import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <div className={styles.logo}>
          <h1 className={styles.title}>RSC</h1>
          <div className={styles.line}></div>
        </div>
        <div className={styles.routes}>
          <a>SOBRE MIM</a>
          <a>PROJETOS</a>
          <a>EXPERIÊNCIAS</a>
          <a>CONTATO</a>
          <button id={styles.cv}>
            {' '}
            CV{' '}
            <i
              className="bx bx-sm bxs-download "
              style={{ color: '#58430e' }}
            ></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
