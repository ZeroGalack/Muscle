import React, { useState, useEffect } from 'react';
import { VscRunAll } from 'react-icons/vsc';

import Garf1 from '../../assets/img/graf-1.png';
import Garf2 from '../../assets/img/graf-2.png';
import Garf3 from '../../assets/img/graf-3.png';
import Garf4 from '../../assets/img/graf-4.png';

import MolaAni from './MucleAni.jsx';

const LabHills = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [mostrarResp, setMostrarResp] = useState(false);
    const [resposta, setResposta] = useState('');
    const [inputL, setInputL] = useState(0); // Estado para controlar o valor do slider
    const [inputV, setInputV] = useState(1); // Estado para controlar o valor do slider
    const images = [Garf1, Garf2, Garf3, Garf4];

    useEffect(() => {
        // Função para enviar o valor atual do slider ao servidor
        const enviarDados = () => {
            fetch('http://localhost:5000/HillModel', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ input_L: inputL, input_t: 1000, limpar: '0', resposta: '', velocidade: inputV }),
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
        };

        // Chama a função sempre que os valores de inputL ou inputV mudarem
        enviarDados();
    }, [inputL, inputV]); // Dependências para acionar o useEffect sempre que inputL ou inputV mudarem

    const handleTabClick = (index) => {
        setSelectedTab(index);
    };

    const formatDataToString = (data) => {
        if (!data) return '';
    
        // Assuming data is an object with the DataFrame JSON string
        const df = JSON.parse(data.df);
        let formattedData = '';
        
        // Cabeçalhos de coluna
        formattedData += `L          t          P          H          Lse        Lce\n`;
    
        // Formatar os dados
        df.data.forEach((row, index) => {
          formattedData += `${row[0].toFixed(6)}   ${row[1].toFixed(6)}   ${row[2].toFixed(6)}   ${row[3].toFixed(6)}   ${row[4].toFixed(6)}   ${row[5].toFixed(6)}\n`;
        });
    
        return formattedData;
    };

    return (
        <div className='container-grid-columns' style={{ alignItems: 'flex-end', gridTemplateColumns: '50% 50%' }}>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h2>Lab Hill Model:</h2>
                    {/* <div style={{ marginLeft: '20px' }} className='btn-run'>
                    </div> */}
                </div>

                <div className='code-editor' style={{ marginRight: '20px' }}>
                    <p style={{ margin: '0px', color: '#6272a4' }}>// Variação no comprimento do músculo.</p>
                    <div style={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        padding: '5px',
                    }}>
                        <p style={{ margin: '0 10px 0 0', color: 'white' }}>deformação_muscular  <span className='pink'>=</span></p>
                        <input 
                            type='range' 
                            id='input_L' 
                            min='-0.9' 
                            max='1' 
                            step='0.1' 
                            value={inputL}
                            onChange={(e) => setInputL(parseFloat(e.target.value))}
                        />
                        <p style={{ margin: '0', color: 'white' }}> {inputL} cm</p>
                    </div>

                    <p style={{ margin: '0px', color: '#6272a4' }}>// Represente quantos segundos durará a contração.</p>
                    <div style={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        padding: '5px',
                    }}>
                        <p style={{ margin: '0 10px 0 0', color: 'white' }}>velocidade_contração <span className='pink'>=</span></p>
                        <input 
                            type='range' 
                            id='input_v' 
                            min='1' 
                            max='5' 
                            step='1' 
                            value={inputV}
                            onChange={(e) => setInputV(parseFloat(e.target.value))}
                        />
                        <p style={{ margin: '0', color: 'white' }}> {inputV} s</p>
                    </div>
                </div>

                <div className='terminal' style={{ marginRight: '20px', marginTop: '10px', height: '200px' }}>
                    {mostrarResp && (
                        <div>
                            <p style={{ textAlign: 'justify', fontSize: '79%' }}>{formatDataToString(resposta)}</p>
                        </div>
                    )}
                </div>
            </div>
            <div style={{ display: 'grid', alignItems: 'flex-end', gridTemplateRows: 'auto auto' }}>
                <div style={{ display: 'flex', width: '100%' }}>
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => handleTabClick(index)}
                            style={{
                                backgroundColor: selectedTab === index ? 'gray' : '#3b3b3b',
                                color: 'white',
                                padding: '8px',
                                border: 'none',
                                cursor: 'pointer',
                                margin: '0 1px 0 0',
                                borderRadius: '4px 4px 0 0'
                            }}
                        >
                            {index === 0 ? 'Lce-Lse' : index === 1 ? 'Força' : index === 2 ? 'Calor' : 'Comprimento total'}
                        </button>
                    ))}
                </div>
                <div>
                    <img src={images[selectedTab]} alt="Selected" style={{ maxWidth: '100%' }} />
                </div>
                
            </div>
            {/* <MolaAni toValueProp={(0.5)} Massa= {1} /> */}
        </div>
    );
};

export default LabHills;
