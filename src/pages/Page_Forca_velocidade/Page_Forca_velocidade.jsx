import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../style-page-cards.css';


import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Lab_Forca_velocidade from './Lab_Forca_velocidade.jsx';
import Verifica_K from './Verifica_K.jsx';

import Perguntas_alternativas from '../../components/Perguntas_alternativas.jsx';


const Page_Forca_velocidade = () => {
    const navigate = useNavigate();

    const [content, setContent] = useState(0);

    const [resultado, setResultado] = useState(null);

    const limDir = 5;
    const limEsq = 0;

    const handleResultado = (resultado) => {
      setResultado(resultado);
    };

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
      navigate('/home');
    };


    const renderContent = () => {
      if (content === limEsq) {
        
        return (
          <div style={{marginTop: '0px'}}>

            <div className='card-demo' style={{ textAlign: 'justify'}} >
              <div style={{ display: 'grid', gridTemplateColumns: '50% 50%'}}>
                <div style={{marginRight: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    
                  <h2>Relação Força - velocidade</h2>

                  <p style={{textIndent: '2em'}}>
                    Nas atividades anteriores, você deve ter 
                    notado que a força está relacionada com a 
                    velocidade. Isso está correto. Agora, neste 
                    último capítulo, exploraremos essa relação mais 
                    detalhadamente. Realize alguns experimentos para
                    confirmar e aprofundar sua compreensão desse conceito.
                  </p>

                </div>

              <div style={{marginLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

                  <div>
                    <ul>
                      <li>
                        <strong>Experimento 1:</strong>
                        <p>
                          Encurte o músculo a uma distância fixa e meça a força utilizando diferentes velocidades de encurtamento.
                        </p>
                      </li>
                      <li>
                        <strong>Experimento 2:</strong>
                        <p>
                        Realize uma contração isométrica onde a distância de encurtamento (𝑥 = 0) e registre a força.
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
              <Lab_Forca_velocidade />
            </div>
          </div>
        );


      } else if (content === limEsq + 2) {
        return (
          <div style={{marginTop: '0px'}}>
            <div className='card-demo' style={{ textAlign: 'justify'}} >
            <div>
              <Perguntas_alternativas
                perguntaTexto={'Durante uma contração isométrica, onde o encurtamento muscular (𝑥=0), a força é igual a?'}
                alternativas={
                  [
                  'a) 𝑃 = 0',
                  'b) 𝑃 = 𝑎',
                  'c) 𝑃 = 𝑃0',
                  'd) 𝑃 = 𝑘'
                  ]
                }
                respostaCorreta={'c) 𝑃 = 𝑃0'}
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
                perguntaTexto={'Qual é o efeito da velocidade de encurtamento sobre a força durante uma contração muscular?'}
                alternativas={
                  [
                  'a) A força aumenta à medida que a velocidade de encurtamento aumenta.',
                  'b) A força diminui à medida que a velocidade de encurtamento aumenta.',
                  'c) A força permanece constante independentemente da velocidade de encurtamento.',
                  'd) A força varia de forma não relacionada com a velocidade de encurtamento.'
                  ]
                }
                respostaCorreta={'b) A força diminui à medida que a velocidade de encurtamento aumenta.'}
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
                perguntaTexto={'No gráfico força 𝑃 em função da velocidade 𝑣, que forma de curva você observa?'}
                alternativas={
                  [
                  'a) Linear',
                  'b) Exponencial',
                  'c) Hiperbólica',
                  'd) Logarítmica'
                  ]
                }
                respostaCorreta={'c) Hiperbólica'}
              />
            </div>
            </div>
          </div>
        );


      } else if (content === limDir) {
        return (
          <div style={{marginTop: '0px'}}>

            <div className='card-demo' style={{ textAlign: 'justify'}} >
              <div style={{ display: 'grid', gridTemplateColumns: '50% 50%'}}>
                <div style={{marginRight: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    
                  <h2>Parabéns!</h2>

                  <p style={{textIndent: '2em'}}>
                  Você identificou corretamente que o gráfico da relação entre 
                  a força 𝑃 e a velocidade 𝑣 tem a forma da classica
                  relação hiperbólica de Hill.
                  </p>

                  <p>
                  A equação que descreve essa relação é:
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div className="img-fundoBranco" style={{ backgroundColor: '#052836', width: '80%', display: 'flex', justifyContent: 'center'}}>
                          <div>
                           <p>
                            (𝑃 + 𝑎)(𝑣 + 𝑏) = 𝑘
                           </p>
                          </div>
                      </div>
                    </div>
                  <p>
                    Onde 𝑘 é uma constante que define a forma da hipérbole.
                  </p>

                </div>

              <div style={{marginLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Verifica_K  onResultado={handleResultado} />
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

          <div>
            {resultado ? (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button onClick={goToAboutPage} className='button-demo'>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            ) : 
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button className='button-demo'>
                  {/* <FontAwesomeIcon icon={faChevronRight} /> */}
                </button>
              </div>}
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
  
  export default Page_Forca_velocidade;