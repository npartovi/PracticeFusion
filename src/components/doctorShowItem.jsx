import React, {Fragment} from 'react';

const DoctorShowItem = ({doctor}) => {
    return(
        <Fragment>
            <li>{doctor.name}</li>
            <li>{doctor.rating}</li>
            <li>{doctor.gender}</li>
            <li>{doctor.email}</li>
            <li>{doctor.city}</li>
        </Fragment>
    )
    
}

export default DoctorShowItem