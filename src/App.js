import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { tareas } from './tareas.json';
import Navigation from './components/Navigation'
import TaskForm from './components/TaskForm'

class App extends Component {
  constructor(){
    super(); // Heredar toda la funcionalidad de react 
    this.state = {
      tareas
    }// crear el estado del componente
  }
  render() {


    return (
      <div className="App">
        <Navigation></Navigation>
        <div className="container">
          <div className="row mt-4">
              <TaskForm></TaskForm>
          </div>
          <div className="row mt-4"> 
          </div>

        </div>

        <img src={logo} className="App-logo" alt="logo" />
      </div> 
    );
  }  
}

export default App;
