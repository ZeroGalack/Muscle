import React, { useState, useEffect } from 'react';
import { VscRunAll } from 'react-icons/vsc';

const Lab_geral = ({ imageSrc, response, onValuesChange, style='' }) => {
  const [inputX, setInputX] = useState(0);
  const [inputV, setInputV] = useState(0.5);

  const enviarDados = () => {
    if (onValuesChange) {
      onValuesChange(inputX, inputV);
    }
  };

  // Use useEffect to call enviarDados once when the component mounts
  useEffect(() => {
    onValuesChange(-100, -100);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', ...style }}>
      <div style={{ display: 'grid', gridTemplateRows: '50% 50%', height: '100%', width: '100%' }}>
        <div className='code-editor'>
          <div style={{ display: 'grid', gridTemplateColumns: '80% 20%', height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', width: '100%' }}>
              <p className='comentario'>// Encurtamento do músculo.</p>
              <div style={{ display: 'flex', padding: '1%' }}>
                <p style={{ margin: '0 10px 0 0', color: 'white' }}>x <span className='pink'>=</span></p>
                <input
                  style={{ width: '100%' }}
                  type='range'
                  id='input_L'
                  min='-0.5'
                  max='0'
                  step='0.01'
                  value={inputX}
                  onChange={(e) => setInputX(parseFloat(e.target.value))}
                />
                <p style={{ margin: '0', color: 'white' }}> {(-1*inputX).toFixed(2)} mm</p>
              </div>
              <p className='comentario'>// Velocidade de encurtamento.</p>
              <div style={{ display: 'flex', padding: '1%' }}>
                <p style={{ margin: '0 10px 0 0', color: 'white' }}>vel <span className='pink'>=</span></p>
                <input
                  style={{ width: '100%' }}
                  type='range'
                  id=''
                  min='0.5'
                  max='5'
                  step='0.1'
                  value={5.5 - inputV}
                  onChange={(e) => setInputV(5.5 - parseFloat(e.target.value))}
                />
                <p style={{ margin: '0', color: 'white' }}> {(-inputX / inputV).toFixed(2)} mm/s</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
              <button onClick={enviarDados} className='btn-run'>
                <VscRunAll size={40} />
              </button>
            </div>
          </div>
        </div>
        <div className='terminal'>
          <p>{response}</p>
        </div>
      </div>
      <div style={{ marginLeft: '0', display: 'flex', alignItems: 'center' }}>
        <div className="img-fundoBranco" style={{ alignItems: 'center', width: '100%' }}>
          <img src={imageSrc} alt="Excesso de calor" style={{ maxWidth: '95%', maxHeight: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default Lab_geral;
