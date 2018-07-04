import React, { Component } from 'react';
import DoctorListItem from './doctorsListItem';
import { MyContext } from '../myProvider';

class DoctorList extends Component {
    constructor(props){
        super(props)

        this.handleCurrentDoctor = this.handleCurrentDoctor.bind(this)
    }


    renderList(doctors){
        return doctors.map((doctor, idx) => {
            return <DoctorListItem key={idx} doctor={doctor} />
        })
    }

    handleCurrentDoctor(idx){
        console.log(idx)

    }


    render(){
        return(
            <div>
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
                    {(context) => this.renderList(context.doctors)}
                </MyContext.Consumer>
                </tbody>
            </div>
        )
    }
}

export default DoctorList