document.getElementById('button').addEventListener('click', loadData);


function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  /*
   OPEN - specify type of request we want to make
   open(type of request, filename, async=true or false)
  */
  xhr.open('GET', 'data.txt', true);

  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"

  // prints READYSTATE 1
  console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function() {
    // Prints 3
    console.log('READYSTATE', xhr.readyState);
  }


  // When everything is ready - it will call onload
  xhr.onload = function(){
    // this refers to xhr
    if(this.status === 200) {
      // this.responseTxt - comes from data in data.txt
      // console.log(this.responseTxt);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }

/*
  // SECOND METHOD
  xhr.onreadystatechange = function() {
    if(this.status === 200 && this.readyState === 4){
      console.log(this.responseText);
    }
  }
*/

xhr.onerror = function() {
  console.log('Requst error...');
}

  // Finally it sends it
  xhr.send();

  /*
    readyState Values
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready
  */
}