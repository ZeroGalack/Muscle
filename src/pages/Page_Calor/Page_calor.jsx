import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../style-page-cards.css';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Lab_calor from './Lab_calor.jsx';
import Verifica_A from './Verifica_A.jsx';

import Perguntas_alternativas from '../../components/Perguntas_alternativas.jsx';


const Page_Calor = () => {
    const navigate = useNavigate();

    const [content, setContent] = useState(0);

    const [resultado, setResultado] = useState(null);

    const handleResultado = (resultado) => {
      setResultado(resultado);
    };

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
      navigate('/PageTaxaEnergia');
    };


    const renderContent = () => {
      if (content === limEsq) {
          return (
            <div style={{marginTop: '0px'}}>
              <div className='card-demo' style={{ textAlign: 'justify'}} >
                <div style={{ display: 'grid', gridTemplateColumns: '50% 50%'}}>
                  <div style={{marginRight: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  <h1 className='titulo'>Relação Comprimento-Velocidade-Calor:</h1>
                      <p style={{textIndent: '2em'}}> 
                        Hill estudou a relação entre calor, velocidade e encurtamento muscular. 
                        Ele observou que, durante o encurtamento, além do calor liberado em uma contração isométrica, 
                        ocorre um excesso de calor.
                      </p>
                      <p style={{textIndent: '2em'}}> 
                        Para verificar suas descobertas, 
                        realize os seguintes experimentos 
                        para observar como o <span className='destaque_calor'>calor liberado </span> 
                        varia com a <span className='destaque_comprimento'>distância de encurtamento </span>
                        e a <span className='destaque_velocidade'> velocidade de encurtamento</span>. 
                      </p>
                    </div>
                    <div style={{marginLeft: '10px'}}>
                    <div className="experimentos_card" >
                      <ul>
                        <li>
                          <strong>Experimento 1:</strong>
                          <p>
                          Encurte o músculo a uma <span>distância fixa</span> e meça a força utilizando <span>diferentes velocidades</span>.
                          </p>
                        </li>
                        <li>
                          <strong>Experimento 2:</strong>
                          <p>
                            Mantenha a <span>velocidade fixa</span> e meça a quantidade de calor liberada utilizando <span>diferentes distâncias</span> de encurtamento.
                          </p>
                        </li>
                        <li>
                          <strong>Experimento 3:</strong>
                          <p>
                          Realize uma contração <span>isométrica </span>onde a distância de encurtamento <span>(𝑥 = 0) </span>e registre a quantidade de calor liberada.
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
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <h1 style={{ fontFamily: 'Times New Roman' }}>Lab. Comprimento - Velocidade - Calor</h1>
              <div className='card-demo' style={{ textAlign: 'justify'}} >
                <Lab_calor />
              </div>
              <h1>‎</h1>
            </div>
          );

        } else if (content === limEsq + 2) {
          return (
            <div style={{marginTop: '0px'}}>
              <div className='card-demo' style={{ textAlign: 'justify'}} >
              <div>
                <Perguntas_alternativas
                  perguntaTexto={
                    'Como o excesso de calor varia quando se usa diferentes velocidades de encurtamento, mantendo a distância de encurtamento constante?'
                  }
                  alternativas={
                    [
                      'a) O calor liberado aumenta com a velocidade de encurtamento.',
                      'b) O calor liberado diminui com a velocidade de encurtamento.',
                      'c) O calor liberado permanece constante independentemente da velocidade de encurtamento.',
                      'd) O calor liberado é zero para todas as velocidades de encurtamento'
                    ]
                  }
                  respostaCorreta={
                    'c) O calor liberado permanece constante independentemente da velocidade de encurtamento.'
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
                  perguntaTexto={
                    'Qual é o efeito da distância de encurtamento (𝑥) sobre o excesso de calor, mantendo a velocidade de encurtamento constante?'
                  }
                  alternativas={
                    [
                      'a) O calor liberado diminui com o aumento da distância de encurtamento.',
                      'b) O calor liberado aumenta com o aumento da distância de encurtamento.',
                      'c) O calor liberado permanece constante, independentemente da distância de encurtamento. ',
                      'd) O calor liberado é zero independentemente da distância de encurtamento.'
                    ]
                  }
                  respostaCorreta={
                    'b) O calor liberado aumenta com o aumento da distância de encurtamento.'
                  }
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
                  perguntaTexto={' Qual tipo de função melhor descreve a relação entre o excesso de calor e o encurtamento?'}
                  alternativas={
                    [
                    'a) Função linear, onde a excesso de calor extra é diretamente proporcional à encurtamento.',
                    'b) Função exponencial, onde a excesso de calor extra aumenta exponencialmente com a encurtamento.',
                    'c) Função quadrática, onde a excesso de calor extra é proporcional ao quadrado da encurtamento.',
                    'd) Função logarítmica, onde a excesso de calor extra aumenta logaritmicamente com a encurtamento.'
                    ]
                  }
                  respostaCorreta={'a) Função linear, onde a excesso de calor extra é diretamente proporcional à encurtamento.'}
                />
              </div>
              </div>
            </div>
          );

        } else if (content === limDir) {
          return (
            <div style={{marginTop: '0px'}}>

              <div className='card-demo' style={{ textAlign: 'justify'}} >
                <div style={{ display: 'grid', gridTemplateColumns: '55% 45%'}}>
                  <div style={{marginRight: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                      <h2>
                      Ótimo trabalho!
                      </h2>
                      <p style={{textIndent: '2em'}}>
                        Você identificou que o excesso de calor 
                        liberado durante o encurtamento muscular 
                        depende diretamente do encurtamento e tem 
                        uma relação linear com ele. Este componente 
                        do calor liberado é conhecido como "
                        Shortening Heat" ou "Calor de Encurtamento", 
                        conforme descrito por Hill.
                      </p>
                      <p>
                      A fórmula para o "Shortening Heat" é:
                      </p>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="img-fundoBranco" style={{ backgroundColor: '#052836', width: '80%', display: 'flex', justifyContent: 'center'}}>
                            <div>
                             <p> Shortening Heat = 𝑎𝑥 </p>
                            </div>
                        </div>
                      </div>

                      <p>
                        onde 𝑎 é uma constante e 𝑥 é a quantidade de encurtamento muscular.
                      </p>
                </div>

                <div style={{marginLeft: '10px', display: 'flex', flexDirection: 'column'}}>
                  <Verifica_A  onResultado={handleResultado} />
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
  //       <div className={`indicator ${currentPage === 4 ? 'active' : ''}`}></div>
  //     </div>
  //   );
  // };
  
  export default Page_Calor;