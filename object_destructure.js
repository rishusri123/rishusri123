// we can call all key and value through this and nested object will be also call

//OLD VESION HOW TO CALL A OBJECT

// let det = {
//     name : "rishabh",
//     address : "indiranagar",
//     phone : "8423443131",
//     email : "decrishu14@gmail.com",
// };
 
//    let xyz = det.name;

//    console.log(xyz);

// NEW VERSION ES6

// const detail = {
//     name : "rishabh",
//     address : "indiranagar",
//     phone : "8423443131",
//     email : "decrishu14@gmail.com",
//     update_profile: 
//     {
//         name_upd:"rishabh",
//         team_upd: "MI",
//         fav_player:"rohit"
//     },
//     test()
//     {
//         console.log(this.address);
//     }

// }
  

// let{ address,phone,email, {update_profile.name_upd}} = detail;

//detail.test();
//console.log(this);
// console.log(detail.name);

// HOW TO CALL OBJECT INSIDE OBJECT

// let profile ={
//     name:"shivam",
//     team: "rcb",
//     fav_player: "virat",

//     update_profile: 
//     {
//         name_upd:"rishabh",
//         team_upd: "MI",
//         fav_player:"rohit"
//     };

//     let c= profile.name;

//     console.log(team_upd);
    
// };

// exmp1
// const abc =[1,undefined,3,4,65,7,854];

// const [a,b="not avl",c,...rest] = abc;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rest);

// exp2

// let xyz = {
//     name:"shivam",
//     age:"25",
//     email:"dec@gamil.com"
// }

// let {name,age} = xyz;

// console.log(name);
// console.log(age);

//exp3

// let team = {
//      fmame:"rishabh",
//      age:"45",
//      email:"rish@gmail.com"
// }
// let {fmame,age,email} = team

// let a = team.fmame;
// let b = team.age;
// console.log(a);
// console.log(b);

//exp4

// let xyz = {
//     name : "virat",
    
//     title:{
//         team : "RCB"
//     }

// };

// let {name,title} = xyz;

// console.log(title);

// exp5

// const obj ={
//     num1:'one',
//     num2:'two'
// };

// const{num1,num2} = obj;

// console.log(obj.num1);


// exp6

const people = [{
    name : "shivam",
    family: {
        fname:"xyz",
        Mname:"pqr",
        sname: "stu"    
    },

    name : "amit",
    family: {
        fname:"xbhjs",
        Mname:"hasc",
        sname: "sca"    
    },
}];

for(const name of people);

console.log(name);
