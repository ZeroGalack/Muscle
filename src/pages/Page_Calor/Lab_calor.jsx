import React, { useState } from 'react';

import Garf1 from '../../../server/grap_images/Excesso_calor.jpg';
import Lab_geral from '../../components/Lab_geral';


const Excesso_calor = () => {
    const [resposta, setResposta] = useState('');
    const baseURL = `${window.location.protocol}//${window.location.hostname}:5000`;

    const enviarDados = (x, v) => {
      fetch(`${baseURL}/plot_grafico`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ x: x, vel: v, id: 'Lab_Excesso_calor'}),
      })
          .then(response => response.json())
          .then(data => {
              console.log('Resposta do servidor:', data);
              setResposta(data);
          })
          .catch(error => {
              console.error('Erro ao enviar dados:', error);
          });
    };

  
    const formatDataToString = (data) => {
      if (!data) return '';
  
      const df = JSON.parse(data.df);
      let formattedData = '';
      formattedData += `t          L         H         x         Hₑ\n`;
  
      df.data.forEach((row, index) => {
        formattedData += `${row[0].toFixed(6)}   ${row[1].toFixed(6)}  ${row[2].toFixed(6)}  ${row[3].toFixed(6)}  ${row[4].toFixed(6)}\n`;
      });
  
      return formattedData;
    };
    
    
    return (
      <div>

          <Lab_geral 
            imageSrc={Garf1}
            response={formatDataToString(resposta)}
            onValuesChange={enviarDados}
            style={{gridTemplateColumns: '45% 55%'}}
          />

      </div>
    );
};

export default Excesso_calor;
