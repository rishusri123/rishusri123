/*const detail = [
    {
     id : 1,
    name : "rishabh",
    sport: "cricket",
    team : "india"
    

    },

{
    id : 2,
    name : "shivam",
    sport: "hockey",
    team : "china"
   
},

{
    id : 3,
    name : "amit",
    sport: "football",
    team : "pakistan"
   
},

{
    id : 4,
    name : "amit",
    sport: "baseball",
    team : "pakistan"
   
},
{
    id : 5,
   name : "rishabh",
   sport: "badminton",
   team : "india"
   

   },
];


 const result = detail.filter((xyz=>xyz.name=="rishabh")).map((pqr)=>{
    
   if (pqr.sport=="cricket"){
      return{
         id:pqr.id,
      
       
      }
   }
});



console.log(result);*/

// convert into arrow function
const abc = (base, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  };
  console.log(abc(3,3));


// multiplication of two no
let xyz = (num1,num2)=>num1 * num2;
console.log(xyz(5,4))

// greet
const greet = (who) => {
    console.log("Hello " + who);
    };

const tuv = "rishabh";
console.log(`hello ${tuv}`);

// fahrenheit to Celsius 

let temp = (fahrenheit)=>(5/9)*(fahrenheit-32);
 console.log(temp(200));

