function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234'
}

function isCardMonthValid(month) {
    let currentMonth = new Date().getMonth() + 1; // JS months are 0-based
    return month >= currentMonth && month <= 12;
}

function isCardYearValid(year) {
    let currentYear = new Date().getFullYear();
    return year >= currentYear;
}

function displayError(msg) {
	// display error message
	document.querySelector('.errorMsg').innerHTML = msg
}
function submitHandler(event) {
	event.preventDefault()
	let errorMsg = ''
	console.log(this.cardNo.value)
	// clear any previous errors
	displayError('')
	// check credit card number
	if (isNaN(this.cardNo.value)) {
		// it is not a valid number
		errorMsg += 'Card number is not a valid number\n'
	} else if (!isCardNumberValid(this.cardNo.value)) {
		// it is a number, but is it valid?
		errorMsg += 'Card number is not a valid card number\n'
	}
    else if (!isCardMonthValid(this.expirationM.value)) {
		// it is a number, but is it valid?
		errorMsg += 'Card month is not a valid card month\n'
    }
    else if (!isCardYearValid(this.expirationY.value)) {
		// it is a number, but is it valid?
		errorMsg += 'Card year is not a valid card year\n'
    }
	if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg)
		return false
	}
	return true
}

document.querySelector('#credit-card-form').addEventListener('submit', submitHandler)