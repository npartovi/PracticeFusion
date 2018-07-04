# Practice Fusion Coding Challenge

- Total Time Spent
    - logic & coding: 4hrs
    - styling: 2hrs
    - datasource: 2hr
        - This was quite a hassle as I planned to use the better doctors API. After pulling in the data I noticed that the rating score for each doctor was blank, and all the cities were too unique to actually show the sorting of data in action. I eventually found [Json Generator](https://www.json-generator.com/). This lead me to quick and effeciently create the random data that I needed for this project.

```javascript
const selectedDoctor = context.doctors[context.currentDoctor]
const simliarDoctors = context.doctors
                        .filter((doctor) => doctor.speciality === selectedDoctor.speciality 
                                            && doctor.name !== selectedDoctor.name)
                        .sort((a,b) => {b.rating - a.rating})
                        .map((doctor, idx) => {
                            return( 
                                <tr key={idx}>
                                    <DoctorRelatedItem  doctor={doctor} />
                                </tr>
                                )
                        });
```