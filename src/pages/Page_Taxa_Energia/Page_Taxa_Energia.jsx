import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../style-page-cards.css';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Lab_Taxa_Energia from './Lab_Taxa_Energia.jsx';
import Verifica_BP0 from './Verifica_BP0.jsx';

import Perguntas_alternativas from '../../components/Perguntas_alternativas.jsx';


const Page_Taxa_Energia = () => {
    const navigate = useNavigate();

    const [content, setContent] = useState(0);

    const limDir = 5;
    const limEsq = 0;

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

    const goToAboutPage = () => {
      navigate('/PageForcavelocidade');
    };


    const renderContent = () => {
      if (content === limEsq) {
          return (
            <div style={{marginTop: '0px'}}>

              <div className='card-demo' style={{ textAlign: 'justify'}} >
                <div style={{ display: 'grid', gridTemplateColumns: '60% 40%'}}>
                  <div style={{marginRight: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                      
                    <h2>Relação Taxa de Energia Extra - Força</h2>

                    <p style={{textIndent: '2em'}}>
                      A energia adicional liberada além da 
                      contração isométrica consiste no trabalho
                       mecânico realizado e no calor extra gerado, o "Calor de Encurtamento", 𝑎𝑥.
                    </p>

                    <p>
                      Se o músculo levantar uma carga de 𝑃g, 
                      o trabalho realizado será 𝑃𝑥. Assim, a 
                      energia total em excesso pode ser expressa como:
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div className="img-fundoBranco" style={{ backgroundColor: '#052836', width: '80%', display: 'flex', justifyContent: 'center'}}>
                          <div>
                            <p> ℎ = 𝑃𝑥 + 𝑎𝑥 = (𝑃 + 𝑎)𝑥 </p>
                          </div>
                      </div>
                    </div>

                    <p>Logo a Taxa de Energia Extra pode ser expressa como:</p>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="img-fundoBranco" style={{ backgroundColor: '#052836', width: '80%', display: 'flex', justifyContent: 'center'}}>
                            <div>
                              <p> 𝑑ℎ/𝑑𝑡 = (𝑃 + 𝑎)𝑣</p>
                            </div>
                        </div>
                      </div>


                  </div>

                  
                <div style={{marginLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

                    <div>
                      <ul>
                        <li>
                          <strong>Experimento 1:</strong>
                          <p>
                            Encurte o músculo a uma distância fixa e meça a Taxa de Energia Extra utilizando diferentes velocidades de encurtamento.
                          </p>
                        </li>
                        <li>
                          <strong>Experimento 2:</strong>
                          <p>
                          Realize uma contração isométrica onde a distância de encurtamento (𝑥 = 0) e registre a Taxa de Energia Extra.
                          </p>
                        </li>
                        </ul>
                    </div>
                </div>

                </div>
              </div>
            </div>
          );

        } else if (content === limEsq + 1) {
          return (
            <div style={{marginTop: '0px'}}>
              <div className='card-demo' style={{ textAlign: 'justify'}} >
                <Lab_Taxa_Energia />
              </div>
            </div>
          );



      } else if (content === limEsq + 2) {
        return (
          <div style={{marginTop: '0px'}}>
            <div className='card-demo' style={{ textAlign: 'justify'}} >
            <div>
              <Perguntas_alternativas
                perguntaTexto={
                  'Qual é o efeito da velocidade de encurtamento sobre a taxa de energia liberada?'
                }
                alternativas={
                  [
                    'a) A taxa aumenta com o aumento da velocidade de encurtamento.',
                    'b) A taxa permanece constante, independentemente da velocidade de encurtamento. ',
                    'c) A taxa diminui com o aumento da velocidade de encurtamento.',
                    'd) A taxa é zero independentemente da velocidade de encurtamento.'
                  ]
                }
                respostaCorreta={
                  'a) A taxa aumenta com o aumento da velocidade de encurtamento.'
                }
              />
            </div>
            </div>
          </div>
        );

        } else if (content === limEsq + 3) {
            return (
              <div style={{marginTop: '0px'}}>
                <div className='card-demo' style={{ textAlign: 'justify'}} >
                <div>
                  <Perguntas_alternativas
                    perguntaTexto={'Durante uma contração isométrica, onde o encurtamento muscular (𝑥=0), qual é o valor da taxa de energia extra?'}
                    alternativas={
                      [
                      'a) A taxa de energia extra será máxima, pois o músculo está em contração máxima.',
                      'b) A taxa de energia extra será nula, pois não há encurtamento muscular.',
                      'c) A taxa de energia extra aumenta rapidamente no início e depois estabiliza.',
                      'd) Nenhuma das anteriores.'
                      ]
                    }
                    respostaCorreta={'b) A taxa de energia extra será nula, pois não há encurtamento muscular.'}
                  />
                </div>
                </div>
              </div>
            );

      } else if (content === limEsq + 4) {
        return (
          <div style={{marginTop: '0px'}}>
            <div className='card-demo' style={{ textAlign: 'justify'}} >
            <div>
              <Perguntas_alternativas
                perguntaTexto={' Qual tipo de função melhor descreve a relação entre a Taxa de energia extra e a força?'}
                alternativas={
                  [
                  'a) Função linear, onde a Taxa de energia extra é inversamente proporcional à força.',
                  'b) Função exponencial, onde a Taxa de energia extra aumenta exponencialmente com a força.',
                  'c) Função quadrática, onde a Taxa de energia extra é proporcional ao quadrado da força.',
                  'd) Função logarítmica, onde a Taxa de energia extra aumenta logaritmicamente com a força.'
                  ]
                }
                respostaCorreta={'a) Função linear, onde a Taxa de energia extra é inversamente proporcional à força.'}
              />
            </div>
            </div>
          </div>
        );

      } else if (content === limDir) {
        return (
          <div style={{marginTop: '0px'}}>

            <div className='card-demo' style={{ textAlign: 'justify'}} >
              <div style={{ display: 'grid', gridTemplateColumns: '45% 55%'}}>
                <div style={{marginRight: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <h2>
                    Excelente trabalho!
                    </h2>
                    <p style={{textIndent: '2em'}}>
                      Você observou que a taxa de energia extra liberada é 
                      inversamente proporcional à velocidade de encurtamento 
                      e tem uma relação linear com a força 𝑃. Portanto, a 
                      equação que descreve a taxa de energia extra pode ser 
                      expressa como:
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div className="img-fundoBranco" style={{ backgroundColor: '#052836', width: '80%', display: 'flex', justifyContent: 'center'}}>
                          <div>
                           <p>
                            𝑑ℎ/𝑑𝑡 = (𝑃 + 𝑎)𝑣 = -𝑏𝑃 + 𝑐
                           </p>
                          </div>
                      </div>
                    </div>

                    <p>
                      Onde 𝑏 é a constante que representa a inclinação da relação 
                      entre a taxa de energia extra e a força 𝑃 e 𝑐  a constante 
                      que representa o valor da taxa de energia extra quando a força 𝑃 é zero.
                    </p>
              </div>

              <div style={{marginLeft: '10px', display: 'flex', flexDirection: 'column'}}>
                <p style={{textIndent: '2em'}}>
                  Como o excesso de calor devido ao encurtamento deve ser zero em 
                  uma contração isométrica, a constante 𝑐 deve ser igual a 𝑏𝑃0, onde 
                  𝑃0 é a força isométrica. Incorporando essa condição, a equação de 
                  Hill é dada por:
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                      <div className="img-fundoBranco" style={{ backgroundColor: '#052836', width: '80%', display: 'flex', justifyContent: 'center'}}>
                          <div>
                           <p>
                            𝑑ℎ/𝑑𝑡 = (𝑃 + 𝑎)𝑣 = 𝑏(𝑃 - 𝑃0)
                           </p>
                          </div>
                      </div>

                      <Verifica_BP0 />
                    </div>


              </div>

              </div>
            </div>
          </div>
        );

      }  
    };
  
    return (
      <div>
  
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          { content === limEsq ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button onClick={ButtonClickBE} className='button-inv'>
                {/* <FontAwesomeIcon icon={faChevronLeft} /> */}
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button onClick={ButtonClickBE} className='button-demo'>
              <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            </div>
          )}
    
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
  
        {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <PageIndicator currentPage={content} />
        </div> */}
        
      </div>
    );
  };
  
  // const PageIndicator = ({ currentPage }) => {
  //   return (
  //     <div className="page-indicator">
  //       <div className={`indicator ${currentPage === 0 ? 'active' : ''}`}></div>
  //       <div className={`indicator ${currentPage === 1 ? 'active' : ''}`}></div>
  //       <div className={`indicator ${currentPage === 2 ? 'active' : ''}`}></div>
  //       <div className={`indicator ${currentPage === 3 ? 'active' : ''}`}></div>
  //       <div className={`indicator ${currentPage === 4 ? 'active' : ''}`}></div>
  //       <div className={`indicator ${currentPage === 5 ? 'active' : ''}`}></div>
  //     </div>
  //   );
  // };
  
  export default Page_Taxa_Energia;