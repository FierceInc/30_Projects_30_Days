import React, { Component } from 'react'
import phones from './images/phones.png';
import logo from './images/logo.png'
import appstore from './images/appstore.png'
import playstore from './images/playstore.png';
import styled from 'styled-components';

import './App.css'

export class LoginPage extends Component {

    render() {
        return (
                  <LoginContainer>
                    <div className="phones">
                        <img src={phones} alt="" />
                        <div className="slides">
                            <img id="slideImg"  src={this.props.slides} alt="" />
                        </div>
                    </div>
                    <div className="login">
                      <div className="loginForm">
                        <img src={logo} alt="" />
                        <input type="text" name="" id="" placeholder="Phone number, username, or email" />
                        <input type="password" name="" id="" placeholder="Password"/>
                        <button className="lgbtn">Log In</button>
                        <div id="or"><p>OR</p></div>
                        <div className="fb">
                        <i className="fab fa-facebook-square"></i>
                            <p>Log in with Facebook</p>
                        </div>
                        <p id="forgotP">Forgot password?</p>
                    </div> 
                    <div className="signup">
                    <p>Don't have an account? <span id="account">Sign up</span> </p>
                    </div>
                    
                    <div className="download">
                    <h4>Get the app.</h4>
                    <div className="downloadbtn">
                        <img src={playstore} alt="" />
                        <img src={appstore} alt="" />
                    </div>
                        
                    </div>
                    </div>
                    
                    </LoginContainer> 

        )
    }
}
const LoginContainer = styled.div`
    width: 100vw;
    display: flex;
    margin: 60px auto;
    padding: 0;
    justify-content: center;
    height: 100vh;

`
export default LoginPage
