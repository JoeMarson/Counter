let count = 0
let shownNumber = document.getElementById('number')
const decrease_btn = document.getElementById('decBtn')
const reset_btn = document.getElementById('resBtn')
const increase_btn = document.getElementById('incBtn')


function decrease(){
    count = count-1
    shownNumber.innerHTML = count
}

function reset(){
    count = 0
    shownNumber.innerHTML = count
}

function increase(){
    count = count+1
    shownNumber.innerHTML = count
}

function main(){
    decrease_btn.addEventListener('click', function(){
        decrease()
    })
    reset_btn.addEventListener('click', function(){
        reset()
    })
    increase_btn.addEventListener('click', function(){
        increase()
    })
}

main()