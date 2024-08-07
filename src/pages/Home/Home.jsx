import React, { useState, useEffect } from 'react';
import TopBar from '../../components/TopBar';
import { useNavigate } from 'react-router-dom';
import { RxArrowRight } from "react-icons/rx";
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const phrases = ['Uma Estrutura Interativa para o ensino do Modelo de Contração Muscular.'];
  const typingSpeed = 40; // Velocidade de digitação em milissegundos
  const pauseAfterTyping = 2000; // Tempo de pausa após a digitação completa em milissegundos

  useEffect(() => {
    if (index < phrases[0].length) {
      const interval = setInterval(() => {
        setText((prevText) => prevText + phrases[0].charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);

      return () => clearInterval(interval);
    } else {
      setTimeout(() => {
        setText('‎');
        setIndex(0);
      }, pauseAfterTyping);
    }
  }, [index]);

  const goToAboutPage = () => {
    navigate('/demo');
  };

    return (
      <div className="full-screen-div">
          <TopBar/>
          <div>
            <div className='header-home-grid'>
              
              <div>
                <h1>ⓂⓊⓈⒸⓁⒺ</h1>
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <p style={{fontSize: '16px'}} className='highlight_text-azulClaro-home'>{text}</p>
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>

                <div onClick={goToAboutPage} className='button-home'>
                  <RxArrowRight />
                </div>

              </div>
  
            </div> 
          </div>
      </div>
    );
  };
  
  export default Home;
  