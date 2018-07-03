import React, { Component } from 'react';
import DoctorList from './components/doctorList';
import doctors from './doctors'

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    doctors: doctors
  }

  render(){
    <
  }
}



class App extends Component {
  render() {
    return (
      <div className="main-app-container">
      </div>
    );
  }
}

export default App;
