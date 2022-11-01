import React from 'react';

import './index.css';

function Chat() {
  return (
    <div className='container_chat'>

            <div className='container_user'> 
                    <div className='image'> <img className='user_image' src='https://img.freepik.com/premium-vector/person-avatar-design_24877-38137.jpg?w=2000'/>  </div>
                    <div className='message_logo'> <i class="uil uil-comment-message message"></i> </div>
                   <a href='/logout'> <div className='logout_logo'> <i class="uil uil-signout"></i></div></a>
            
            </div>

            <div className='container_recent_message'> 
                 <div className='search_bar'>
                    
                    <i class="uil uil-search"></i>
                    <p className='search_text'> Search</p>
                    <i class="uil uil-ellipsis-v more_logo"></i>
                 </div>
                 <div className='recent_message'>
                     <p className='text_recent'> Recent</p>
                     <div className='image'> <img className='users_recent' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa69_HGc_i3MXKCPZzCfAjBZC4bXJsn0rS0Ufe6H-ctZz5FbIVaPkd1jCPTpKwPruIT3Q&usqp=CAU'/> 
                              <div className='contain_name_user'>
                                   <h3>Trigo</h3>
                                   <p className='text_message'>salut!</p>
                              </div> 
                    </div>  <hr/>


                     <div className='image'> <img className='users_recent' src='https://static.vecteezy.com/ti/vecteur-libre/p1/2002427-homme-avatar-personnage-isole-icone-gratuit-vectoriel.jpg'/>
                               <div className='contain_name_user'>
                                    <h3>Aminata</h3>
                                    <p className='text_message'>Comment tu vas?</p>
                               </div> 
                     </div> <hr/>


                     <div className='image'> <img className='users_recent' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa69_HGc_i3MXKCPZzCfAjBZC4bXJsn0rS0Ufe6H-ctZz5FbIVaPkd1jCPTpKwPruIT3Q&usqp=CAU'/>
                                <div className='contain_name_user'>
                                      <h3>Melki</h3>
                                      <p className='text_message'>je suis à l'upn</p>
                                </div> 
                     </div> <hr/>


                     <div className='image'> <img className='users_recent' src='https://static.vecteezy.com/ti/vecteur-libre/p1/2002427-homme-avatar-personnage-isole-icone-gratuit-vectoriel.jpg'/> 
                                 <div className='contain_name_user'>
                                        <h3>Joella</h3>
                                        <p className='text_message'>Où es tu?</p>
                                 </div>  
                     </div>
                     


                 </div>
            
            </div>


            <div className='container_conversation'> 
               <div className='user_info'> 
                  <img className='users_image_online' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa69_HGc_i3MXKCPZzCfAjBZC4bXJsn0rS0Ufe6H-ctZz5FbIVaPkd1jCPTpKwPruIT3Q&usqp=CAU'/>
                  <div className='contain_user_info'>
                     <h4> Melki</h4>
                     <p className='text_message'>En ligne</p>
                  </div> 
               </div> 

               <hr/>
            
                <div className='send_message'>
                    <p className=''> salut ça va?</p>
                </div>
                <div className='send_message'>
                    <p className=''> Quoi de neuf</p>
                </div>

               
                <div className='receive_message'>
                    <p className=''> Je vais bien merci </p>
                </div>
                    

                <div className='receive_message'>
                    <p className=''> Rien de grave et de ton coté?</p>
                </div>

                <div className='send_message'>
                    <p className=''> Ah je vois , où es tu?</p>
                </div>

                <div className='receive_message'>
                    <p className=''> Je suis à l'upn</p>
                    
                </div> <br/>
                <hr/>
                    
                <div className='writter_message'>
                  

                  
                 <div className='contain_input_camera'>

                 <input className="input_message"/>
                    <i class="uil uil-camera camera"></i>
                 </div>

                    <button className='button_send_message' type="submit">
                         <i class="uil uil-message"> </i>
                    </button>
                  
                   
                   
               
                </div>

            </div> 

    
      

            

    </div>
  )
}

export default Chat