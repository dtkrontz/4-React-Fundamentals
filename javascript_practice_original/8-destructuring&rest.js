const array = ['thing', 42, false, {key: 'value'}, [1,2,3,4,undefined], NaN];

let stringVar = array[0];
let numVar = array[1];
let objVar = array[3];
let nanvar = array[array.length -1];

console.log(stringVar, numVar, objVar, nanvar);

// Destructuring simplifies this process
let [string, num,, obj,, nan] = array;

console.log(string, num, obj, nan);

// "Spread" out the values of an array into individual values that can be read in context.
let newArr = ['a', 1, undefined, ...array];

console.log(newArr);

const testObj = {
    testString: 'stringy thingy',
    testNum: 23,
    testBool: true,
    testObject: {key: 'waluigi'},
    testArr: [1,2,3,4, undefined],
    testNan: NaN
}

const objString = testObj.testString;
const objNum = testObj.testNum;
const objObj = testObj.testObject;
const objNan = testObj.testNan;

console.log(objString, objNum, objObj, objNan);

let {testString, testobject, testNum, testNan} = testObj;
console.log(objString, objNum, objObj, objNan);

let newObj = {newString: 'more strings', anotherString: 'this is a string', ...testObj};
console.log(newObj);