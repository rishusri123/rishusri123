// first function
let virat =()=>console.log('hello team');
 
let pqr = ()=>console.log("namste");

// in second function name rohit parameter pass (team) show first function in  rohit function.
const rohit = (team,kk) => {
    console.log("hello rishabh");
    team();
    kk();
    
}

// first function under second function
rohit(virat,pqr);