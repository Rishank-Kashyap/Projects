const randomColor = function() {
    const hex = "01234567889ABCDEF"
    let color='#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let changeColor
const startChangingColor = function() {
    if(!changeColor){
        changeColor = setInterval(changeBgColor, 1000)
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingColor = function() {
    clearInterval(changeColor)
    changeColor = null
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)