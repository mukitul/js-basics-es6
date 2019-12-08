//backend data
let data = [
    {id: 1, name: "MOin"},
    {id: 2, name: "Raghib"},
];


function getPosts() {
    let output = [];
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            data.forEach((row, index) => {
                console.log('row-->', row);
                //output.push(row);
            });
            const  flag = true;
            if(flag){
                resolve(output);
            }else{
                reject("Wrong");
            }
        }, 1000);
    });

}

let res = getPosts();

console.log('message--res', res);
res.then(function (msg) {
    console.log('result', res);

});

console.log('i am doing task 1');
console.log('i am doing task 2');
console.log('i am doing task 3');

