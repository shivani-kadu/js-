//charAt method
const gameName=new String('Shivani');
console.log(gameName.charAt(8));

//substring 
const newtring = gameName.substring(0,4)
console.log(newtring);

//slice method
const anotherString=gameName.slice(0,4)
console.log(anotherString);

// slice method 
const nstring=gameName.slice(-8,4 )
console.log(nstring);

//trim method 
const str = "  shivi   ";
console.log(str);
console.log(str.trim()); //remove extra space 


//replace method 
const url="https://shivi.com"
console.log(url.replace('com','in'))

//split method 
const newwstr= "Shivi";
console.log(gameName.split('-'));