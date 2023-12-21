//querySelectorAll...

const tempLi = document.querySelectorAll('li')  //it return the elememts in nodeList format... for that use forEach
// tempLi[0].style.color = "green";

// tempLi.forEach(function(l){
//     l.style.backgroundColor = "green";
// })


//getElementByClassName...

const tempClassList = document.getElementsByClassName('list-item')  //it return the elements in HTMLCollection format.. convert it to array to us for each and access each item
const myArr = Array.from(tempClassList);

myArr.forEach(function(l) {
    l.style.color = "red"
})

