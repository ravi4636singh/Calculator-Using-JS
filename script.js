const buttons = document.querySelectorAll('button')
let resultScreen = document.querySelector('#screen')

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(e.target.textContent === 'AC'){
            resultScreen.value = ''
        }else if(e.target.textContent === '←'){
            resultScreen.value = resultScreen.value.toString().slice(0, -1)
        }else if(e.target.textContent === '='){
            if(resultScreen.value === ''){
                resultScreen.value = ''
            }else{
                let ans = eval(resultScreen.value)
                resultScreen.value = ans
            }
        }else{
            resultScreen.value += e.target.textContent
        }
        
    })
})