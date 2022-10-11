import React from 'react'

import './index.css'

function Inscription() {
  return (
    <div>
          <div className="container">
            <img src='https://usersplit.com/landrick/images/user/signup.svg'/>*

            <form className='mx-auto mt-20'>
                <div className='text-3xl text-primary'> 
                    <h3> Veuillez vous inscrire</h3>
                </div>
                
                <div> 
                   <label htmlFor = " ">Nom</label>
                   <input type = "text" className='form-control'/>
                </div>
                <div> 
                   <label htmlFor = " "> Mot de passe</label>
                   <input type = "password" className='form-control'/>
                </div>
                <div> 
                   <label htmlFor = " ">Sexe</label>
                   <input type = "text" className='form-control'/>
                </div>
                <div> 
                   <label htmlFor = " ">Email</label>
                   <input type = "email" className='form-control'/>
                </div>
                <div className="d-grid gap-2">
                    <button className='btn btn-outline-primary btn-block mt-3'>
                    S'inscrire
                    </button>
                </div>

             </form>
            
          </div>
    </div>
  )
}

export default Inscription