import React, { Component } from 'react';
import DoctorList from './components/doctorList';
import doctors from './doctors.json'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      doctors: doctors
    }
  }
  render() {
    return (
      <div className="main-app-container">
        <DoctorList doctors={this.state.doctors} />
      </div>
    );
  }
}

export default App;
