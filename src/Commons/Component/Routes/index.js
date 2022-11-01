import React, { useState } from 'react'

import { Objetcontext } from '../../../Objetcontext';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Accueil from '../../../Accueil';
import Connexion from '../../../Authentification/connexion/Index';
import Inscription from '../../../Authentification/Inscription/Index';
import Chat from '../../../Message';

function Routeur() {
  const [token,setToken] = useState('')
  return (
    <div>
      <Objetcontext.Provider value={{ token, setToken }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/signIn" element={<Connexion />} />
            <Route path="/signUp" element={<Inscription />} />
            <Route path="/message" element={<Chat />} />
            <Route path="/logout" element={<Accueil />} />
          </Routes>
        </BrowserRouter>
      </Objetcontext.Provider>
    </div>
  );
}

export default Routeur