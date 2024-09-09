import React, { useState, useEffect } from 'react';
import { VscRunAll } from 'react-icons/vsc';

import Garf1 from '../../../server/grap_images/Excesso_calor.png';

const Excesso_calor = () => {
    const [inputX, setInputX] = useState(0); 
    const [inputV, setInputV] = useState(0.5); 

    const [resposta, setResposta] = useState('');
    const baseURL = `${window.location.protocol}//${window.location.hostname}:5000`;
    
    useEffect(() => {
        
        const enviarDados = () => {
            fetch(`${baseURL}/Excesso_calor`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ x: inputX, vel: inputV, limpar: '0'}),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Resposta do servidor:', data);
                    setResposta(data);
                    // setMostrarResp(true);
                })
                .catch(error => {
                    console.error('Erro ao enviar dados:', error);
                });
        };

        // Chama a função sempre que os valores de inputX ou inputV mudarem
        enviarDados();
    }, [inputX, inputV]); // Dependências para acionar o useEffect sempre que inputX ou inputV mudarem


    const formatDataToString = (data) => {
      if (!data) return '';
  
      const df = JSON.parse(data.df);
      let formattedData = '';
      formattedData += `t          L         H         x         Hx\n`;
  
      df.data.forEach((row, index) => {
        formattedData += `${row[0].toFixed(6)}   ${row[1].toFixed(6)}  ${row[2].toFixed(6)}  ${row[3].toFixed(6)}  ${row[4].toFixed(6)}\n`;
      });
  
      return formattedData;
    };
    

    const enviarDadosLimpar = () => {
      fetch(`${baseURL}/Excesso_calor`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ input_L: inputX, load: inputV, limpar: 1, resposta: ''}),
      })
          .then(response => response.json())
          .then(data => {
              console.log('Resposta do servidor:', data);
              setResposta(data);
              setMostrarResp(true);
          })
          .catch(error => {
              console.error('Erro ao enviar dados:', error);
          });
    }
    
    
    return (
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '45% 55%'}}>

          <div style={{marginRight: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
     
              <div className='code-editor' style={{display: 'flex', flexDirection: 'column', height: 'auto'}}>
                <p style={{ margin: '0px', color: '#6272a4' }}>// Variação no comprimento do músculo.</p>
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    padding: '5px',
                }}>
                    <p style={{ margin: '0 10px 0 0', color: 'white' }}>x  <span className='pink'>=</span></p>
                    <input 
                        style={{width: '60%'}}
                        type='range' 
                        id='input_L' 
                        min='-0.5' 
                        max='0' 
                        step='0.1' 
                        value={inputX}
                        onChange={(e) => setInputX(parseFloat(e.target.value))}
                    />
                    <p style={{ margin: '0', color: 'white' }}> {inputX} cm</p>
                </div>

                <p style={{ margin: '0px', color: '#6272a4' }}>// Represente carga adicionada ao músculo.</p>
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    padding: '5px',
                }}>
                    <p style={{ margin: '0 10px 0 0', color: 'white' }}>velocidade <span className='pink'>=</span></p>
                    <input 
                        style={{width: '40%'}}
                        type='range' 
                        id='' 
                        min='0.5' 
                        max='5' 
                        step='0.5' 
                        value={inputV}
                        onChange={(e) => setInputV(parseFloat(e.target.value))} // Define a função para atualizar o estado
                    />
                    <p style={{ margin: '0', color: 'white' }}> {(-inputX / inputV).toFixed(2)} cm/s</p>
                </div>
            </div>

            <div style={{display:'flex', width: '100%'}}>
              <div className='terminal' >
                <div>
                    <p>{formatDataToString(resposta)}</p>
                </div>
              </div>
            </div>

          </div>

          <div style={{marginLeft: '0', display: 'flex', alignItems: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <div className="img-fundoBranco" style={{alignItems: 'center', width: '100%', margin: '10px'}}>
                <img src={Garf1} alt="Excesso de calor" style={{ maxWidth: '95%', maxHeight: '100%' }} />
              </div>
            </div>

            {/* <div style={{display: 'flex'}}>
              <button onClick={enviarDadosLimpar} >
                <p style={{margin: '0px'}}>
                Limpar gráfico
                </p>
              </button>
            </div> */}

          </div>

        </div>
      </div>
    );
};

export default Excesso_calor;
