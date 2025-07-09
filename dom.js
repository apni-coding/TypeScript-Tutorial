var headingEl = document.querySelector('h1');
var anchorEl = document.querySelector('a');
var anchorElClass = document.querySelector('.anchorStyle');
var myBtn = document.getElementById("myButton");
console.log(headingEl.classList);
console.log(anchorEl.href);
console.log(anchorElClass.href);
console.log(myBtn);
myBtn.addEventListener('click', function () {
    alert("btn click");
});
// anchorEl?.innerText = "Contact us"
