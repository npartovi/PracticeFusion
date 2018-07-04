import React, { Component } from 'react';
import DoctorList from './components/doctorList';
import DoctorShow from './components/doctorShow';
import MyProvider from './myProvider';


class App extends Component {
  render() {
    return (
      <MyProvider>
      <div className="main-app-container">
        <div className="doctor-list-container">
          <DoctorList />
        </div>
        <div className="doctor-show-container">
          <DoctorShow />
        </div>
      </div>
      </MyProvider>
    );
  }
}

export default App;
