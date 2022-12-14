window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
    if (document.getElementById("loan-amount").value < 0
    || document.getElementById("loan-years").value < 0
    || document.getElementById("loan-rate").value < 0) {
        alert('Please enter only positive values.');
        location.reload()
    }
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    let loanAmount = document.getElementById("loan-amount");
    let term = document.getElementById("loan-years");
    let yearlyRate = document.getElementById("loan-rate");
    loanAmount.defaultValue = '500000';
    term.defaultValue = '30';
    yearlyRate.defaultValue = '6.5';
    update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
    let currentValues = getCurrentUIValues();
    updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    let p = values.amount;
    let i = (values.rate/100)/12;
    let n = values.years*12;
    let payment = 0
    if(values.rate > 0) {
        payment = ((p*i)/(1-Math.pow((1+i), -n))).toFixed(2);
    } else {
        payment = (p/n).toFixed(2);
    }
    return payment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
    let monthlyPayment = document.querySelector('#monthly-payment');
    monthlyPayment.innerText = '$' + monthly
}
