import React, { Component } from 'react';
import DoctorListItem from './doctorsListItem';
import { MyContext } from '../myProvider';

class DoctorList extends Component {
    constructor(props){
        super(props)

        this.state ={
            filter: "",
            key: "",
            sorted: ""
        }

        this.specialityFilter = this.specialityFilter.bind(this);
        this.cityFilter = this.cityFilter.bind(this);
        this.ratingFilter = this.ratingFilter.bind(this);
    }


    renderFilteredList(){
        
    }

    renderList(doctors, setCurrentDoctor){

        if(this.state.filter){
            const filteredDoctors = doctors.filter((doctor) => doctor[this.state.key] === this.state.filter )
            
            return filteredDoctors.map((doctor, idx) => {
                return (
                <tr className="doctor-row" key={idx}  onClick={() => setCurrentDoctor(idx)}>
                    <DoctorListItem doctor={doctor} />
                </tr>
                )
            })

        } else {

            if(this.state.sorted == "desc"){
                doctors = doctors.sort((a, b) => a.rating - b.rating )
            } else if (this.state.sorted == "asc"){
                doctors = doctors.sort((a,b) => b.rating - a.rating )
            }

            const doctorList =  doctors.map((doctor, idx) => {
                return (
                <tr className="doctor-row" key={idx}  onClick={() => setCurrentDoctor(idx)}>
                    <DoctorListItem doctor={doctor} />
                </tr>
                )
            })

            return doctorList
        }
    }

    specialityFilter(e,){
        e.preventDefault()
        this.setState({filter: e.currentTarget.innerText , key: "speciality", sorted: ""})
    }

    cityFilter(e){
        e.preventDefault()
        this.setState({filter: e.currentTarget.innerText, key: "city", sorted: ""})
    }

    ratingFilter(e){
        e.preventDefault()
        const toggle = !this.state.sorted || this.state.sorted == "desc" ? "asc" : "desc"
        this.setState({sorted: toggle, filter: "", key: ""})
    }

    

    render(){
        return(
            <div className="doctor-list">
                <div id="doctor-list-wrapper">
                    <table className="doctor-list-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Speciality<i className="speciality-button fas fa-caret-down">
                                    <div className="speciality-dropdown">
                                            <li onClick={this.specialityFilter}>Surgery</li>
                                            <li onClick={this.specialityFilter}>Dermatology</li>
                                            <li onClick={this.specialityFilter}>Physical Therapy</li>
                                            <li onClick={this.specialityFilter}>Psychiatry</li>
                                            <li onClick={this.specialityFilter}>Dentistry</li>
                                        </div>
                                </i></th>
                                <th>City<i className="speciality-button fas fa-caret-down">
                                    <div className="speciality-dropdown">
                                        <li onClick={this.cityFilter}>Walnut Creek</li>
                                        <li onClick={this.cityFilter}>Concord</li>
                                        <li onClick={this.cityFilter}>San Francisco</li>
                                        <li onClick={this.cityFilter}>Santa Clara</li>
                                        <li onClick={this.cityFilter}>Oakland</li>
                                        <li onClick={this.cityFilter}>San Jose</li>
                                    </div>
                                </i></th>
                                <th>Rating<i onClick={this.ratingFilter} className="fas fa-caret-down"></i></th>
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
            </div>
        )
    }
}

export default DoctorList