document.querySelector('.get-jokes').addEventListener('click', getJokes);


function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      // console.log(response);

      let output = '';

      if(response.type === 'success') {
        // we don't want to for loop the type
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        })
      } else {
        output += '<li>Something went wrong</li>'
      }

      document.querySelector('.jokes').innerHTML = output;
      const response2 = JSON.stringify(response);
      console.log(response);
    }
  }



  xhr.send();

  e.preventDefault();
}