import React, {Fragment} from 'react';

const DoctorShowItem = ({doctor}) => {
    return(
        <div className="doctor-show-container">
            <p>{doctor.name}</p>
            <p>{doctor.rating}</p>
            <p>{doctor.gender}</p>
            <p>{doctor.email}</p>
            <p>{doctor.city}</p>
            <p>{doctor.phone}</p>
            <p>{doctor.state}</p>
            <p>{doctor.street}</p>
            <p>{doctor.speciality}</p>
        </div>
    )
}

export default DoctorShowItem