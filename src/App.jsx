import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InApp from './components/InApp';
import Hubbusca from './components/Hubbusca';
import SettingsPage from './components/SettingsPage';
import Createproduct from './components/createProduct';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<InApp/>}/>
        <Route path="/Hub-busca" element={<Hubbusca/>}/>
        <Route path="/CreatePr" element={<Createproduct/>}/>
        <Route path="/Settings" element={<SettingsPage/>}/>
      </Routes>
    </>
  );
};

export default App;
