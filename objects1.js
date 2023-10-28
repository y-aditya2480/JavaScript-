//singleton
// AGAR OBJECTS CONSTRUCTORS SE BAN RAHE HAI TO SINGLETON HAI 
// ORR AGAR LITERALS SE BAN RAHE HAI TO SINGLETON NHI HAI



//OBJECT LITERALS...

const JsUser = {
    name : "Aditya",
    "full name" : "Aditya Yadav",
    age : 21,
    location : "Guna",
    email : "adi@gmail.com",
    isLoggedIn : false

    // object me key ko as a string consider krte hai...
}


// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);

//TO CHANGE THE VALUE OF KEY IN OBJECT..
JsUser.email = "aditya@gmail.com";
// console.log(JsUser.email);

//TO STOP THE VALUES OF OBJECT GETTING CHANGED...
// Object.freeze(JsUser);
JsUser.email = "aditya@gmai.com";   //value change nhi hogi freeze ke baad...
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello There");
}
JsUser.greetingTwo = function(){
    console.log(`Hello there ${this.name}.`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());