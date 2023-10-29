// OBJECT SINGLETON OR OBJECT FROM CONSTRUCTORS...

//const tinderUser = new Object();    // IT IS SINGLETON...

const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "adi";
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//OBJECT INSIDE OBJECT...
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname : "Aditya",
            lastname: "Yadav"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


//MERGING THE OBJECTS...
const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"a", 4:"b"}
const obj4 = { 5:"a", 6:"b"}

// const obj3 = Object.assign({}, obj1, obj2,obj4);
// jo first vala {} hai vo target object hai bakki bacche hue source object hai...

const obj3 = {...obj1, ...obj2};    //this method is commonly used to merge the object
// console.log(obj3)


// SOME IMPORTANT METHODS OF OBJECTS...
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))  
// console.log(Object.entries(tinderUser)) 

// console.log(tinderUser.hasOwnProperty('isLogged'))  //true aaega if vo key us object me hai to nhi to false...



//
const course = {
    coursename :"js in hindi",
    price: "999",
    courseInstructor: "Aditya"
}

// course.courseInstructor

//aap kisi bhi key ko aese bhi access krr sakte hai, unka allias banake ya seedha key ke naam se bhi 

// THIS IS CALLED OBJECT DE-STRUCTURE...

// const {courseInstructor} = course;
const {courseInstructor: instructor} = course;

console.log(instructor);


//  RANDOMUSERME :- to generate random api...
//  JSON FORMATTER :- to see what is written in the api...