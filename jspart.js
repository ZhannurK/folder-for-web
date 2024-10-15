function Sort() {
    let arr = document.getElementById('Array').value.split(' ').map(Number);

    arr.sort(function(a, b) {
      return a - b;
    });
    document.getElementById('Alan').innerHTML = "Ascending order: " + arr;

    arr.sort(function(a, b) {
      return b - a;
    });
    document.getElementById('Alan').innerHTML += "<br>Descending order: " + arr;
  }

function calculateTax() {
    let taxRate;
    let price = document.getElementById('num').value * 1;

    if (price > 10000) {
        taxRate = 0.25;
    } else if (price >= 5000 && price <= 10000) {
        taxRate = 0.20;
    } else {
        taxRate = 0.15;
    }

    let taxAmount = price * taxRate;
    document.getElementById("daniil").innerHTML = taxAmount.toFixed(2);
}

function calculate(event, operation) {
    event.preventDefault();

    let num1 = document.getElementById("num1").value * 1;
    let num2 = document.getElementById("num2").value * 1;
    let output;

    if (operation === 'plus') {
        output = num1 + num2;
    } 
    else if (operation === 'minus') {
        output = num1 - num2;
    } 
    else if (operation === 'multiply') {
        output = num1 * num2;
    } 
    else if (operation === "divide") {
        if (num2 === 0) {
            output = "Division by zero is not allowed.";
        } 
        else {
            output = num1 / num2;
        }
    } 
    else {
        output = "Invalid operation.";
    }
    
    document.getElementById("Adil").innerHTML = "The Output of Calculation is: " + output;
}