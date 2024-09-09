import React, { useState } from 'react';
import InfoIcon from '../../components/Info';

import coeficiente_angular from '../../assets/img/coeficiente_angular.png'

function Verifica_A({ onResultado }) {
  const [valorA, setValorA] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mensagemCor, setMensagemCor] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();

    // Valores esperados para 'a'
    const valorEsperadoA = 37.24;

    // Margem de erro
    const margemErro = 0.5;

    // Conversão de valores de string para número
    const valorANum = parseFloat(valorA);

    // Verificação dos valores inseridos com margem de erro
    const dentroMargemA = Math.abs(valorANum - valorEsperadoA) <= margemErro;

    if (isNaN(valorANum)) {
      setMensagem('Por favor, insira valores numéricos válidos!');
      setMensagemCor('red');  // Define cor vermelha para mensagem de erro
      onResultado(0);
    } else if (dentroMargemA) {
      setMensagem('Resposta correta ou aproximada: a = 37.24');
      setMensagemCor('#00ec36');  // Define cor verde para resposta correta
      onResultado(1);
    } else {
      setMensagem('Resposta incorreta. Tente novamente.');
      setMensagemCor('red');  // Define cor vermelha para resposta incorreta
      onResultado(0);
    }
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%'}}>
      <div>
        <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
          <h2>Responda:</h2>
          <p style={{textIndent: '2em'}} htmlFor="campoA">
            Utilizando a fórmula do "Calor de Encurtamento", volte ao laboratório e, com os dados numéricos fornecidos, determine o valor da constante 𝑎. Essa constante representa a relação entre o encurtamento muscular e o calor liberado durante a contração.
          </p>

          <div style={{display: 'flex'}}> 
            <input
              style={{ width: '60%' }}
              type="text"
              id="campoA"
              value={valorA}
              onChange={(e) => setValorA(e.target.value)}
              placeholder="Digite o valor de a!"
            />

          <InfoIcon style={{right: '22%', top: '33%'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <p style={{margin: '0px'}}>Coeficente angular m: </p>
            <div className="img-fundoBranco" style={{alignItems: 'center', width: '100%', margin: '3%'}}>
              <img src={coeficiente_angular} alt="coeficiente_angular" style={{ maxWidth: '50%', maxHeight: '100%' }} />
            </div>
          </div>
          </InfoIcon>

          </div>
          <div style={{display: 'flex', marginTop: '10px', alignItems: 'center'}}>
            <div>
            <button className='button_resp' type="submit">Enviar</button>
            </div>
            {mensagem && (
              <p style={{ marginTop: '0px', marginBottom: '0px', marginLeft: '10px', color: mensagemCor }}>
                {mensagem}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Verifica_A;
