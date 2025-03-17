import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InApp from './components/InApp';
import Hubbusca from './components/Hubbusca';
import SettingsPage from './components/SettingsPage';
import Createproduct from './components/createProduct';
import UserRegister from './components/CreateUser';
import Login from "./components/Login";
import StoreRegister from './components/CreateStore';
import StoreFeed from './components/StoreFeed';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<InApp/>}/>
        <Route path="/Hub-busca" element={<Hubbusca/>}/>
        <Route path="/CreatePr" element={<Createproduct/>}/>
        <Route path="/Settings" element={<SettingsPage/>}/>
        <Route path="/Cuser" element={<UserRegister/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/CStore" element={<StoreRegister/>}/>
        <Route path="/Feed" element={<StoreFeed/>}/>
      </Routes>
    </>
  );
};

export default App;
