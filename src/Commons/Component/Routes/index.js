import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Accueil from '../../../Accueil';
import Connexion from '../../../Authentification/connexion/Index';
import Inscription from '../../../Authentification/Inscription/Index';

function Routeur() {
  return (
    <div>
        <BrowserRouter>
    <Routes>
      <Route path="/" element={<Accueil/>}/>
      <Route path="/signIn" element={<Connexion/>}/>
      <Route path="/signUp" element={<Inscription />}/>
     
       
        
      
    </Routes>
  </BrowserRouter>
    </div>
  )
}

export default Routeur