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
            <div className="selected-doctor-container">
                <div>
                    <h1>Selected Doctor</h1>
                    <DoctorShowItem doctor={selectedDoctor} />
                </div>

                <div>
                    <h1>Similar doctors</h1>
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Speciality</th>
                            <th>City</th>
                        </tr>
                        </thead>
                    </table>
                </div>
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