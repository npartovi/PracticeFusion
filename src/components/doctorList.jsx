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
            <div className="doctor-list-container">
                <table className="doctor-list-table">
                    <thead>
                        <tr>
                            <th>Name<i class="fas fa-caret-down"></i></th>
                            <th>Speciality<i class="speciality-button fas fa-caret-down">
                                <div className="speciality-dropdown">
                                        <li>Asc</li>
                                        <li>Desc</li>
                                        <li>San Francisco</li>
                                        <li>Santa Clara</li>
                                        <li>Oakland</li>
                                        <li>Walnut Creek</li>
                                        <li>San Jose</li>
                                        <li>Concord</li>
                                    </div>
                            </i></th>
                            <th>City<i class="fas fa-caret-down"></i></th>
                            <th>Rating<i class="fas fa-caret-down"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                    <MyContext.Consumer>
                        {(context) => this.renderList(context.doctors, context.setCurrentDoctor)}
                    </MyContext.Consumer>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DoctorList