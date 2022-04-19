function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        console.log('Got 3 digit Pin, Calling again', pin)
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', (e) => {
    const number = e.target.innerText;
    const calc = document.getElementById('typed-number');
    if (isNaN(number)) {
        if (number == 'C') {
            calc.value = '';
        }
    } else {
        calc.value += number;
    }

})


//try fucntion reducer
function tryReducer() {
    const tryCase = document.getElementById('try');
    const tryCaseTxt = tryCase.innerText;
    return tryCase.innerText = parseInt(tryCaseTxt) - 1;
}

function verifyPin() {
    const btnSubmit = document.getElementById('btn-submit');
    const tryreduce = tryReducer();
    if (tryreduce == 0) {
        btnSubmit.disabled = 'f'
    }
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-number').value;
    const successMssg = document.getElementById('notify-success');
    const failedError = document.getElementById('notify-failed');
    const trysucess = document.getElementById('try-case');

    if (pin == typedNumbers) {
        successMssg.style.display = 'block'
        failedError.style.display = 'none'
        trysucess.style.display = 'none'
    } else {
        failedError.style.display = 'block'
        successMssg.style.display = 'none'
        trysucess.style.display = 'block'
    }

}