

console.log("javascript loaded")

let buttons = document.querySelectorAll(".button")




buttons.forEach((button) => {
    button.addEventListener("click", ()=> {
        button.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
    })

})




/*
*/