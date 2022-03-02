import React, {Component} from 'react';
import './App.css';
import Contacts from './component/Contacts';
import { Header } from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component{
  constructor(props){
    super(props);
  }
render() {
  return (
    <div className="App">
      <Header branding />
      <Contacts/>
      <Header branding="this is footer"/>
    </div>
  );
}
}


