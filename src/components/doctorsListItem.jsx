import React from 'react'

const DoctorListItem = ({doctor}) => {
    return  <tr>
                <td>{doctor.name}</td>
                <td>{doctor.speciality}</td>
                <td>{doctor.city}</td>
                <td>{doctor.rating}</td>
            </tr>
}

export default DoctorListItem