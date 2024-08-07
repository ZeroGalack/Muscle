import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Home             from './pages/Home/Home.jsx';
import Desmostrarion    from './pages/Demonstration/demostrarion.jsx'
import HillsModel        from './pages/HillsModel/HillsModel.jsx'

// import Hooke            from './pages/Hooke/Hooke.jsx' 



const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/home"         element={<Home />} />
        <Route path="/demo"         element={<Desmostrarion />} />
        <Route path="/HillsModel"   element={<HillsModel />} />
        <Route path="*"             element={<div>Page Not Found</div>} />

        {/* <Route path="/hooke"  element={<Hooke />} /> */}
      </Routes>
    </main>
  );
};

export default App;