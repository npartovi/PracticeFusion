import React, { Component } from 'react'
import {MyContext} from '../myProvider';
import DoctorShowItem from './doctorShowItem';


class DoctorShow extends Component{
    constructor(props){
        super(props)
    }


    renderDoctorDetails(context){
      
        const selectedDoctor = context.doctors[context.currentDoctor]
        const simliarDoctors = context.doctors.filter((doctor) => doctor.speciality === selectedDoctor.speciality && doctor.name !== selectedDoctor.name)
                                                .sort((a,b) => {
                                                    return b.rating - a.rating
                                                })
        console.log(simliarDoctors)

        return (
            <div>
            <DoctorShowItem doctor={selectedDoctor} />
            <h1>Similar doctors</h1>
            </div>
        )
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