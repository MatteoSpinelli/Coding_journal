let btn = document.querySelector("#nav img:nth-child(2)")
let body = document.querySelector("body")
let isDark = true

btn.addEventListener("click", (e) => {
    if(isDark){
        btn.src = "asset/moon.png"
        isDark = false
        body.style.filter = "invert(1)"
        body.style.backgroundColor = "#F4F4F4"
        body.style.backgroundImage = 'url("/asset/backgroundLight.svg")'
    } else {
        btn.src = "asset/sun.png"
        isDark = true
        body.style.filter = "invert(0)"
        body.style.backgroundColor = "#262626"
        body.style.backgroundImage = 'url("/asset/background.svg")'
    }
})