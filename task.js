const detail = [
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



console.log(result);
