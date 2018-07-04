import React, { Fragment } from 'react'

const DoctorListItem = ({doctor}) => {
    return  <Fragment>
                <td>{doctor.name}</td>
                <td>{doctor.speciality}</td>
                <td>{doctor.city}</td>
                <td>{doctor.rating}</td>
            </Fragment>
}

export default DoctorListItem