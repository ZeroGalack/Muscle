import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Home             from './pages/Home/Home.jsx';
import HillsModel        from './pages/HillsModel/HillsModel.jsx'


import Page_Forca_Comprimento from './pages/Page_Forca_Comprimento/Page_Forca_Comprimento.jsx';
import Page_Calor from './pages/Page_Calor/Page_calor.jsx';
import Page_Taxa_Energia from './pages/Page_Taxa_Energia/Page_Taxa_Energia.jsx';
import Page_Forca_velocidade from './pages/Page_Forca_velocidade/Page_Forca_velocidade.jsx';


const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/home"         element={<Home />} />
        <Route path="/HillsModel"   element={<HillsModel />} />


        <Route path="/PageForcaComprimento"   element={<Page_Forca_Comprimento />} />
        <Route path="/PageCalor"   element={<Page_Calor />} />
        <Route path="/PageTaxaEnergia"   element={<Page_Taxa_Energia />} />
        <Route path="/PageForcavelocidade"   element={<Page_Forca_velocidade />} />
        <Route path="*"             element={<div>Page Not Found</div>} />

      </Routes>
    </main>
  );
};

export default App;