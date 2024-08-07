// src/components/TopBar.js
import React from 'react';
import './TopBar.css';
import logo from '../assets/img/Logo_UFF_(blue).svg.png'; // Certifique-se de ajustar o caminho da imagem
import logo2 from '../assets/img/hospital-santa-cecilia.png'


const TopBar = () => {
  return (
    <div className="top-bar">
      <img src={logo} alt="Logo" className="logo" />
      <p style={{color:'#27292c', fontSize: '80%'}}>&</p>
      <img src={logo2} alt="Logo" className="logo" />
    </div>
  );
};

export default TopBar;