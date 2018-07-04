import React, { Component } from 'react'
import {MyContext} from '../myProvider';
import DoctorShowItem from './doctorShowItem';


class DoctorShow extends Component{
    constructor(props){
        super(props)
    }


    renderDoctorDetails(context){

        const selectedDoctor = context.doctors[context.currentDoctor]
        return <DoctorShowItem doctor={selectedDoctor} />
    }


    render(){
        return(
            <MyContext.Consumer>
                {(context) => this.renderDoctorDetails(context)}
            </MyContext.Consumer>
        )
    }
}

export default DoctorShow