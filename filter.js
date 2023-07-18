// let virat = [1,2,3,4,5,6,7,8,9,10];

// let rohit = virat.filter((val=>val>5));
//     console.log(rohit);

let team = [{
    name : "rishabh",
    age :52,
    address : "lko"
},

{
    name : "shivam",
    age : 52,
    address : "lko"
},

{
    name : "amit",
    age : 4,
    address : "pune"
}
];

const result = team.filter((abc)=>{
    if(abc.age==4){
        return{
            age:abc.age
        }
    }

});

console.log(result);


