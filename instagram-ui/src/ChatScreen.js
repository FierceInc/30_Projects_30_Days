import React, { Component } from 'react'
import './ChatScreen.css'
import { Avatar } from '@mui/material'
import sendButton from './icons/send.png'
import newMessage from './icons/new-message.png'
import avatar from './icons/avatar.png'
export default class ChatScreen extends Component {
    render() {
        return (
            <div>
                <div className="chats">
                    <div className="chat-screen">
                        <div className="chat-head">
                            <div id="chat-head-name">
                                 <p >fierce_rocks <span ><i className="fas fa-angle-down"></i></span></p> 
                            </div>
                      
                        <p id="new-m"><img src={newMessage} alt="" /></p>
                        </div>
                        <div className="chat-body">
                            <div className="chat-b">
                              <Avatar alt="Profile" src={avatar} id="chat-avatar" sx={{ width: 60, height:60 }}/> 
                        <div className="chat-name">
                           <p>andiswa.imaoo</p>
                           <span>Active 3h ago</span>
                        </div>  
                            </div>
                            <div className="chat-b">
                              <Avatar alt="Profile" src={avatar} id="chat-avatar" sx={{ width: 60, height:60 }}/> 
                        <div className="chat-name">
                           <p>andiswa.imaoo</p>
                           <span>Active 3h ago</span>
                        </div>  
                            </div>
                            <div className="chat-b">
                              <Avatar alt="Profile" src={avatar} id="chat-avatar" sx={{ width: 60, height:60 }}/> 
                        <div className="chat-name">
                           <p>andiswa.imaoo</p>
                           <span>Active 3h ago</span>
                        </div>  
                            </div>
                            <div className="chat-b">
                              <Avatar alt="Profile" src={avatar} id="chat-avatar" sx={{ width: 60, height:60 }}/> 
                        <div className="chat-name">
                           <p>andiswa.imaoo</p>
                           <span>Active 3h ago</span>
                        </div>  
                            </div>
                            <div className="chat-b">
                              <Avatar alt="Profile" src={avatar} id="chat-avatar" sx={{ width: 60, height:60 }}/> 
                        <div className="chat-name">
                           <p>andiswa.imaoo</p>
                           <span>Active 3h ago</span>
                        </div>  
                            </div>
                            <div className="chat-b">
                              <Avatar alt="Profile" src={avatar} id="chat-avatar" sx={{ width: 60, height:60 }}/> 
                        <div className="chat-name">
                           <p>andiswa.imaoo</p>
                           <span>Active 3h ago</span>
                        </div>  
                            </div>
                            <div className="chat-b">
                              <Avatar alt="Profile" src={avatar} id="chat-avatar" sx={{ width: 60, height:60 }}/> 
                        <div className="chat-name">
                           <p>andiswa.imaoo</p>
                           <span>Active 3h ago</span>
                        </div>  
                            </div>
                            <div className="chat-b">
                              <Avatar alt="Profile" src={avatar} id="chat-avatar" sx={{ width: 60, height:60 }}/> 
                        <div className="chat-name">
                           <p>andiswa.imaoo</p>
                           <span>Active 3h ago</span>
                        </div>  
                            </div>
                            <div className="chat-b">
                              <Avatar alt="Profile" src={avatar} id="chat-avatar" sx={{ width: 60, height:60 }}/> 
                        <div className="chat-name">
                           <p>andiswa.imaoo</p>
                           <span>Active 3h ago</span>
                        </div>  
                            </div>
                            <div className="chat-b">
                              <Avatar alt="Profile" src={avatar} id="chat-avatar" sx={{ width: 60, height:60 }}/> 
                        <div className="chat-name">
                           <p>andiswa.imaoo</p>
                           <span>Active 3h ago</span>
                        </div>  
                            </div>
                        
            
                        </div>


                    </div>

                    <div className="message-screen">
                        <div className="message">
                        <div className="send-icon">
                            <img src={sendButton} alt="" />
                        </div>
                        <h1>Your Messages</h1>
                        <p>Send private photos and messages to a friend or group</p>
                        <button id="messagebtn">Send Message</button>
                        </div>
                  
                    </div>
                </div>
            </div>
        )
    }
}



