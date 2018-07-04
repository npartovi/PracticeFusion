import React, { Component } from 'react';
import DoctorListItem from './doctorsListItem';
import { MyContext } from '../myProvider';

class DoctorList extends Component {
    constructor(props){
        super(props)

        this.state ={
            filter: ""
        }

        this.specialityFilter = this.specialityFilter.bind(this);
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

    specialityFilter(e){
        e.preventDefault()
        this.setState({filter: e.currentTarget.innerText})
    }

    render(){
        return(
            <div className="doctor-list-container">
                <table className="doctor-list-table">
                    <thead>
                        <tr>
                            <th>Name<i className="fas fa-caret-down"></i></th>
                            <th>Speciality<i className="speciality-button fas fa-caret-down">
                                <div className="speciality-dropdown">
                                        <li onClick={this.specialityFilter}>Surgery</li>
                                        <li onClick={this.specialityFilter}>Dermatology</li>
                                        <li onClick={this.specialityFilter}>Physical Therapy</li>
                                        <li onClick={this.specialityFilter}>Psychiatry</li>
                                        <li onClick={this.specialityFilter}>Dentistry</li>
                                    </div>
                            </i></th>
                            <th>City<i className="fas fa-caret-down"></i></th>
                            <th>Rating<i className="fas fa-caret-down"></i></th>
                            <th>Gender</th>
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