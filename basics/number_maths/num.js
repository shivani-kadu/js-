const score=500
console.log(score);

const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

//presicion is depanding on our value they are  mainly focused on precedence pf the  3 decimal values then they cheak after point value 
const other=123.8970;
console.log(other.toPrecision(4));
// in formal word -Sets precision based on the total number of significant digits (both before and after the decimal)

//tolocalstring
const hudreds=100000
console.log(hudreds.toLocaleString('en-IN'));

///+++++++++Maths+++++++////

//1. abs value 
//2. around -function
//3.ceil method (top)
//4.floor (down value)
//5. squrt  method 
//6. Min method 
//7. max method 

//important -math.random ()-qalways math.random value belong in 0 and 1 
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

