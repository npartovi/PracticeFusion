import React, { Component } from 'react';
import DoctorListItem from './doctorsListItem';
import { MyContext } from '../myProvider';

class DoctorList extends Component {
    constructor(props){
        super(props)
    }

    renderList(doctors, setCurrentDoctor){
        return doctors.map((doctor, idx) => {
            return (
            <tr key={idx}  onClick={() => setCurrentDoctor(idx)}>
                <DoctorListItem doctor={doctor} />
            </tr>
            )
        })
    }

    render(){
        return(
            <table>
                 <thead>
                    <tr>
                        <th>Name</th>
                        <th>Speciality</th>
                        <th>City</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                <MyContext.Consumer>
                    {(context) => this.renderList(context.doctors, context.setCurrentDoctor)}
                </MyContext.Consumer>
                </tbody>
            </table>
        )
    }
}

export default DoctorList