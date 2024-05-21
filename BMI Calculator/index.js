const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height=='' || height<0 || isNaN(height)){
        result.innerHTML = `Please enter a valid Height!`
    }
    else if(weight=='' || weight<0 || isNaN(weight)){
        result.innerHTML = `Please enter a valid Weight!`
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML = `Your BMI is ${bmi}`

        if(bmi<18.6){
            result.innerHTML += ` <br> You are underweight. You should gain some weight.`
        }
        else if(bmi>18.6 && bmi<24.9){
            result.innerHTML += ` <br> You are healthy. You are within the normal range.`
        }
        else{
            result.innerHTML += ` <br> You are overweight. You should lose some weight.`
        }
    }
})