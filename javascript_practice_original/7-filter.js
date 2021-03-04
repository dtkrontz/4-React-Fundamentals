const instructors = [
    {name: 'Aaron', specialty: 'Entomology', medals: 7},
    {name: 'Carolyn', specialty: 'Fencing', medals: 5},
    {name: 'Kenn', specialty: 'Norse Mythology', medals: 8},
    {name: 'Paul', specialty: 'Tuvan throat singing', medals: 4},
    {name: 'Quincy', specialty: 'Quantum mechanics', medals: 2},
    {name: 'Tom', specialty: 'Chemistry', medals: 3}
]

// LOOP
let instructor_names = [];

for (let i = 0; i < instructors.length; i += 1) {
    if (instructors[i].medals >= 5) {
        instructor_names.push(instructors[i].name);
    }
}
console.log(instructor_names);

// MAP
const instructorNames = instructors.filter(instructor => instructor.medals >= 5);
console.log(instructorNames);

// Exact Same Thing, Different Parameter Name
const instructorNamesTwo = instructors.filter(i => i.medals >= 5);
console.log(instructorNamesTwo);