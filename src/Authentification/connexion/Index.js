import React from 'react'
import './style.css';


function Connexion() {
  return (
    <div> 
       <div className="container">
         <img src='https://st2.depositphotos.com/1001599/43046/v/950/depositphotos_430460192-stock-illustration-sign-page-abstract-concept-vector.jpg?forcejpeg=true ' 
          className='img'/>
          <form action = " " methode = "post" className='mx-auto mt-20 ' >
            <h3 className='text-3xl text-primary mb-4'> Veuillez vous connecter</h3>
            <div> 
              <label htmlFor = " "> Nom</label>
              <input type = "text" className='form-control' />
            </div><div> 
              <label htmlFor = " "> Email</label>
              <input type = "email" className='form-control' />
            </div>
            <div> 
              <label htmlFor = " "> Mot de passe</label>
              <input type = "password" className='form-control'/>
            </div>

            <div className='d-grid gap-2"'>
            <button className='btn btn-outline-primary btn-block mt-3'> Connexion {" "} </button>
           </div>

            </form>

       
       </div>

       
    </div>
  )
}

export default Connexion