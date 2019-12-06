function getValue(n) {
    let local = n;
    return () => local;
}

let val1 = getValue(1);
let val2 = getValue(2);

console.log("val 1:", val1());
console.log("val 2", val2());