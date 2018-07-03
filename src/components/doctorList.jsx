import React from 'react';
import DoctorListItem from './doctorsListItem';

const DoctorList = ({doctors}) => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Speciality</th>
                <th>Location</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>
        {
            doctors.map((doctor, idx) => {
                return(
                    <DoctorListItem key={idx} doctor={doctor} />
                )
            })
        }
        </tbody>
    </table>

)

export default DoctorList