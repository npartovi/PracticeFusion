import React, { Component } from 'react';
import doctors from './doctors.json'

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    doctors: doctors,
    currentDoctor: null
  }

  render(){
    return(
    <MyContext.Provider value={{doctors: this.state.doctors}}>
      {this.props.children}
    </MyContext.Provider>
    )
  }
}

export default MyProvider