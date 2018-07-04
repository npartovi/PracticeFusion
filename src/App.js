import React, { Component } from 'react';
import DoctorList from './components/doctorList';
import MyProvider from './myProvider';

class App extends Component {
  render() {
    return (
      <MyProvider>
      <div className="main-app-container">
        <DoctorList />
      </div>
      </MyProvider>
    );
  }
}

export default App;
