// let aman = [1,2,3,4,5];

// let b= aman.map(val => val*5);
//   console.log(b);


const abc = (base, exponent) => {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};
console.log(abc(2,5));




   