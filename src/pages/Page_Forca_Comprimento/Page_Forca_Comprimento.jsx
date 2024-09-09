import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../style-page-cards.css';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Lab_forca_comprimento from './Lab_forca_comprimento';
import Verifica_Alpha from './Verifica_Alpha.jsx';
import Perguntas_alternativas from '../../components/Perguntas_alternativas.jsx';


const Page_Forca_Comprimento = () => {
    const navigate = useNavigate();

    const [content, setContent] = useState(0);

    const limDir = 4;
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
      navigate('/PageCalor');
    };


    const renderContent = () => {
      if (content === limEsq) {
          return (
            <div style={{marginTop: '0px'}}>
              <div className='card-demo' style={{ textAlign: 'justify'}} >
              
                  <div style={{ display: 'grid', gridTemplateColumns: '45% 55%' }}>

                    <div style={{ marginRight: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                      <h2>Relação Força-Comprimento</h2>

                      <p style={{ textIndent: '2em'}}>
                        O elemento elástico é modelado como uma estrutura similar a uma mola, cujo comprimento é representado por 𝐿𝑠𝑒.
                        Já o comprimento do elemento contrátil é denotado por 𝐿𝑐𝑒, enquanto 𝐿 refere-se ao comprimento total do músculo.
                      </p>

             
                      </div>

                      <div style={{marginLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

                      <div>
                        <ul>
                          <li>
                            <strong>Experimento 1:</strong>
                            <p>
                              Realize uma contração isométrica onde a distância de encurtamento (𝑥=0) e observe o comportamento dos elementos 𝐿𝑐𝑒 e 𝐿𝑠𝑒.
                            </p>
                          </li>
                          <li>
                            <strong>Experimento 2:</strong>
                            <p>
                            Experimente o modelo variando a velocidade de contração e os diferentes encurtamentos e observe o comportamento dos elementos 𝐿𝑐𝑒 e 𝐿𝑠𝑒, bem como a geração de força 𝑃
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
                <Lab_forca_comprimento />
              </div>
            </div>
          );

        } else if (content === limEsq + 2) {
          return (
            <div style={{marginTop: '0px'}}>
              <div className='card-demo' style={{ textAlign: 'justify'}} >
              <div>
                <Perguntas_alternativas
                  perguntaTexto={'Em uma contração Isométrica (?), como se comportam os elementos 𝐿, 𝐿𝑐𝑒 e 𝐿𝑠𝑒?'}
                  alternativas={
                    [
                    'a) O comprimento do elemento contrátil e do elemento elástico em série permanecem constantes. A equação correspondente é 𝐿 = 𝐿𝑐𝑒 × 𝐿𝑠𝑒.',
                    'b) O comprimento do elemento contrátil diminui, enquanto o comprimento do elemento elástico em série aumenta, compensando-se mutuamente. A equação correta é 𝐿 = 𝐿𝑐𝑒 + 𝐿𝑠𝑒.',
                    'c) O comprimento do elemento contrátil aumenta, enquanto o comprimento do elemento elástico em série diminui. A equação correspondente é 𝐿 = 𝐿𝑐𝑒 − 𝐿𝑠𝑒.',
                    'd) O comprimento do elemento contrátil e o comprimento do elemento elástico em série aumentam simultaneamente. A equação correspondente é 𝐿 = 𝐿𝑐𝑒/𝐿𝑠𝑒.'
                    ]
                  }
                  respostaCorreta={'b) O comprimento do elemento contrátil diminui, enquanto o comprimento do elemento elástico em série aumenta, compensando-se mutuamente. A equação correta é 𝐿 = 𝐿𝑐𝑒 + 𝐿𝑠𝑒.'}
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
                  perguntaTexto={'Em uma contração isotônica (?), o que ocorre com a força gerada pelo músculo quando o comprimento do músculo é reduzido?'}
                  alternativas={
                    [
                      'a) A força inicialmente aumenta à medida que o elemento contrátil atinge sua velocidade máxima e depois diminui rapidamente à medida que o elemento elástico se alonga.',
                      'b) A força permanece constante durante todo o processo de encurtamento do elemento contrátil e não é afetada pelo comportamento do elemento elástico.',
                      'c) A força diminui gradualmente e continua a diminuir à medida que o elemento contrátil se encurta, sem recuperação.',
                      'd) A força inicialmente diminui devido ao encurtamento rápido do elemento contrátil, mas então se recupera quando o elemento contrátil começa a reesticar o elemento elástico.'
                    ]
                  }
                  respostaCorreta={'d) A força inicialmente diminui devido ao encurtamento rápido do elemento contrátil, mas então se recupera quando o elemento contrátil começa a reesticar o elemento elástico.'}
                />
              </div>
              </div>
            </div>
          );


        } else if (content === limDir) {
          return (
            <div style={{marginTop: '0px'}}>
              <div className='card-demo' style={{ textAlign: 'justify'}} >
                <Verifica_Alpha />
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

  //     </div>
  //   );
  // };
  
  export default Page_Forca_Comprimento;