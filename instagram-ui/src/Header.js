import { AppBar, Avatar } from '@mui/material'
import React from 'react'
import logo from './images/logo.png'
import avatar from './icons/avatar.png'
import homeIcon from './icons/home.png'
import sendButton from './icons/send.png'
import addVideo from './icons/add-video.png'
import heart from './icons/bheart.png'
import explore from './icons/explore.png'




export default function Header() {
    
    return (
        <div>
            <header className="header">
            <div className="home-tab">
            <logo id="page-logo">
                <img src={logo} alt="" />
            </logo>
               <div id="search">
                   <input type="search" placeholder="Search"/>
                   <button disabled><i class="fas fa-search"></i></button>
                </div> 
                <div className="Icons">
                   <button><img src={homeIcon} alt="" /></button>
                   <button><img src={sendButton}  alt="" /></button>
                   <button><img src={addVideo}  alt="" /></button>
                   <button><img src={explore}  alt="" /></button>
                   <button><img src={heart}  alt="" /></button>
                    <Avatar alt="Profile" src={avatar} id="prof" sx={{ width: 21, height: 21 }}/> 


                </div>

            </div>

            </header>
        </div>
    )
}
