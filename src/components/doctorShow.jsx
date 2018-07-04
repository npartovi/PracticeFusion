import React, { Component } from 'react'
import {MyContext} from '../myProvider';
import DoctorShowItem from './doctorShowItem';
import DoctorRelatedItem from './doctorRelatedItem';


class DoctorShow extends Component{
    constructor(props){
        super(props)
    }


    renderDoctorDetails(context){
      
        const selectedDoctor = context.doctors[context.currentDoctor]
        const simliarDoctors = context.doctors
                            .filter((doctor) => doctor.speciality === selectedDoctor.speciality && doctor.name !== selectedDoctor.name)
                            .sort((a,b) => {return b.rating - a.rating})
                            .map((doctor, idx) => {
                                return( 
                                    <tr key={idx}>
                                        <DoctorRelatedItem  doctor={doctor} />
                                    </tr>
                                    )
                            })
        return (
            <div className="selected-doctor-container">
                <div>
                    <h1>Selected Doctor</h1>
                    <DoctorShowItem doctor={selectedDoctor} />
                </div>

                <div className="similar-doctors">
                    <h1>Similar doctors</h1>
                    <div className="similar-doctors-wrapper">
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Speciality</th>
                            <th>City</th>
                        </tr>
                        </thead>
                        <tbody>
                            {simliarDoctors}
                        </tbody>
                    </table>
                    </div>
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