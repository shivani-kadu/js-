//Array have important method like slice and Splice 
const myarr= new Array(1,3,4,5,6,7);
const myn2=myarr.slice(1,5)
console.log(myn2);
// Output[ 3, 4, 5, 6 ]
//splice() → modifies original array

const myn3=myarr.splice(1,3);
console.log(myn3);
//[ 3, 4, 5 ]
//// newArr = [4,5], arr unchanged


const marval=["thor","ironman","spiderman"]
console.log(marval);
//[ 'thor', 'ironman', 'spiderman' ]

const holly= ["superman","hero","zero"]
marval.push(holly)
console.log(marval);
//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'hero', 'zero' ] ]


//spead operator 
const hero=[...marval, ...holly]
console.log(hero);
//these method is devide in oputput in separatioin 

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const another_arr =another_array.flat(infinity)
console.log(another_arr);
//output-[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("shivani"))
console.log(Array.from("shivani"))
console.log(Array.from({name:"shivani"}))  ///interesting
