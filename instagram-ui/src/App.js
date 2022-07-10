/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './App.css';
import LoginPage from './LoginPage';
import slide1 from './images/slide1.jpg'
import slide2 from './images/slide2.jpg'
import slide3 from './images/slide3.jpg'
import slide4 from './images/slide4.jpg'
import slide5 from './images/slide5.jpg'
import slide6 from './images/slide6.jpg'
import slide7 from './images/slide7.jpg'
import Header from './Header';
import UserProfile from './UserProfile';
import ChatScreen from './ChatScreen'
import ExploreScreen from './ExploreScreen';
import styled from 'styled-components';

export class App extends Component {
  state = {
    page: '1',
    slide: 0
  }
  handleSlides = () => {
    const { slide } = this.state
    this.setState({
      slide: slide + 1
    })
  
  }

  handleClick = (e) => {

  this.setState({
    page: e.target.id
  })
  }



componentDidMount() {
  setInterval(() => {
    this.handleSlides()
    if(this.state.slide > 6 ) {
      this.setState({
        slide: 0
      })
      this.handleSlides()
    }
  }, 5000);
}
  render() {
    const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7]
    switch (this.state.page) {
      case "0":
        return (
          <AppDiv>
          <Header handleClick={this.handleClick} />
          <LoginPage  slides={slides[this.state.slide]}/> 
          </AppDiv>
        )
        break;
      case '1':
        return (
          <AppDiv>
          <Header handleClick={this.handleClick} />
          <ChatScreen /> 
          </AppDiv>
        )
        break;
      case '2':
        return (
          <AppDiv>
          <Header handleClick={this.handleClick} />
           <UserProfile />
          </AppDiv>
        )
        break;
      case '3':
        return (
          <AppDiv>
          <Header handleClick={this.handleClick} />
          <ExploreScreen /> 
          </AppDiv>
        )
        break;
      case '4':
        return (
          <AppDiv>
          <Header handleClick={this.handleClick} />
          <LoginPage  slides={slides[this.state.slide]}/> 
          </AppDiv>
        )
        break;
    
      default:
        break;
    }

  
  }
}
const AppDiv = styled.div`
width : 100vw
`


export default App

