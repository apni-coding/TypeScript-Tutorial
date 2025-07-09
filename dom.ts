var headingEl: HTMLHeadingElement = document.querySelector('h1')!;
var anchorEl: HTMLAnchorElement = document.querySelector('a')!;
var anchorElClass = document.querySelector('.anchorStyle')! as HTMLAnchorElement
let myBtn = document.getElementById("myButton")! as HTMLButtonElement

console.log(headingEl.classList)
console.log(anchorEl.href)
console.log(anchorElClass.href)
console.log(myBtn)

myBtn.addEventListener('click',()=>{
    alert("btn click")
})

// anchorEl?.innerText = "Contact us"