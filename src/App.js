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

      date: '2020-03-20',
      base: 'USD',
      rate: {}

    }
  }



  componentDidMount(){
    const response =  fetch(`https://api.exchangeratesapi.io/${this.state.date}?base=${this.state.base}`)
.then((response)=> response.json()).then((response)=> { console.log(response); this.setState({rate: response.rates})})
  }

render(){
  return (
    
    <BrowserRouter>
    <RateState state = {this.state}>
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
