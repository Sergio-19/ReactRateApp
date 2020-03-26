import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.scss';
import { Nav } from './components/Nav';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { RateState } from './context/RateState';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

     
      year: '2020',
      month: '03',
      day: '20',
      base: 'USD',
      rate: {}

    }
  }

baseRateHandler = (base) =>{

  this.setState({base})
}

yearHandler = (year) =>{
  this.setState({year})
}

monthHandler = (month) =>{
  this.setState({month})
}

dayHandler = (day) =>{
  this.setState({day})
}





  componentDidMount(){
    const response =  fetch(`https://api.exchangeratesapi.io/${this.state.year}-${this.state.month}-${this.state.day}?base=${this.state.base}`)
.then((response)=> response.json()).then((response)=> { console.log(response); this.setState({rate: response.rates})})
  }

render(){
  return (
    
    <BrowserRouter>
    <RateState state = {this.state}
               baseRateHandler = {this.baseRateHandler} 
               yearHandler = {this.yearHandler}
               monthHandler = {this.monthHandler}
               dayHandler = {this.dayHandler}
    >
    <div >
      <Nav/>

      <Switch>
        <Route path = '/' exact>
          <Home/>
        </Route>
        <Route path = '/about'  component = {About}/>

      </Switch>
      
    </div>
    </RateState>
    </BrowserRouter>
  );
}

  
}

export default App;
