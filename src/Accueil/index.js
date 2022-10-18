import React from 'react';
import './index.css';



function Accueil() {
  return (
    <div>
    <div className='container'>
   
        <img src='https://media.istockphoto.com/vectors/chat-talk-of-young-people-with-smartphones-man-and-woman-standing-vector-id1160018654?k=20&m=1160018654&s=170667a&w=0&h=qyJGAVMdjvTGejMEgEh7NFALe8BqJnunExpRzGTMO9U='/>
        <div className='sous_container'>
          <h1> Bienvenue sur <strong> Whatnews!</strong></h1>
          <p className='paragraph'> Une plate forme de communication gratuite mise  <br/> à votre disposition. <br/> connectez vous pour commencer</p>


          <a class="nav-link" href="/signIn">
          <button type="button" class="btn btn-outline-primary btn_connexion">Commencer</button>
          </a>
          
        
        </div>
        
    </div>
        
    </div>
  )
}

export default Accueil