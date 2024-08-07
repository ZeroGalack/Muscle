import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style-page-cards.css';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import img_hill_model from '../../assets/img/img-hill-model.png'
import { VscRunAll } from "react-icons/vsc";

import TesteAlpha from '../../assets/img/Teste-alpha.png'

import CalorTensao from '../../assets/img/CalorTensao.png'
import CalorIsometrico from '../../assets/img/CalorIsometrico.png'

import ax from '../../assets/img/ax.png'


import LabHills from './LabHills';

const Demo = () => {
    const navigate = useNavigate();

    const [content, setContent] = useState(0);

    const limDir = 8;
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
  
  const [alphaValue, setalphaValue] = useState(null);
  const Enviar_alpha = () => {
    const input_aplha = document.getElementById('input_alpha').value;


    const target_value = 1449.0272;
    const epsilon = 0.1; // Tolerância para a comparação aproximada

    if (Math.abs(input_aplha - target_value) < epsilon) {
      setalphaValue(true);
    }
    else {
      setalphaValue(false);
    }

    fetch('http://localhost:5000/TesteAlpha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ alpha: input_aplha}),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Resposta do servidor (Enviar_alpha):', data);;
        
      })
      .catch(error => {
        console.error('Erro ao enviar dados:', error);
      });
  };




    const goToAboutPage = () => {
      navigate('/home');
    };


    const renderContent = () => {
      if (content === limEsq) {
        return (
            <div className='card-demo' style={{ textAlign: 'justify' }} >
              <div style={{display: 'flex'}}>

                <div style={{marginRight: '20px'}}>
                  
                  <h1>Capítulo 2 - <h2>The Hill's Model:</h2></h1>
                    <p style={{textIndent: '2em'}}>
                      O modelo de Hill de dois elementos é uma representação
                      biomecânica simplificada do comportamento muscular, que
                      inclui dois componentes principais: o elemento contrátil
                      (CE) e o elemento elástico em série (SEE).
                    </p>
                    <p style={{textIndent: '2em'}}>
                    Ele recebe duas entradas: 𝐿 (comprimento do músculo) e 𝑡 (número de passos). 
       
                    E retorna quatro valores: força (𝑃), calor (𝐻), tamanho do elemento elástico 
                    (𝐿𝑠𝑒) e tamanho do elemento contrátil (𝐿𝑐𝑒). Irei explicar isso em mais detalhes 
                    posteriormente.
                  </p>
                                      
                </div>

                <div style={{display: 'flex', alignItems: 'center'}}>
         
                    <div className="img-fundoBranco" style={{ width: '100%', height: '90%', alignItems: 'center'}}>
                      <img src={img_hill_model} alt="img_hill_model" style={{ maxWidth: '95%', maxHeight: '100%' }} />
                    </div>
        
                </div>
           

              </div>
            </div>
        );
      } else if (content === limEsq + 1) {
        return (
          <div className='card-demo' style={{ textAlign: 'justify'}} >
            <LabHills />
          </div>
        ); 
      } else if (content === limEsq + 2) {
          return (
            <div className='card-demo' style={{ textAlign: 'justify'}} >
              <div style={{ display: 'grid', gridTemplateColumns: '50% 50%'}}>
                <div style={{marginRight: '10px'}}>
                  <h2>Desafios: </h2>

                  <p style={{textIndent: '2em'}}>
                    <p>
                      Com base nos experimentos realizados no Lab Hill, 
                      explore os pontos críticos de Hill e as relações 
                      Força-Velocidade e Comprimento-Calor.
                    </p>

                    <p>
                      Sua missão na relação Comprimento-Calor será 
                      descobrir a equação do "Shortening Heat" 
                      (Calor de Encurtamento).
                    </p>
                  </p>
                  
                    <div className='code-editor'>
                      <p style={{margin: '0px', color: '#6272a4'}}>// Obs: Shortening Heat só aparece na </p>
                      <p style={{margin: '0px', color: '#6272a4'}}>// contração isométrica.</p> 
                    </div>
                  </div>  

                <div>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className='code-editor' style={{display: 'flex', flexDirection: 'row'}}>
                      <label  className="input-label" htmlFor='input_alpha'> Shortening Heat <span className='pink'>= </span></label>
                      <input style={{width: '100px'}} type='text' id='input_alpha' placeholder=''/>
                    </div>
                    <div style={{marginLeft: '10px'}} className='btn-run'>
                      <VscRunAll onClick={Enviar_alpha} size={20}/>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ); 

      } else if (content === limEsq + 10) {
        return (
            <div className='card-demo' style={{ textAlign: 'justify'}} >
              <div style={{display: 'grid', gridTemplateColumns: '47% 53%'}}>

                <div style={{marginRight: '10px'}}>
                  <h1>Força (𝑃)</h1>
                  <p style={{textIndent: '2em'}}>
                    Durante uma contração, a força gerada pelo elemento contrátil 𝐿𝑐𝑒
                    é igual à força de estiramento do elemento elástico em série 𝐿𝑠𝑒. Essa força, 𝑃,
                    é assumida como sendo proporcional ao deslocamento no 𝐿𝑠𝑒 (Lei de Hooke),
                    conforme descrito abaixo:
                  </p>
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                    <p style={{margin: '0px'}}> 𝑃 = 𝛼(𝐿𝑠𝑒 −𝐿𝑠𝑒(0))</p>
                  </div>
                  <p>
                    onde, α é o contante da mola e Lse(0) é o comprimento do
                    elemento elástico da série antes da contração.
                  </p>
                  <h2> Teste 1: </h2>
                    <p>
                      Use o Lab Hill, e com base nos dados experimentais, descubra o valor aproximado de α:
                    </p>
                </div>

                  <div style={{marginLeft: '10px', display: 'flex', alignItems: 'center'}}>
   
                    <div>
                      <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                          <div className='code-editor' style={{display: 'flex', flexDirection: 'row'}}>
                            <label  className="input-label" htmlFor='input_alpha'> α <span className='pink'>≅ </span></label>
                            <input style={{width: '100px'}} type='text' id='input_alpha' placeholder=''/>
                          </div>
                          <div style={{marginLeft: '10px'}} className='btn-run'>
                            <VscRunAll onClick={Enviar_alpha} size={20}/>
                          </div>
                          <div>
                              {/* Renderiza nada se mostrarResp for null */}
                              {alphaValue === null ? null : (
                                alphaValue ? (
                                  <h2 style={{margin: '0px'}} className='highlight_text-verde'>Reposta Correta</h2>
                                ) : (
                                  <h2 style={{margin: '0px'}} className='highlight_text-red'>  Resposta Incorreta</h2>
                                )
                              )}
                            </div>
                        </div>
                        <img src={TesteAlpha} alt="Selected" style={{ width: '85%', marginTop: '10px' }} />
                      </div>
                    </div>
                  </div>

              </div>
            </div>
        );
      } else if (content === limEsq + 3) {
        return (
            <div className='card-demo' style={{ textAlign: 'justify'}} >

              <div style={{ display: 'grid', gridTemplateColumns: '50% 50%'}}>
                <div style={{marginRight: '10px'}}>
                  <h2 style={{marginTop: '0px'}}>Liberação de calor pelo músculo</h2>

                  <p style={{textIndent: '2em'}}>
                    O músculo libera três tipos de calor: 
                    calor de manutenção, calor inicial e 
                    calor de recuperação. O calor de manutenção 
                    é liberado lentamente pelo músculo em 
                    repouso e não está relacionado à contração. 
                    Os outros dois tipos, o calor inicial e o 
                    calor de recuperação, estão associados à 
                    atividade muscular. O calor inicial é 
                    gerado durante a contração, enquanto o 
                    calor de recuperação é liberado após a 
                    contração atingir seu pico.
                  </p>
                </div>

                <div className="img-fundoBranco" style={{marginLeft: '10px'}}>
                  <img src={CalorTensao} alt="CalorTensao" style={{ maxWidth: '95%', maxHeight: '100%' }} />
                </div>

              </div>
            </div>
        ); } else if (content === limEsq + 4) {
        return (
            <div className='card-demo' style={{ textAlign: 'justify'}} >
              <div style={{ display: 'grid', gridTemplateColumns: '50% 50%'}}>
                <div style={{marginRight: '10px'}}>
                  <h2 style={{marginTop: '0px'}}>Liberação de calor inicial durante a contração isométrica:</h2>
                  <p style={{textIndent: '2em'}}>
                    Dois componentes do calor inicial são 
                    liberados durante uma contração isométrica.
                    O primeiro é o calor de ativação (A),
                    que aparece logo após a 
                    estimulação do músculo. O segundo é um 
                    calor adicional liberado quando a tensão
                    isométrica é mantida [f(P,t)].
                  </p>
                </div>
                <div style={{marginLeft: '10px'}}>
                  <div className="img-fundoBranco">
                    <img src={CalorIsometrico} alt="CalorIsometrico" style={{ maxWidth: '50%'}} />
                  </div>
                  <p>
                    f(P, t) é chamado de calor tensão-tempo e está associado ao trabalho interno (Wi). 
                    A energia total liberada (E) durante uma contração isométrica é, 
                    portanto, descrita pela seguinte equação:
                  </p>
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                    <p style={{margin: '0px'}}>ΔE = A + Wi</p>
                  </div>
                </div>
              </div>  
            </div>
        ); } else if (content === limEsq + 5) {
          return (
              <div className='card-demo' style={{ textAlign: 'justify'}} >
                <div style={{ display: 'grid', gridTemplateColumns: '50% 50%'}}>
                  <div style={{marginRight: '10px'}}>
                    <h2 style={{marginTop: '0px'}}>Liberação de calor inicial durante a contração isotônica:</h2>
                    <p style={{textIndent: '2em'}}>
                      A energia de uma contração isotônica, é mais 
                      complexa do que a de uma contração 
                      isométrica porque a mudança no comprimento 
                      libera duas formas adicionais de energia. 
                      A primeira é o trabalho externo realizado 
                      quando o músculo encurta sob carga. 
                      O segundo componente adicional do 
                      calor inicial é determinado pela 
                      extensão do encurtamento muscular e, 
                      portanto, é chamado de <span style={{fontStyle: 'italic', fontWeight: 'bold'  }}>calor de encurtamento.</span>
                    </p>
                    <p style={{textIndent: '2em'}}>
                      O calor de encurtamento é proporcional à distância que o músculo encurta (x) 
                      e é independente da carga. Se o músculo encurtar uma distância fixa 
                      com diferentes cargas, a quantidade total de calor de encurtamento 
                      permanece a mesma, mas a taxa de liberação de calor 
                      diminui com o aumento da carga.
                    </p>
                      <p style={{textIndent: '2em'}}>
                        Hill introduziu o termo a
                        para quantificar a quantidade de calor liberada por 
                        centímetro de encurtamento, sendo 𝑎𝑥
                        a quantidade total de calor liberada durante o 
                        encurtamento.
                      </p>
                      <div style={{display: 'flex', justifyContent: 'center'}}>
                        <p style={{margin: '0px', marginBottom: '16px'}}>Calor de encurtamento = 𝑎𝑥</p>
                      </div>
                  </div>
                  
                  <div style={{marginLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    
                    
                    <div className="img-fundoBranco">
                      <img src={ax} alt="ax" style={{ maxWidth: '70%'}} />
                    </div>
                    <p style={{fontSize: '12px'}}>
                      Liberação do calor inicial por um músculo 
                      em contração isotônica. O músculo pode 
                      encurtar uma distância constante levantando 
                      uma carga leve (linha tracejada, 1) ou uma 
                      carga pesada (linha pontilhada, 2).
                    </p>

                    <p>
                      Se P g de carga é levantado pelo músculo, 
                      o trabalho realizado é dado como Px.
                    </p>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                      <p style={{margin: '0px'}}>Energia Extra = (Px) + (ax) = (P + a) x</p>
                    </div>
                    <p>
                      A energia total liberada durante uma contração isotônica:
                    </p>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                      <p style={{margin: '0px'}}> ΔE = A + Energia Extra + Wi</p>
                    </div>
                  </div>
                </div>
              </div>
          ); } else if (content === limEsq + 6) {
            return (
                <div className='card-demo' style={{ textAlign: 'justify'}} >
                  <div>
                    <p></p>
                  </div>
                </div>
            ); } else if (content === limEsq + 7) {
              return (
                  <div className='card-demo' style={{ textAlign: 'justify'}} >
                    <p></p>
                  </div>
              );
        
      } else if (content === limDir) {
        return (
            <div className='card-demo' style={{ textAlign: 'justify' }} >
              <p></p>
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
        <div className={`indicator ${currentPage === 5 ? 'active' : ''}`}></div>
        <div className={`indicator ${currentPage === 6 ? 'active' : ''}`}></div>
        <div className={`indicator ${currentPage === 7 ? 'active' : ''}`}></div>
        <div className={`indicator ${currentPage === 8 ? 'active' : ''}`}></div>
      </div>
    );
  };
  
  export default Demo;