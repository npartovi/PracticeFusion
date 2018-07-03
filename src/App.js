import React, { Component } from 'react';
import DoctorList from './components/doctorList';
import doctors from './doctors.json'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      doctors: doctors,
      selectedDoctor: null
    }

    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(e){
    console.log(e.target)
    console.log('hello')
    // this.setState({selectedDoctor: e.target })
  }

  render() {
    return (
      <div className="main-app-container">
        <DoctorList doctors={this.state.doctors} handleSelect={this.handleSelect} />
      </div>
    );
  }
}

export default App;
