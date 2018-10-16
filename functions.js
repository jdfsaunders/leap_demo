
function isDivisible(numerator, denominator) {
    return numerator % denominator === 0;
}

function clickIsDivisible() {
	// Read in the values from the input boxes
	var n = parseInt(document.querySelector('#numerator').value);
	var d = parseInt(document.querySelector('#denominator').value);
	
	// Get the element where we will write the result
	var resultBlock = document.querySelector('#result');
	
	// Clear the styles, because we don't want to try to fight with weird CSS shenanigans
	resultBlock.className = '';
	
	if(isDivisible(n, d)) {
		resultBlock.classList.add('is_divisible');
		resultBlock.textContent = "YES!!!!"
	} else {
		resultBlock.classList.add('is_not_divisible');
		resultBlock.textContent = "no :("
	}	
}

/* function printEvenNumbers(start, end) {
    var i = 0;

    var some_string = "yes";

    for(i = start; i <= end; i++) {
        if (isEven(i, 2)) {
            console.log(i + " : is even");
        } else {
            console.log(i + " : is odd");
        }
    }
}
 */

function clickPrintNumbers() {
	var s = parseInt(document.querySelector('#start').value);
	var e = parseInt(document.querySelector('#end').value);
	var resultBlock = document.querySelector('#even_odd_output');
	
	resultBlock.innerHTML = '';
	for(var i = s; i <= e; i++) {
		var row = document.createElement('div');
		row.textContent = i;
	
		if(isDivisible(i, 2)){
			row.className = 'even_color';
		} else {
			row.className = 'odd_color';
		}
		resultBlock.appendChild(row);
	}
}