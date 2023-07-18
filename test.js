// function test()
// {
    
//     console.log(a);
//     const a = 5;
// }

// test();


 /*const a =
 {
    name:"Rishabh",
    add:"indiranagar",
    phone:"8423443131",
 }
 ;

 console.log(a.name);*/


//  template literial
//   var a = 5;
//   var b = 10;
//    console.log(`the sum of var ${a} and ${b}`);
  
// arrow function
  
//  let a=(x,y)=>x*y
//  {
//       let b = 
//       console.log(a);
//  }
//   a(5,5);
  
// 3 dot opertor

/*let detail = 
{
    name: "rishabh",
    add: "lko",
    contact:"8423443131"
}

let updatename = 
{
    name:"rishu",
    add:"gkp",
    contact:"123654123",
    display()
    {
        console.log('dfdsf');
    },
    team:
    {
        street:"1090",
        location:"chotrigali"
    }
    
}

let final = [{...detail},{...updatename}]

console.log(updatename.team.street);*/



//SPREAD OPERATOR  ...

// let a =[1,2,3,4,5];
// let b =[6,7,8,9,10];

// console.log(b,...a);

// CALL BACK FUNCTION
let a = (mess,task)=>{
    setTimeout(mess,5000);
    task();
   
}
 let mess = ()=>{
    console.log('sdfg');
 }

 let task = ()=>console.log('agfh');

 a(mess,task);

