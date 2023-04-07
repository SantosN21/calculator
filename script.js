const result = document.querySelector('.result');
const allButtons = document.querySelectorAll('.button');


allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value;
        result.innerText += value;
        if (value == '=') {
            if (result.innerText.includes('/')) {
                const splitStuff = result.innerText.split('/');
                operate('/', splitStuff[0], splitStuff[1])
            }
            if (result.innerText.includes('-')) {
                const splitStuff = result.innerText.split('-');
                operate('-', splitStuff[0], splitStuff[1])
            }
            if (result.innerText.includes('+')) {
                const splitStuff = result.innerText.split('+');
                operate('+', splitStuff[0], splitStuff[1])
            }
            if (result.innerText.includes('*')) {
                const splitStuff = result.innerText.split('*');
                operate('*', splitStuff[0], splitStuff[1])
            }
            if (result.innerText.includes('%')) {
                const splitStuff = result.innerText.split('%');
                operate('%', splitStuff[0], splitStuff[1])
            }
        }
        if (value === 'C') {
            result.innerText = "";
        }
    })
})

const operate = (operator, valueOne, valueTwo) => {
        numOne = parseInt(valueOne);
        numTwo = parseInt(valueTwo);
    if (operator === '/') {
        result.innerText = numOne / numTwo;
    }
    if (operator === '-') {
        result.innerText = numOne - numTwo;
    }
    if (operator === '+') {
        console.log(parseInt(valueOne + valueTwo))
        result.innerText = numOne + numTwo;
    }
    if (operator === '*') {
        result.innerText = numOne * numTwo;
    }
    if (operator === '%') {
        result.innerText = numOne % numTwo;
    }
}


