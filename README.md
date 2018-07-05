# Practice Fusion Coding Challenge - [Live Demo](https://npartovi.github.io/PracticeFusion/)




- Total Time Spent
    - logic & coding: 4hrs
    - styling: 2hrs
    - datasource: 2hr
        - This was quite a hassle as I planned to use the better doctors API. After pulling in the data I noticed that the rating score for each doctor was blank, and all the cities were too unique to actually show the sorting of data in action. I eventually found [Json Generator](https://www.json-generator.com/). This lead me to quick and effeciently create the random data that I needed for this project, but also wasted a lot of my initial time on just picking a good data source to use.


## Similar Doctors

I decided to sort the similar doctors by basing them on the selected doctors speciality. Once I was able to filter all the doctors with the same speciality, I wanted to then sort them based on their ratings and show the the ones with the highest rating at the top. below is a code snippet of the filtering function.

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

## Given more time

1. Implement filters for name and gender.
2. Implement sorting by column name for the similar doctors table.
3. Replacing table headers with something else, as Its not possible to create a fixed theader and allow the tbody to be able to scroll.
4. Use a real API instead of generated json data as it would make the project not feel so fake.
5. General refactoring and organization of code.
6. Possibly redesign or change to the UI.

