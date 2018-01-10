const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

/*

// Sychronous 

function createPost(post) {
  setTimeout(function(){
    posts.push(post);
  }, 2000);
}

function getPosts() {
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: "This is post three"});

// Only prints post1 and post2 due to setTimeout
getPosts();
*/




/*
// ASYNCRONOUS

// createPost(object, getPosts())
function createPost(post, callback) {
  setTimeout(function(){
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: "This is post three"}, getPosts);
*/



// PROMISES
function createPost(post) {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      posts.push(post);
      const error = true;

      if(!error) {
        resolve()
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: "This is post three"})
.then(getPosts)
// err = reject('Error: Something went wrong')
.catch(function(err) {
  console.log(err);
});