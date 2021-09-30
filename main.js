let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let body = document.querySelector('body');

input1.addEventListener('keydown',()=>{
    let message = "<p>Du skriver en besked!</p>";
    body.innerHTML = message;
});