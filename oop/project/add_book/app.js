// ES5 VERSION

// BOOK CONSTRUCTOR
function Book (title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI CONSTRUCTOR - set of prototype methods
function UI() {}


// Add Book To List
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');

  // Create tr element
  const row = document.createElement('tr');

  // Insert Columns
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(row);

}

// SHOW ALERT
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement('div');
  // Add classes - ex: <div class="alert error"></div>
  div.className = `alert ${className}`;
  // Add text - ex: <div class="alert error">Please fill in...</div>
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form');
  // Insert alert - insertBefore(what we want to add, before which element)
  container.insertBefore(div, form);

  // Timeout after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 2000);
}

// DELETE BOOK - TARGETING SPECIFIC BOOK AT X MARK
UI.prototype.deleteBook = function(target) {
  // Targeting X
  if(target.className === 'delete') {
    // Deleting - a => td => tr (dom traversing)l
    target.parentElement.parentElement.remove();
    return;
  }
}


// CLEAR FIELDS
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// EVENT LISTENERS FOR ADDING BOOKS
document.getElementById('book-form').addEventListener('submit', function(e){

  // Get form values;
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value
  
  // INSTANTIATE BOOK
  const book = new Book(title, author, isbn);

  // INSTANTIATE UI
  const ui = new UI();


  // VALIDATE
  if(title === '' || author === '' || isbn  === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error')

  } 
  // if(isbn != /^\d+$/) {
  //   ui.showAlert('Nice Try Level 1 hacker, please only add numbers to ISBN', 'error')

  // } 
  else {

   // ADD BOOK TO LIST
   ui.addBookToList(book);

   // SHOW SUCCESS
   ui.showAlert('Book Added!', 'success');

   // CLEAR FIELDS
   ui.clearFields(); 
  }

  e.preventDefault();
});

// EVENT LISTENER FOR DELETE
document.getElementById('book-list').addEventListener('click', function(e){

  // INSTANTIATE UI
  const ui = new UI();

  ui.deleteBook(e.target);

  // Show message
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
})