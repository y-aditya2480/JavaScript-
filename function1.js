function addTwoNumber(n1, n2) {
    console.log(n1+n2);
}

// addTwoNumber(1,2)
// addTwoNumber(1, "2")    //CONCATENATION HAPPENED HERE...

function loginUserMessage(name) {
    if(name === undefined) {
        console.log("Please enter a username.")
        return;
    }
    else{
        return `${name} just logged in.`;
    }
}

// console.log(loginUserMessage());

//TO TAKE N NUMBER OF INPUTS...
function calculatePrice(val1, val2 ,...num1) {
    return num1
}

// console.log(calculatePrice(200,300,400,500))

const obj1 = {
    name: "aditya",
    age: 21
}

function handleObject(anyObj) {
    console.log(`Username is ${anyObj.name} and there age is ${anyObj.age}`);
}

handleObject(obj1);