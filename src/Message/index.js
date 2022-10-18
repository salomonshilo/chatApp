import React from 'react';

import './index.css';

function Chat() {
  return (
    <div className='container_chat'>

            <div className='container_user'> 
                    <div className='image'> <img src='https://img.freepik.com/premium-vector/person-avatar-design_24877-38137.jpg?w=2000'/>  </div>
                    <div className='message_logo'> <i class="uil uil-comment-message message"></i> </div>
                    <div className='logout_logo'> <i class="uil uil-signout"></i></div>
            
            </div>

            <div className='container_recent_message'> 
                 <div className='search_bar'>
                    
                    <i class="uil uil-search"></i>
                    <p> Search</p>
                    <i class="uil uil-ellipsis-v more_logo"></i>
                 </div>
                 <div className='recent_message'>

                 </div>
            
            </div>
            <div className='container_conversation'> 
            
            
            </div>
            

    </div>
  )
}

export default Chat