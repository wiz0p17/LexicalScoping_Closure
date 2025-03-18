
function changeColor(color){
    // document.body.style.backgroundColor = `${color}`
    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById('orange').onclick = changeColor('orange')
document.getElementById('red').onclick = changeColor('red')

