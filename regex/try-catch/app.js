const user = {email: 'jdoe@gmail.com'};



try {
  // Produce a ReferenceError
  // myFunction();


  // Produce a TypeError
  // null.myFunction();

  // Will produce SyntaxError
  // eval('Hello World');

  // Will produce a URIError
  // decodeURIComponent('%');

  if(!user.name) {
    // throw 'User has no name';
    // prints SyntaxError: User has no name  at app.js:21
    throw new SyntaxError('User has no name');
  }
} catch(e) {
  console.log(`User Error: ${e.message}`);
  // console.log(e);
  /*
  console.log(e.message);
  // prints Reference error
  console.log(e.name);
  // prints true
  console.log(e instanceof ReferenceError);
  */
} finally {
  console.log('Finally runs regardless of result...')
}

console.log('Program continues...')