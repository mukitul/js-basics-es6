// array
let listOfNumbers = [2, 3, 5, 7, 11];
console.log("value at index 0 ",listOfNumbers[0]);
console.log("value at index 6 ",listOfNumbers[6]);
console.log("length/size of array: ", listOfNumbers.length);


// stack
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);

console.log(sequence);
console.log(sequence.pop());
console.log(sequence);


// objects

let studentData = {
    id:1,
    name:"Mukit",
    schoolName:"BTRI High School"
}
console.log(studentData.name);


// list of objects
let ngesData = [];

let data1 = {
    name: "Moin",
    designation: "SE"
};

let data2 = {
    name: "Raghib",
    designation: "SE"
}

ngesData.push(data1);
ngesData.push(data2);

console.log("nges data: ", ngesData);