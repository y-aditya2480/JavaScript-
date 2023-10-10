let but = document.querySelector('button');
// but.addEventListener('click', showMsg);
but.addEventListener('click', inputMsg);

// function showMsg() {
//     alert("Hello World!"); 
// }

function inputMsg() {
    let name =  prompft('Enter Name of the student');
    but.textContent = 'Roll No. 1: ' + name;
}

