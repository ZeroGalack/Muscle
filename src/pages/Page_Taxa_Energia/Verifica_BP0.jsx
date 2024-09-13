import React, { useState } from 'react';

function Verifica_BP0({ onResultado }) {
  const [valorB, setValorB] = useState('');
  const [valorP0, setValorP0] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mensagemCor, setMensagemCor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const valorEsperadoB = -0.335;
    const valorEsperadoP0 = 144.90;
    const margemErro = 2;

    const valorBNum = parseFloat(valorB);
    const valorP0Num = parseFloat(valorP0);

    const dentroMargemA = Math.abs(valorBNum - valorEsperadoB) <= margemErro;
    const dentroMargemP0 = Math.abs(valorP0Num - valorEsperadoP0) <= margemErro;

    if (isNaN(valorBNum) || isNaN(valorP0Num)) {
      setMensagem('Por favor, insira valores numéricos válidos!');
      setMensagemCor('red');
      onResultado(0); // Retorna 0 se houver erro
    } else if (dentroMargemA && dentroMargemP0) {
      setMensagem('Respostas corretas ou aproximadas: 𝑏 = -0.335 e 𝑃0 = 144.90');
      setMensagemCor('#00ec36');
      onResultado(1); // Retorna 1 se a resposta estiver correta
    } else {
      setMensagem('Resposta incorreta. Tente novamente.');
      setMensagemCor('red');
      onResultado(0); // Retorna 0 para resposta incorreta
    }
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%'}}>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Responda:</h2>
          <p style={{textIndent: '2em'}}>
            Utilizando a equação da Taxa de Energia extra, volte ao laboratório e, com os dados numéricos fornecidos, determine o valor das constantes 𝑏 e 𝑃0.
          </p>
          <div style={{ display: 'flex', width: '100%' }}>
            <input
              style={{ width: '60%' }}
              type="text"
              id="campoB"
              value={valorB}
              onChange={(e) => setValorB(e.target.value)}
              placeholder="Digite o valor de 𝑏!"
            />
          </div>
          <div style={{ display: 'flex', width: '100%', marginTop: '5px'}}>
            <input
              style={{ width: '60%' }}
              type="text"
              id="campoP0"
              value={valorP0}
              onChange={(e) => setValorP0(e.target.value)}
              placeholder="Digite o valor de 𝑃0"
            />
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

export default Verifica_BP0;
