import React, { useState } from 'react';

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

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
    },
    cardsContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: '600px',
    },
    card: (isSelected, isCorrect) => ({
      backgroundColor: isSelected
        ? isCorrect
          ? '#28a745' // Verde para resposta correta
          : '#dc3545' // Vermelho para resposta errada
        : '#282a36',
      color: '#ffffff',
      padding: '15px',
      margin: '10px 0',
      border: `1px solid ${isSelected ? '#44475a' : '#3c3c3c'}`,
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.3s',
      transform: isSelected ? 'scale(1.02)' : 'none',
      ':hover': {
        backgroundColor: '#3c3c3c',
        transform: 'scale(1.02)',
      },
    }),
    mensagem: {
      marginTop: '5px',
      fontSize: '1rem', // Ajuste baseado no tamanho da tela
      color: respostaSelecionada === respostaCorreta ? '#28a745' : '#dc3545',
    },
    pergunta: {
      fontSize: '1.2rem',
      textAlign: 'center',
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.container}>

      <div style={{display: 'flex', width: '100%', maxWidth: '600px'}}>
        <p style={styles.pergunta}>{perguntaTexto}</p>
      </div>
      <div style={styles.cardsContainer}>
        {alternativas.map((opcao, index) => (
          <div
            key={index}
            style={styles.card(respostaSelecionada === opcao, opcao === respostaCorreta)}
            onClick={() => handleClick(opcao)}
          >
            <p>{opcao}</p>
          </div>
        ))}
      </div>
      {/* {respostaSelecionada && <div style={styles.mensagem}>{mensagem}</div>} */}
    </div>
  );
};

export default Perguntas_alternativas;
