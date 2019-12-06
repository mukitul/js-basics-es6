// different ways of declaring functions

// way 1
function square(x){
    let res = x*x;
    return res;
}

console.log(square(10));


// way 2
let message = function(){
    return "This is a test Message";
}

console.log(message());


// arrow functions
let square1 = (x) => { return x * x; };

let square2 = x => x * x;

const sayHello = () => {
    console.log("Hello");
};

console.log("square 1: ",square(4));
console.log("square 2: ",square(5));
sayHello();