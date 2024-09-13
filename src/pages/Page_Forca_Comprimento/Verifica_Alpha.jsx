import React, { useState } from 'react';

const VerificaAlpha = ({ onResultado }) => {
    const [valorAlpha, setValorAlpha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [mensagemCor, setMensagemCor] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const valorEsperadoB = 1449.027;
        const margemErro = 2;
        const valorAlphaNum = parseFloat(valorAlpha);

        const dentroMargemA = Math.abs(valorAlphaNum - valorEsperadoB) <= margemErro;

        if (isNaN(valorAlphaNum)) {
            setMensagem('Por favor, insira valores numéricos válidos!');
            setMensagemCor('red');  // Define cor vermelha para mensagem de erro
            onResultado(0);
        } else if (dentroMargemA) {
            setMensagem('Respostas corretas ou aproximadas: α = 1449.027');
            setMensagemCor('#00ec36');  // Define cor verde para resposta correta
            onResultado(1);
        } else {
            setMensagem('Respostas incorretas. Tente novamente.');
            setMensagemCor('red');  // Define cor vermelha para resposta incorreta
            onResultado(0);
        }
    };

    return (
      <div style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
        <div style={{ marginRight: '10px' }}>
          <p>
            <span style={{fontWeight: 'bold'}} className='destaque_comprimento2'>Ótimo trabalho!</span> A equação que representa o comprimento total do músculo é:
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="img-fundoBranco" style={{ backgroundColor: '#052836', width: '80%' }}>
              <div>
                <p className=''>𝐿 = 𝐿𝑐𝑒 + 𝐿𝑠𝑒</p>
              </div>
            </div>
          </div>
          <p style={{ textIndent: '2em' }}>
            A força de contração gerada pelo elemento contrátil <span className='destaque_comprimento'>(𝐿𝑐𝑒) </span> é exatamente igual à força de alongamento do
            elemento elástico em série <span className='destaque_comprimento'>(𝐿𝑠𝑒)</span>, pois ambos estão conectados em série. Essa força, <span className='destaque_comprimento'> 𝑃</span>, é considerada
            proporcional ao alongamento de <span className='destaque_comprimento'> 𝐿𝑠𝑒</span>, de acordo com a Lei de Hooke, conforme descrito na equação a seguir:
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="img-fundoBranco" style={{ backgroundColor: '#052836', width: '80%' }}>
              <div>
                <p>𝑃 = α(𝐿𝑠𝑒 - 𝐿𝑠𝑒(0))</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginLeft: '10px' }}>
          <p>
            Onde,<span className='destaque_comprimento'> α </span>é o constante da mola e <span className='destaque_comprimento'>𝐿𝑠𝑒(0)</span> é o comprimento do elemento elástico da série antes da contração.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 className='destaque_comprimento2'>Responda: </h2>
            <p style={{ textIndent: '2em' }}>
              Utilizando a fórmula da força <span className='destaque_comprimento'>𝑃</span>, retorne ao laboratório e, com os dados numéricos fornecidos, determine o valor de <span className='destaque_comprimento'>𝛼</span>,
              a constante elástica do elemento em série.
            </p>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', width: '100%' }}>
                <input
                  style={{ width: '60%' }}
                  type="text"
                  id="campoA"
                  value={valorAlpha}
                  onChange={(e) => setValorAlpha(e.target.value)}
                  placeholder="Digite o valor de α"
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
      </div>
    );
};

export default VerificaAlpha;
