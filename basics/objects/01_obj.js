const user={}
user.id="123abc"
user.name="shiv"
user.isLoggedIn= false
console.log(user)
//output-{ id: '123abc', name: 'shiv', isLoggedIn: false }


const regular ={
    email:"shivi@gmail.com",
    fullname:{
        username:{
            firstname: "shivi",
            lastname:"kadu",
        }
    }
}

console.log(regular.fullname.username);
//output-{ firstname: 'shivi', lastname: 'kadu' }
console.log((Object.keys(regular)));
//output-[ 'email', 'fullname' ]
console.log((Object.values(regular)));
//output-[ 'shivi@gmail.com', { username: { firstname: 'shivi', lastname: 'kadu' } } ]
console.log((Object.entries(regular)));
//output-[ [ 'email', '
//[
// [ 'email', 'shivi@gmail.com' ],
//[ 'fullname', { username: [Object] } ]
//]


//hasown property is used to check whether the property is present in the object or not]
console.log(regular.hasOwnProperty("email"));
//output-true
console.log(regular.hasOwnProperty("fullname"));
//output-true
console.log(regular.hasOwnProperty("age"));
//output-false      


//courseinsturctor is the property of course object and we are destructuring it to get the value of courseInstructor
const  course={
    name:"js",
    price: 999,
    courseInstructor:"shivaji"
}
console.log(course.name);
//output-js
const {courseInstructor}=course
console.log(courseInstructor);
//output-shivaji    