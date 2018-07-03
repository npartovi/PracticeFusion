import React, { Component } from 'react';
import DoctorList from './components/doctorList';



class App extends Component {
  render() {
    return (
      <div className="main-app-container">
        <DoctorList />
      </div>
    );
  }
}

export default App;
