import React from 'react';
import styles from './Main.module.css';
import Foto from '../assets/super.png';
import Projeto from './projetos/Projeto';
import SectionTitle from '../components/SectionTitle';

const Main = () => {
  const [slideActive, setSlideAtive] = React.useState(0);
  const numSlides = 2;

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
          <img src={Foto} height="360" width="360" alt="Minha foto"></img>
        </div>
        <div className={`${styles.text}`}>
          <SectionTitle text={'SOBRE MIM'} />
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
        <div className={`container ${styles.xpWrapper}`}>
          <SectionTitle text={'EXPERIÊNCIAS'} />
          <div className={`container ${styles.experiencias} `}>
            {slideActive > 0 ? (
              <div
                className={styles.setaEsquerda}
                onClick={() => changeSlide('diminuir')}
              >
                {' '}
                <i
                  className="bx bx-chevron-left bx-lg"
                  style={{ color: '#DFBD65' }}
                ></i>
              </div>
            ) : null}
            {slideActive < numSlides ? (
              <div
                className={styles.setaDireita}
                onClick={() => changeSlide('aumentar')}
              >
                {' '}
                <i
                  className="bx bx-chevron-right bx-lg"
                  style={{ color: '#DFBD65' }}
                ></i>
              </div>
            ) : null}
            {slideActive === 0 ? (
              <div className={`${styles.cardWrapped}`}>
                <div className={`slide `}>
                  <div className={` animeLeft`}>
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
                    <div className={`${styles.badges}`}>
                      <img
                        src="https://img.shields.io/badge/-PowerApps-05122A?style=flat&logo=powerapps&logoColor=8d2c85"
                        alt="PowerApps"
                      />
                      <img
                        src="https://img.shields.io/badge/-PowerAutomate-05122A?style=flat&logo=powerautomate&logoColor=0e46be"
                        alt="PowerAutomate"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            {slideActive === 1 ? (
              <div className={`${styles.cardWrapped} active`}>
                <div className={`slide`}>
                  <div className={` animeLeft`}>
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
                    <div className={`${styles.badges}`}>
                      <img
                        src="https://img.shields.io/badge/-Photoshop-05122A?style=flat&logo=adobephotoshop"
                        alt="Adobe Photoshop"
                      />
                      <img
                        src="https://img.shields.io/badge/-WordPress-05122A?style=flat&logo=wordpress"
                        alt="WordPress"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            {slideActive === 2 ? (
              <div className={`${styles.cardWrapped}`}>
                <div className={`slide`}>
                  <div className={` animeLeft`}>
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
                    <div className={`${styles.badges}`}>
                      <img
                        src="https://img.shields.io/badge/-Office-05122A?style=flat&logo=microsoftoffice&logoColor=d83b01"
                        alt="Office"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className={`${styles.dots} container`}>
            <div
              className={
                slideActive === 0
                  ? `${styles.dotActive}`
                  : `${styles.dotDisabled}`
              }
            ></div>
            <div
              className={
                slideActive === 1
                  ? `${styles.dotActive}`
                  : `${styles.dotDisabled}`
              }
            ></div>
            <div
              className={
                slideActive === 2
                  ? `${styles.dotActive}`
                  : `${styles.dotDisabled}`
              }
            ></div>
          </div>
        </div>
      </section>
      <Projeto />
    </>
  );
};

export default Main;
