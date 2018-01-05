document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function() {
    if(this.status === 200){
      // console.log(this.responseText);
      // JSON.parse - converts to object for us to use customer.name customer.company etc.
      const customer = JSON.parse(this.responseText);
      // console.log(customer);
      const output = `
        <ul>
          <li>ID: ${customer.id} </li>
          <li>Name: ${customer.name} </li>
          <li>Company: ${customer.company} </li>
          <li>Phone: ${customer.name} </li>
        </ul>
      `;

      document.getElementById('customer').innerHTML = output;
    }
  }
  xhr.send();
}



function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function() {
    if(this.status === 200){
      // console.log(this.responseText);
      // JSON.parse - converts to object for us to use customer.name customer.company etc.
      const customers = JSON.parse(this.responseText);

      let output = '';

      customers.forEach(function(customer){
        output += `
        <ul>
          <li>ID: ${customer.id} </li>
          <li>Name: ${customer.name} </li>
          <li>Company: ${customer.company} </li>
          <li>Phone: ${customer.name} </li>
        </ul>
      `;
      });

      document.getElementById('customers').innerHTML = output;
    }
  }
  xhr.send();
}