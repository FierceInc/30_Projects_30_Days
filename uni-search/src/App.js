import React, {Component} from 'react';
import styled from 'styled-components';
let arr = []
const a = []
async function getUniversities() {
  await fetch(`http://universities.hipolabs.com/search?name=&country=`)
  .then(resp => resp.json())
  .then(async res => {
       res.forEach(element => {
      a.push({name: element.name, country: element.country, website: element.web_pages[0]})
    })
  })
  
  }
  getUniversities() 


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      search: "",
      country: "not selected",
      searchDisplay: "none",
      closed: true,
      display: "none",
      uni: [],
      universities: []
     };
     this.handleChange = this.handleChange.bind(this)
     this.selectCountry = this.selectCountry.bind(this)
     this.handleClick = this.handleClick.bind(this)

  }

componentDidMount = async () => {
    await fetch("https://restcountries.com/v3.1/all")
     .then(resp => resp.json())
     .then(async res => {
        await res.forEach(element => {
         arr.push({name: element.name.common, flag: element.flags.png})
         arr.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
       })
   })
}



handleChange = (val) => {
  this.setState({
    search: val.target.value
  })
  const isMatching = (uni, regex) => uni.name.match(regex)

  const findMatches = (wordToMatch, varsities) => {
    const regex = new RegExp(wordToMatch, 'gi');
    console.log(regex)
    return varsities.filter(uni => isMatching(uni, regex));
    
  };
 if(val.target.value !== '') {
  const html = findMatches(val.target.value, this.state.universities)
  this.setState({
    uni: html,
  })
 }
}


handleClick = () => {
if(this.state.closed && arr) {
    this.setState({
      display: "block",
      closed: false
    })
  return arr
}
else {
  this.setState({
    display: "none",
    closed: true
  })
}

}

selectCountry = val => {
  this.setState({
    display: "none",
    closed: true,
    country: val.target.innerText,
    uni: a.filter(uni => uni.country === val.target.innerText,
      ),
    universities: a.filter(uni => uni.country === val.target.innerText,
      ),
    searchDisplay: "block",
  })
  fetch(`http://universities.hipolabs.com/search?name=$&country=${this.state.country.toLowerCase().split(" ").join("+")}`)
  .then(resp => resp.json())
  .then(async res => {
       res.forEach(element => {
        this.state.universities.push({name: element.name, country: element.country, website: element.web_pages[0]})
    })
  })
}

  


  render() {
    
    return (

        <Container>
       
          <InputContainer>
          <FilterButton title="filter by country" onClick={this.handleClick}><i className="fas fa-filter"></i></FilterButton>


          <Countries style={{"display": this.state.display}}>
         {
           arr.map(country => (
                <CountryList  key={arr.indexOf(country)}onClick={this.selectCountry}><Location >{country.name}</Location> <Flag src={country.flag} style={{"width":"30px"}}/></CountryList>
             )
           )
         }
           
          </Countries>


            <H1>

              <span >
              Select Country <i style={{"fontSize": "16px", "color": "#026d5f"}} className="fas fa-arrow-right"></i>
              </span>
              <span style={{"fontSize": "16px", "marginLeft": "-20px"}}>({this.state.country})</span>

            </H1>
            <Input placeholder={`Search From ${this.state.country}`} style={{"display": this.state.searchDisplay}} onChange={this.handleChange} id="input"/>
          </InputContainer>
          <List>
          {
            
           this.state.uni.map(varsity => (
            <ListItems key={Date.now() - (Math.random()* (2434 - 2) + 2) + (Math.random()* (323 - 4) + 4)}> {varsity.name}<Link href={varsity.website} target="_blank" rel="noreferrer">{varsity.website}</Link> </ListItems>
           )
           )
         }
         
          
       
          </List>
        </Container>
    );
  }
}

const Countries = styled.ul`
position: absolute;
width: 80%;
height 300px;
z-index: 1000;
background: #ddd;
padding: 10px;
padding-bottom: 20px;
border-bottom: 1px solid #D8D8D8;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
overflow-y: auto;
`
const CountryList = styled.li`
padding: 10px;
position: relative;
z-index: -1;
top: 10px;
list-style: none;
display:flex;
justify-content:space-between;
margin: auto;
background: #fff;
width: 90%;
color: black;
text-transform: capitalize;
border-bottom: 1px solid #D8D8D8;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
:hover{
  background:#026d5f;
  color: #fff;
}
`
const H1 = styled.h1`
text-align:center;
margin-bottom: 10px;
display: flex;
flex-direction: column;
justify-content: center;
`
const Flag = styled.img`
 width: 15px;
`
const Container = styled.div`
  position: relative;
  width: 600px;
  height: 100vh;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center ;
  aligh-items: center;
  @media(max-width: 725px) {
    width: 100vw;
  };

`
const FilterButton = styled.button`
position: absolute;
top: 125px;
right: 40px;
font-size: 16px;
border: none;
background: transparent;
color: #026d5f;
cursor: pointer;
`
const Input = styled.input.attrs({
  type: "text",
})`
padding: 10px;
margin: auto;
text-align: center;
font-size: 20px;
width: 90%;
border: none;
outline: none;
border-radius: 3px;

`
const Location = styled.span`
font-size: 15px;
`
const Link = styled.a`
font-size: 15px;
`
const InputContainer = styled.div`
  height: 110px;
  margin: auto;
  margin-top: 100px;
  width: 90%;
  background: #ddd;
  left: 26%;
  right: 26%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  @media(max-width: 950px) {
    left 18px;
    right: 18px;
  };
  border-radius: 3px;
  z-index: 10000;
`


const List = styled.ul`
position: absolute;
width: 90%;
margin:auto;
top: 220px;
padding: 10px;
left: 20px;
display: flex;
flex-direction: column;
@media(max-width: 950px) {
  top: 220px;
  left: 20px;

};
overflow: auto;
height: 400px;
padding-bottom: 50px;
`

const ListItems = styled.li`
  background:white;
  list-style: none;
  border-bottom: 1px solid #D8D8D8;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
  margin:0;
  font-size: 20px;
  padding:20px;
  transition:background 0.2s;
  display:flex;
  justify-content:space-between;
  text-transform: capitalize;
:nth-child(even) {
  transform: perspective(100px) rotateX(3deg) translateY(2px) scale(1.001);
  background: linear-gradient(to bottom,  #ffffff 0%,#EFEFEF 100%);
};
:nth-child(odd) {
  transform: perspective(100px) rotateX(-3deg) translateY(3px);
  background: linear-gradient(to top,  #ffffff 0%,#EFEFEF 100%);
};
z-index: 0;
`
export default App;
