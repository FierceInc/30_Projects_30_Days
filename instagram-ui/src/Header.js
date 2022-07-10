import { Avatar } from '@mui/material'
import React, { Component } from 'react'
import logo from './images/logo.png'
import avatar from './icons/avatar.png'
import homeIcon from './icons/home.png'
import sendButton from './icons/send.png'
import addVideo from './icons/add-video.png'
import heart from './icons/bheart.png'
import explore from './icons/explore.png'




export class Header extends Component{
    
    render()

    {
        const Buttons = [homeIcon, sendButton, addVideo, explore, heart]
          return (
        <div>
            <header className="header">
            <div className="home-tab">
            <div id="page-logo">
                <img src={logo} alt="" />
            </div>
               <div id="search">
                   <input type="search" placeholder="Search"/>
                   <button disabled><i className="fas fa-search"></i></button>
                </div> 
                <div className="Icons">
                    {Buttons.map(btn => {
                        return (
                             <button key={Buttons.indexOf(btn)}><img src={btn}  alt="" id={Buttons.indexOf(btn)} onClick={this.props.handleClick}/></button>
                        ) 
                    })}
                    <Avatar alt="Profile" src={avatar} id="prof" sx={{ width: 21, height: 21 }}/> 
                </div>

            </div>

            </header>
        </div>
    )  
    }

}

export default Header
