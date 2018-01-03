// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  // Hide Results
  const results = document.getElementById('results');
  results.style.display = 'none';

  // Show Loader
  const loading = document.getElementById('loading');
  loading.style.display = 'block';

  setTimeout(calculateResults, 1000);

  e.preventDefault();
});


// CALCULATE RESULTS
function calculateResults(){
  // UI VARS
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  // parseFloat - turn numbers into decimal
  const principal = parseFloat(amount.value);
  console.log('principal: ', principal);
  // Calculating interest% per month
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  console.log('calculatedInterest: ', calculatedInterest);
  // Calculating #months of given user year input
  const calculatedPayments = parseFloat(years.value) *12;
  console.log('calculatedPayment: ', calculatedPayments);


  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  console.log('x: ', x);
  const monthly = (principal * x * calculatedInterest)/(x-1);
  console.log('monthly: ', monthly);
  // Check to see if number is finite
  if(isFinite(monthly)) {
    // toFixed(2) - computes 2 decimal places ex: 3.35
    monthlyPayment.value = monthly.toFixed(2);
    console.log('monthlyPayment:', monthlyPayment.value);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    console.log('totalPayment: ', totalPayment.value);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    console.log('totalInterest: ', totalInterest.value);

    // Show Results
    results.style.display = "block";
    
    // Hide Loader
    loading.style.display = "none";

  } else {
    showError('Please Check your numbers');
  }
}

// SHOW ERROR
function showError(error){
  // Hide Results and Loader
  results.style.display = 'none';
  loading.style.display = 'none';

  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');


  // Add class - utilizing bootstrap class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert Error above heading - inserting error msg before heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 2000);
}

// CLEAR ERROR
function clearError(){
  document.querySelector('.alert').remove();
}