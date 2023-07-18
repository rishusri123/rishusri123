//syntax     ${variable_name}
// example1

// let a = "rishabh";

// console.log(`MY name is ${a}. srivastav`);

// //example2

// let b = 40;
//   console.log(`the square of b is ${b*b}`);







//  const abc = ()=>{
//   for(let i=0; i<number.length; i++)
//   {
//     if(number[i]%2==0)
//     {
//       console.log(number[i]);
//     }
//   }
//  }
//  const xyz = ()=>{
//   for(let i=0; i<number.length; i++)
//   {
//     if(number[i]%2!=0)
//     {
//       console.log(number[i]);
//     }
//   }
//  }
//   abc();


/*const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,,15,16,17,18,19,20];
const abc =(num,callback)=>{
  for(let i=0; i<number.length; i++){
    if(callback(number[i])){
      console.log(number[i]);
    }
  }
}
const add =(numi) =>numi%2==0;
const odd = (numi)=>numi%2>0;

//console.log(callback(43));
abc(number,odd);*/

// MAP
const number = [1,2,3,4,5,6,7,8,9,10];
const result = number.map(num=>num*2);
console.log(result);
// console.log(number);

// for each
// const number = [1,2,3,4,5,6,7,8,9,10];
// const result = number.forEach(abc=>console.log(abc));

// console.log(result);

const students =[
  {
    name:"abc",
    class:"10",
    email:"xayz@gmail.com"
  },

  {
    name:"rishabh",
    class:"8",
    email:"abc@gmail.com"

  },

  {
    name:"shivam",
    class:"7",
    email:"pqr@gmail.com"

  },
  {
    name:"aman",
    class:"7",
    email:"tuv@gmail.com"

  },


]

/*const team = students.find((stu=>{
  if(stu.email=="pqr@gmail.com"){
  return{
    name:stu.name,
    class:stu.class,
  }
  }

}))   
console.log(team);*/


// FOR EACH

// const xyz = students.forEach(stu=>{




