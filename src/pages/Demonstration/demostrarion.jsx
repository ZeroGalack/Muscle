import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style-page-cards.css';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ImageSelection from './ImageSelection.jsx'
import MolaAni from './MolaAni.jsx'; 

import muscleMola from '../../assets/img/musle-df-mola.png'


const Demo = () => {
    const navigate = useNavigate();
    const [content, setContent] = useState(0);
    const [MassaMola, setMassaMola] = useState(0);

    const limDir = 4;
    const limEsq = 0;

    const limDirMassaMola = 15;
    const limEsqMassaMola = 0;


    const ButtonClickBE = () => {
        setContent((prevContent) => {
          const newContent = prevContent - 1;
          return newContent >= limEsq ? newContent : limEsq;
        });
      };
    
    const ButtonClickBD = () => {
      setContent((prevContent) => {
        const newContent = prevContent + 1;
        return newContent <= limDir ? newContent : limDir;
      });
    };

    const BtnDiminuiMassaMola  = () => {
      setMassaMola((MassaMola) => {
        const newContent = MassaMola - 1;
        return newContent >= limEsqMassaMola ? newContent : limEsqMassaMola;
      });
    };
  
    const BtnSomaMassaMola = () => {
      setMassaMola((MassaMola) => {
        const newContent = MassaMola + 1;
        return newContent <= limDirMassaMola ? newContent : limDirMassaMola;
      });
    };

    const goToAboutPage = () => {
      navigate('/HillsModel');
    };


    const renderContent = () => {
      if (content === limEsq) {
        return (
          <div className='card-demo' style={{ textAlign: 'justify'}} >
            <h1>Introdução:</h1>
            <p>
              Bem-vindo ao ⓂⓊⓈⒸⓁⒺ, acrônimo de Modeling, Understanding, Systematizing, Contraction, Learning, Experimentation, Simulation, sua plataforma interativa para
              o aprendizado sobre fisiologia muscular básica.
            </p>
            <p> 
              Os objetivos desta platoforma são:
            </p>
            <ul>
              <li>
                Revisar a fisiologia básica da contração do músculo estriado.
              </li>
              <li>
                Usar de artigos científicos clássicos, apresentando-os de forma moderna
                e interativa para demonstrar os processos de pensamento envolvidos no
                desenvolvimento de modelos a partir de dados fisiológicos.
              </li>
              <li>
                Contrastar o modelo muscular de Hill com abordagens contemporâneas e explorar suas aplicações práticas.
              </li>
            </ul>
            
          </div>
        );
      } else if (content === limEsq + 1) {
        return (
          <div className='card-demo' style={{ textAlign: 'justify', height: '350px' }}>
            <h1>Capítulo 1</h1>
            <h2 className=''>Sistemas viscoelástico:</h2>
            <p style={{textIndent: '2em'}}>
              Muitos sistemas biológicos têm comportamento viscoelástico, exibindo características
               tanto elásticas quanto viscosas em resposta à deformação. Na primeira metade do
                século XX, biofísicos como Hill e Wyman desenvolveram modelos simples para 
                descrever a mecânica viscoelástica dos tecidos, baseando-se em resultados experimentais.
            </p>
      
          </div>
        );
      } else if (content === limEsq + 2) {
        return (
          <div className='card-demo' style={{ textAlign: 'justify' }}>
            <h2 className=''>Trabalho muscular:</h2>

            <p>
              A relação entre carga (P) e trabalho pode ser compreendida 
              ao comparar um músculo contraído com uma mola.
            </p>

            <div style={{display: 'flex'}}>
              <div style={{display: 'flex', padding: '20px'}}>
                <div>
                  <MolaAni toValueProp={(MassaMola*0.3)+1} Massa= {MassaMola} />
                </div>
              
                <div style={{marginLeft: '50px', width: '220px'}}>
                  <div style={{display: 'flex', alignItems: 'baseline'}}>
                    <p style={{fontWeight: "bold", marginRight: '10px'}}>Carga P em (g): </p>
                    <button className='btn-demo' onClick={BtnDiminuiMassaMola}>-</button>
                    <p style={{marginLeft: '10px', marginRight: '10px'}}>{MassaMola}</p>
                    <button className='btn-demo' onClick={BtnSomaMassaMola}>+</button>
                  </div>
                  <div style={{display: 'flex'}}>
                    <p style={{fontWeight: "bold"}}>Encurtamento (cm): </p>
                    <p style={{marginLeft: '10px'}}>{MassaMola >= 10 ? 0 : (MassaMola-10)*-1}</p>
                  </div>
              
                  <div style={{display: 'flex'}}>
                    <p style={{fontWeight: "bold"}}>Trabalho (g x cm): </p>
                    <p style={{marginLeft: '10px'}}>{MassaMola >= 10 ? 0 : ((MassaMola-10)*-1)*MassaMola}</p>
                  </div>
              
                </div>
              </div>
              <div>
                <h2 className=''> 
                  Tarefa 1:
                </h2>

                <p>
                  Teste a mola com diferente cargas P, e procure enteder 
                  a relação entre encurtamento e trabalho realizado 
                  quando ela é esticada por uma carga de 10g e 
                  deixada encurtar com cargas mais leves. 
                </p>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                  <div style={{width: '390px'}} className='code-editor'>
                    <p style={{margin: '0px', color: '#6272a4'}}> // Repare nos limites da carga (P),  </p>
                    <p style={{margin: '0px', color: '#6272a4'}}> // o comportamento da mola e o trabalho realizado.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else if (content === limEsq + 3) {
        return (
          <div className='card-demo' style={{ textAlign: 'justify' }}>
            <h2 className=''>Teste 1:</h2>
            <p>Com base nos dados experimentais, escolha o gráfico que melhor representa o Trabalho (g x cm) em função da Carga (P) (g):</p>
            <ImageSelection />



          </div>
        );
      } else if (content === limDir) {
        return (
          <div className='card-demo' style={{ textAlign: 'justify' }}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <div className='img-fundoBranco' style={{width: '50%', height: '20em'}}>
                <img style={{ maxWidth: '100%', maxHeight: '100%' }} src={muscleMola} alt='muscleMola' />  
              </div>              
            </div>
            <div>
              <p style={{textIndent: '2em'}}>
                Relações de carga e trabalho, como as observadas em uma mola, 
                também descrevem a influência da carga no trabalho realizado 
                por um músculo ativado. Essa semelhança levou os primeiros 
                fisiologistas a acreditar que a transição do repouso para a 
                atividade envolvia a formação de novas ligações semelhantes a 
                molas em músculos. Embora essa teoria tenha sido posteriormente 
                refutada, ela foi fundamental para o desenvolvimento da nossa 
                compreensão moderna da energia muscular.
              </p>
            </div>
          </div>
        );
      }  
    };
  
    return (
      <div>
  
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={ButtonClickBE} className='button-demo'>
            <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          </div>
  
          {renderContent()}

   
          { content === limDir ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <button onClick={goToAboutPage} className='button-demo'>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          ): (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <button onClick={ButtonClickBD} className='button-demo'>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
          </div>
          )}
  
 
        </div>
  
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <PageIndicator currentPage={content} />
        </div>
        
      </div>
    );
  };
  
  const PageIndicator = ({ currentPage }) => {
    return (
      <div className="page-indicator">
        <div className={`indicator ${currentPage === 0 ? 'active' : ''}`}></div>
        <div className={`indicator ${currentPage === 1 ? 'active' : ''}`}></div>
        <div className={`indicator ${currentPage === 2 ? 'active' : ''}`}></div>
        <div className={`indicator ${currentPage === 3 ? 'active' : ''}`}></div>
        <div className={`indicator ${currentPage === 4 ? 'active' : ''}`}></div>
      </div>
    );
  };
  
  export default Demo;