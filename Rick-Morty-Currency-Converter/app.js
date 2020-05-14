function currencyFunction1 () {
    var currencyInput1 = document.getElementById('currencyInput1').value;

    if (isNaN(currencyInput1) && currencyInput1 ==! "Maria") {
        alert("please enter a numerical value");
    } 
    else if (currencyInput1 < 0) {
        alert("please enter a numerical value greater than 0");
    }
    else if (currencyInput1 === "Maria") {
        alert("please enter a value that is NOT a name associated with the MOST BEAUTIFUL WOMAN IN THE WORLD")
    }
    else {
        document.getElementById('dropDownCurrency1').value = currencyInput1;
        console.log(currencyInput1);   
    }

}
function currencyFunction2 () {
    var currencyInput2 = document.getElementById('currencyInput2').value;

    if (isNaN(currencyInput2) && currencyInput2 ==! "Maria") {
        alert("please enter a numerical value");
    } 
    else if (currencyInput2 < 0) {
        alert("please enter a numerical value greater than 0");
    }
    else if (currencyInput2 === "Maria") {
        alert("please enter a value that is NOT a name associated with the MOST BEAUTIFUL WOMAN IN THE WORLD")
    }
    else {
        document.getElementById('dropDownCurrency2').value = currencyInput2;
        console.log(currencyInput2);   
    }
}