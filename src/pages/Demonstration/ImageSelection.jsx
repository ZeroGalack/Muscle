import React, { useState } from 'react';
import graf_test_1 from '../../assets/img/Grafiteste1.png';
import graf_test_2 from '../../assets/img/Grafiteste2.png';
import graf_test_3 from '../../assets/img/Grafiteste3.png';

import './ImageSelection.css';

const ImageSelection = () => {
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imageName) => {
    setSelectedImage(imageName);
  };

  return (
    <div>
      <div className='card-perguntas'>
        <p style={{display: 'flex', justifyContent: 'center', marginBottom: '0px', fontWeight: "bold", color: '#00d9ff'}}>(a)</p>
        <p style={{display: 'flex', justifyContent: 'center', marginBottom: '0px', fontWeight: "bold", color: '#00d9ff'}}>(b)</p>
        <p style={{display: 'flex', justifyContent: 'center', marginBottom: '0px', fontWeight: "bold", color: '#00d9ff'}}>(c)</p>
      </div>
      <div className='card-perguntas'>
        {['graf_test_1', 'graf_test_2', 'graf_test_3'].map((imgName, idx) => (
          <div
            key={imgName}
            style={{
              position: 'relative',
              textAlign: "center",
              width: "97.5%",
              cursor: 'pointer',
              margin: '10px auto',
              
            }}
            onClick={() => handleImageClick(imgName)}
          > 
            <img
              src={{'graf_test_1': graf_test_1, 'graf_test_2': graf_test_2, 'graf_test_3': graf_test_3}[imgName]}
              alt={imgName}
              style={{ width: "100%", height: '100%' }}
              className="hover-effect"
            />
            <div
              className="hover-overlay"
              style={{
                backgroundColor: selectedImage === imgName ? (imgName === 'graf_test_2' ? 'rgba(0, 255, 0, 0.5)' : 'rgba(255, 0, 0, 0.5)') : 'transparent',
              }}
            />
      
          </div>
        ))}
      </div>
           <div> {selectedImage !== '' && (
              <div>
                {selectedImage === 'graf_test_2' ? (
                  <div>
                    <h2 className='highlight_text-verde'>Resposta Correta!!</h2>
                    <p>
                      O gráfico mostra que nenhum trabalho é 
                      realizado quando a carga é máxima 
                      (P = 10 g), pois a mola não pode encurtar 
                      sob essa carga. Da mesma forma, nenhum 
                      trabalho é realizado quando a carga é 
                      mínima (P = 0), apesar do encurtamento 
                      máximo da mola, pois não há força gerada. 
                      O trabalho é máximo em cargas intermediárias.
                    </p>
                  </div>
                ) : (
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h2 className='highlight_text-red '>Resposta errada, tente novamente!!!</h2>
                  </div>
                )}
              </div>
            )}
          </div>
    </div>
  );
};

export default ImageSelection;
