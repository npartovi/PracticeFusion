import React, { Component } from 'react';
import doctors from './doctors.json'

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    doctors: doctors,
    currentDoctor: 0,
    setCurrentDoctor: (idx) => this.setState({currentDoctor: idx})
  }

  render(){
    return(
    <MyContext.Provider value={{
        doctors: this.state.doctors,
        setCurrentDoctor: this.state.setCurrentDoctor,
        currentDoctor: this.state.currentDoctor
        }}> 
        {this.props.children}
    </MyContext.Provider>
    )
  }
}

export default MyProvider