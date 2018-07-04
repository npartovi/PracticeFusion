import React, { Component } from 'react'
import {MyContext} from '../myProvider';
import DoctorShowItem from './doctorShowItem';


class DoctorShow extends Component{
    constructor(props){
        super(props)
    }


    renderDoctorDetails(context){
        console.log(context.currentDoctor)
        if(!context.currentDoctor){
            return null
        }

        return context.doctors.map((doctor, idx) => {
            if(idx === context.currentDoctor){
                return (
                    <ul key={idx}>
                        <DoctorShowItem doctor={doctor} />
                    </ul>
                )
            }
        })
        
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