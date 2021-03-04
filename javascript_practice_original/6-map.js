const instructors = [
    {name: 'Quincy', specialty: 'Quantum Mechanics'},
    {name: 'Kenn', specialty: 'Norse Mythology'},
    {name: 'Paul', specialty: 'Tuvan throat singing'},
    {name: 'Aaron', specialty: 'Entomology'},
    {name: 'Carolyn', specialty: 'Kung Fu'}
]

// LOOP
let instructor_names = [];

for (let i =0; i < instructors.length; i += 1) {
    instructor_names.push(instructors[i].name);
}
console.log(instructor_names);

// MAP
const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);

// Exact same thing, different parameter name
const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNamesTwo);


// PRACTICE FIX THE FOLLOWING CODE - ORIGINAL
// const instructorInfo = `${instructor.map(instructor => ${instructor.name}: ${instructors.specialty})}`;

// Practice Fix the Following Code - Fixed
const instructorInfo = instructors.map(instructor => `${instructor.name}: ${instructor.specialty}`);
console.log(typeof(instructorInfo));
console.log(instructorInfo);

// Practice Fix the Following Code - Fixed 2
const instructorInfoTwo = `${instructors.map(instructor => `${instructor.name}: ${instructor.specialty}`)}`;
console.log(typeof(instructorInfoTwo));
console.log(instructorInfoTwo);


// ADDITIONAL PRACTICE
let kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
];
console.log(kvArray);

let reformattedArray = kvArray.map(obj => {
    var rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
    return rObj;
})