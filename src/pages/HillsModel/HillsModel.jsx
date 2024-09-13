import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../style-page-cards.css';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import img_hill_model from '../../assets/img/img-hill-model.png'
import Iso_toni from '../../assets/img/Iso_toni.png'



const HillsModel = () => {
    const navigate = useNavigate();

    const [content, setContent] = useState(0);

    const limEsq = 0;
    const limDir = 1;

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
      navigate('/PageForcaComprimento');
    };


    const renderContent = () => {
      if (content === limEsq) {
        return (
          <div style={{marginTop: '0px'}}>
            <div className='card-demo' style={{ textAlign: 'justify' }} >
              <div style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>

                <div style={{display: 'flex', justifyContent: 'center', marginRight: '10px', flexDirection: 'column'}}>
                  
                  <h1 className='titulo'  >The Hill's Model:</h1>

                    <p style={{textIndent: '2em'}}>
                      O modelo de Hill de dois elementos é uma representação
                      biomecânica simplificada do comportamento muscular, que
                      inclui dois componentes principais: o elemento contrátil
                      (LCE) e o elemento elástico em série (LSE).
                    </p>              
                </div>

                <div style={{display: 'flex', alignItems: 'center', marginLeft: '10px'}}>
         
                    <div className="img-fundoBranco" style={{ width: '100%', height: '100%', alignItems: 'center'}}>
                      <img src={img_hill_model} alt="img_hill_model" style={{ height:'90%', maxWidth: '90%', maxHeight: '100%' }} />
                    </div>
        
                  </div>
      
                </div>
              </div>
            </div>
        ); 
      
      }  

      if (content === limDir) {
        return (
          <div style={{marginTop: '0px'}}>
            <div className='card-demo' style={{ textAlign: 'justify' }} >
              <div style={{ display: 'grid', gridTemplateColumns: '55% 45%' }}>

                <div style={{display: 'flex', justifyContent: 'center', marginRight: '10px', flexDirection: 'column'}}>
                                  
                  <div className="experimentos_card" >
                    <h1 className='titulo' style={{paddingLeft: '5%'}} >Alguns termos:</h1>
                      <ul>
                        <li>
                          <strong>Contração isotônica:</strong>
                          <p>
                          Ocorre quando o músculo <span>gera força</span> e <span>altera seu comprimento</span>. 
                          </p>
                          <p><span style={{color: '#f12c2c'}}>Exemplo: </span>Levantar e abaixar um halter envolve contrações isotônicas.</p>
                        </li>
                        <li>
                          <strong>Contração isométrica:</strong>
                          <p>
                          Ocorre quando o músculo <span>gera força sem alterar seu comprimento</span>, mantendo-se em uma posição fixa.
                          </p>
                          <p><span style={{color: '#f12c2c'}}>Exemplo: </span>Empurrar contra uma parede ou segurar um peso na mesma posição sem movimento.</p>
                        </li>
         
                      </ul>
                    </div>

                    
                </div>

                <div style={{display: 'flex', alignItems: 'center', marginLeft: '10px'}}>
         
                <div className="img-fundoBranco" style={{ backgroundColor: '#bbb4d6', width: '100%', height: '80%', alignItems: 'center'}}>
                    <img src={Iso_toni} alt="Iso_toni" style={{ height:'100%', maxWidth: '100%', maxHeight: '100%' }} />
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
      </div>
    );
  };
  
  export default HillsModel;