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


export class App extends Component {
  state = {
    page: 1,
    slide: 0
  }
  handleSlides = () => {
    const { slide } = this.state
    this.setState({
      slide: slide + 1
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
    return (
      <div style={{width:"100vw"}}>
        <Header />
        {/* <LoginPage  slides={slides[this.state.slide]}/>    */}

      </div>
    )
  }
}

export default App

