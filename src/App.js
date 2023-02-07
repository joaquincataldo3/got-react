import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './comps/Home/Home';
import Quotes from './comps/Quotes/Quotes';
import Continents from './comps/Continents/Continents';
import CharacterDetail from './comps/CharacterDetail/CharacterDetail';
import NotFound from './comps/NotFound/NotFound';

function App() {
  return (


    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/quotes" element={<Quotes />} />

      <Route path="/continents" element={<Continents />} />

      <Route path="/characters/:characterId" element={<CharacterDetail />} />

      <Route path="*" element={<NotFound />} />


    </Routes>


  );
}

export default App;
