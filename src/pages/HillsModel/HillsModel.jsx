import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../style-page-cards.css';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import img_hill_model from '../../assets/img/img-hill-model.png'


const HillsModel = () => {
    const navigate = useNavigate();

    const [content, setContent] = useState(0);

    const limDir = 0;
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
      navigate('/PageForcaComprimento');
    };


    const renderContent = () => {
      if (content === limDir) {
        return (
          <div style={{marginTop: '0px'}}>
            <div className='card-demo' style={{ textAlign: 'justify' }} >
              <div style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>

                <div style={{display: 'flex', justifyContent: 'center', marginRight: '10px', flexDirection: 'column'}}>
                  
                  <h1>The Hill's Model</h1>
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
      </div>
    );
  };
  
  export default HillsModel;