import React from 'react';
import styles from './Main.module.css';
import Foto from '../assets/super.png';

const Main = () => {
  const [slideActive, setSlideAtive] = React.useState(0);
  const [numSlides, setnumSlides] = React.useState(2);

  async function changeSlide(acao) {
    if (acao === 'aumentar') {
      setSlideAtive(slideActive + 1);
    } else {
      setSlideAtive(slideActive - 1);
    }
    console.log(slideActive);
  }

  console.log(slideActive);

  return (
    <>
      <section className={`container ${styles.me}`}>
        <div className={` animeLeft`}>
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
        <div className={`${styles.text}`}>
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
        <div className={`container `}>
          <h1 id={styles.subtitleXp}>EXPERIÊNCIAS </h1>
          <div className={`container ${styles.experiencias} `}>
            {slideActive > 0 ? (
              <div className={styles.setaEsquerda}>
                {' '}
                <a onClick={() => changeSlide('diminuir')}>
                  <i
                    className="bx bxs-left-arrow-circle bx-lg"
                    style={{ color: '#DFBD65' }}
                  ></i>
                </a>
              </div>
            ) : null}
            {slideActive < numSlides ? (
              <div className={styles.setaDireita}>
                {' '}
                <a onClick={() => changeSlide('aumentar')}>
                  <i
                    className="bx bxs-right-arrow-circle bx-lg"
                    style={{ color: '#DFBD65' }}
                  ></i>
                </a>
              </div>
            ) : null}
            {slideActive == 0 ? (
              <div className={`${styles.cardWrapped}`}>
                <div className={`slide `}>
                  <div className={`${styles.xpCard} animeLeft`}>
                    <h1 className={`${styles.jobTitle} `}> Analista Jr</h1>
                    <h2 className={`${styles.jobSubtitle} `}>Supergasbras</h2>
                    <p className={`${styles.jobPeriod} `}>
                      Mar 2021 - Presente
                    </p>
                    <p className={`${styles.ctext} ${styles.jobDescription} `}>
                      {' '}
                      Na Supergasbras eu iniciei como estagiário me destacando
                      na equipe de Arquitetura de Sistemas, com o
                      desenvolvimento de aplicações internas utilizando
                      tecnologias de programação declarativa, agregando valor
                      com baixo custo, o que encadeou na minha efetivação como
                      Analista Júnior de Tecnologia de Negócios.
                      <br></br>
                      <br></br>No começo da minha trajetória como estagiário
                      ainda atuei na equipe de Service Desk, resolvendo
                      incidentes de Windows e SAP. E na equipe de Segurança da
                      Informação, tratando demandas de auditoria externa.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
            {slideActive == 1 ? (
              <div className={`${styles.cardWrapped} active`}>
                <div className={`slide`}>
                  <div className={`${styles.xpCard} animeLeft`}>
                    <h1 className={`${styles.jobTitle} `}>
                      {' '}
                      Criador de Conteúdo
                    </h1>
                    <h2 className={`${styles.jobSubtitle} `}>
                      Fokus Creative Agency
                    </h2>
                    <p className={`${styles.jobPeriod} `}>
                      Abr 2020 - Fev 2021
                    </p>
                    <p className={`${styles.ctext} ${styles.jobDescription} `}>
                      {' '}
                      Durante o meu tempo na Fokus, atuei como criador de
                      conteúdo na empresa de Marketing Digital, realizando
                      banners e artes para serem publicadas em mídiais sociais.
                      Fazneodo uso das ferramentas de edição de imagens mais
                      utilizadas no mercado.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
            {slideActive == 2 ? (
              <div className={`${styles.cardWrapped}`}>
                <div className={`slide`}>
                  <div className={`${styles.xpCard} animeLeft`}>
                    <h1 className={`${styles.jobTitle} `}>
                      {' '}
                      Auxiliar Administrativo (Aprendiz)
                    </h1>
                    <h2 className={`${styles.jobSubtitle} `}>
                      Coletivos São Geraldo
                    </h2>
                    <p className={`${styles.jobPeriod} `}>
                      Mai 2016 - Ago 2017
                    </p>
                    <p className={`${styles.ctext} ${styles.jobDescription} `}>
                      {' '}
                      Minha primeira experiência profissional foi como Jovem
                      Aprendiz Auxiliar Administrativo no setor juridico da São
                      Geraldo. Dutante esse período de aprendizado pude lidar
                      com o relacionamento com o cliente, prestar manutenção nos
                      computadores e suporte na utilização do Pacote Office.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
