import React, { useState } from 'react';

function Verifica_K() {
  const [valorK, setValorK] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mensagemCor, setMensagemCor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const valorEsperadoK = 61.017879999609;

    // Margem de erro
    const margemErro = 0.5;

    // Conversão de valores de string para número
    const valorKNum = parseFloat(valorK);

    // Verificação dos valores inseridos com margem de erro
    const dentroMargemK = Math.abs(valorKNum - valorEsperadoK) <= margemErro;

    if (isNaN(valorKNum)) {
      setMensagem('Por favor, insira valores numéricos válidos!');
      setMensagemCor('red');  // Define cor vermelha para mensagem de erro
    } else if (dentroMargemK) {
      setMensagem('Resposta correta ou aproximada: 𝑘 = 61.017879999609');
      setMensagemCor('#00ec36');  // Define cor verde para resposta correta
    } else {
      setMensagem('Resposta incorreta. Tente novamente.');
      setMensagemCor('red');  // Define cor vermelha para resposta incorreta
    }
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%'}}>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Responda:</h2>
          <p style={{textIndent: '2em'}} htmlFor="campoK">
            Utilizando a fórmula da relação "Força-Velocidade", volte ao laboratório e, com os dados numéricos fornecidos, determine o valor da constante 𝑘.
          </p>
          <div style={{ display: 'flex', width: '100%' }}>
            <input
              style={{ width: '60%' }}
              type="text"
              id="campoK"
              value={valorK}
              onChange={(e) => setValorK(e.target.value)}
              placeholder="Digite o valor de 𝑘!"
            />
          </div>
          <div style={{display: 'flex', marginTop: '10px', alignItems: 'center'}}>
            <div>
              <button type="submit">Enviar</button>
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

export default Verifica_K;
