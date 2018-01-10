document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

/*
function getText() {
  // fetch returns promises - then, catch
  fetch('test.txt')
  .then(function(res){
    return res.text();
  })
  .then(function(data) {
    console.log(data);
    document.getElementById('output').innerHTML = data;
  })
  .catch(function(err){
    console.log(err);
  });
}
*/

// WITH ARROW FUNCTIONS
function getText() {
  // fetch returns promises - then, catch
  fetch('test.txt')
    .then(res => res.text())
    // data = res.text()
    .then(data => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err))
}

/*
// GET LOCAL JSON DATA
function getJson() {
  // fetch returns promises - then, catch
  fetch('posts.json')
  .then(function(res){
    return res.json();
  })
  .then(function(data) {
    console.log(data);
    let output = '';
    data.forEach(function(post){
      output += `<li>${post.title}</li>`
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err);
  });
}
*/

// ARROW FUNCTIONS
function getJson() {
  // fetch returns promises - then, catch
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(post => {
        output += `<li>${post.title}</li>`
      });
      document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err))
}

/*
// GET FROM EXTERNAL API
function getExternal() {
  // fetch returns promises - then, catch
  fetch('https://api.github.com/users')
  .then(function(res){
    return res.json();
  })
  .then(function(data) {
    console.log(data);
    let output = '';
    data.forEach(function(user){
      output += `<li>${user.login}</li>`
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err);
  });
}
*/

function getExternal() {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(user => {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}