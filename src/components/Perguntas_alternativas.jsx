import React, { useState } from 'react';
import './Perguntas_alternativas.css';



const Perguntas_alternativas = ({ perguntaTexto, alternativas, respostaCorreta }) => {
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const handleClick = (opcao) => {
    setRespostaSelecionada(opcao);
    if (opcao === respostaCorreta) {
      setMensagem('Resposta correta!');
    } else {
      setMensagem('Resposta errada. Tente novamente.');
    }
  };

  const separarMarcador = (texto) => {
    const marcador = texto.substring(0, 2); // Pega os dois primeiros caracteres, ex: "a)"
    const conteudo = texto.substring(2); // O resto do texto
    return { marcador, conteudo };
  };

  const isSelected = (opcao) => respostaSelecionada === opcao;
  const isCorrect = (opcao) => opcao === respostaCorreta;

  return (
    <div className="container">
      <div style={{ display: 'flex', width: '100%', maxWidth: '600px' }}>
        <p className="pergunta">{perguntaTexto}</p>
      </div>
      <div className="cardsContainer">
        {alternativas.map((opcao, index) => {
          const { marcador, conteudo } = separarMarcador(opcao);
          const selected = isSelected(opcao);
          const correct = isCorrect(opcao);
          const cardClass = `card ${selected ? (correct ? 'correct' : 'incorrect') : ''} ${selected ? 'selected' : ''}`;
          
          return (
            <div
              key={index}
              className={cardClass}
              onClick={() => handleClick(opcao)}
            >
              <span className="marcador">{marcador}</span>
              <span>{conteudo}</span>
            </div>
          );
        })}
      </div>
      {/* {mensagem && (
        <p className={`mensagem ${isSelected(respostaCorreta) ? 'correct' : 'incorrect'}`}>
          {mensagem}
        </p>
      )} */}
    </div>
  );
};

export default Perguntas_alternativas;
