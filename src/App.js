import React, { Component } from 'react';
import DoctorList from './components/doctorList';
import DoctorShow from './components/doctorShow';
import MyProvider from './myProvider';


class App extends Component {
  render() {
    return (
      <MyProvider>
      <div className="main-app-container">
        <DoctorList />
        <DoctorShow />
      </div>
      </MyProvider>
    );
  }
}

export default App;
