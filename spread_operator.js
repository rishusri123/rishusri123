// with the help of spread opertor we can join two or more object and array ./
// example1
// let a = [1,2,3];
// let b = [3,4,5,6];

// console.log(b,...a);


// mutiplication of no
// let num = (a, b) => a * b;
// console.log(num(3,5));


// template literal
// let a = 'shivam';
// console.log(`hello.${a}`);

const team = {
    name:"rishabh",
    age: 21
};

const result = {...team};
result.name = "shivam";
console.log(result);

