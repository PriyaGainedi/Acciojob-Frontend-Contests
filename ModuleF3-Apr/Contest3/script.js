var nameval = document.getElementById('name');
var emailval = document.getElementById('email');
var pwdval = document.getElementById('pwd');
var confirmpwdval = document.getElementById('confirmpwd');
var btn = document.getElementById('submit');


function display(){
    console.log(nameval.value);
}

btn.addEventListener(onclick,display);
