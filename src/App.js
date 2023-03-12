import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './comps/Home/Home';
import Quotes from './comps/Quotes/Quotes';
import Continents from './comps/Continents/Continents';
import CharacterDetail from './comps/CharacterDetail/CharacterDetail';
import NotFound from './comps/NotFound/NotFound';
import SharedLayout from './comps/SharedLayout/SharedLayout';

function App() {
  return (


    <Routes>

      <Route path="/" element={<SharedLayout />} >

        <Route path='characters' index element={<Home />} />

        <Route path="/quotes" element={<Quotes />} />

        <Route path="/continents" element={<Continents />} />

        <Route path="/characters/:characterId" element={<CharacterDetail />} />

        <Route path="*" element={<NotFound />} />
      </Route>




    </Routes>


  );
}

export default App;
