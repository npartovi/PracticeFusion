import React, {Fragment} from 'react'

const DoctorRelatedItem = ({doctor}) => {
    return (
        <Fragment>
        <td>{doctor.name}</td>
        <td>{doctor.rating}</td>
        <td>{doctor.speciality}</td>
        <td>{doctor.city}</td>
        </Fragment>
    )
}

export default DoctorRelatedItem