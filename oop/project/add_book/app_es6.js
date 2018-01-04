//  ES6 VERSION


// BOOK CONSTRUCTOR
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI CONSTRUCTOR
class UI {
  addBookToList(book) {
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

  showAlert(message, className) {
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

  deleteBook(target) {
    // Targeting X
    if(target.className === 'delete') {
      // Deleting - a => td => tr (dom traversing)l
      target.parentElement.parentElement.remove();
      return;
    }
  }

  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}


// LOCAL STORAGE CLASS
class Store {

  static getBooks() {
    let books;
    if(localStorage.getItem('books')===null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();
    books.forEach(function(book){
      // INSTANTIATING UI TO USE ITS METHOD
      const ui = new UI;
      // Add book to UI
      ui.addBookToList(book);
    })
  }

  static addBook(book){
    const books = Store.getBooks();

    books.push(book);
    // setItem(key, value) - stringify, puts array as strings
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn){
    const books = Store.getBooks();
    books.forEach(function(book, index){
      if(book.isbn === isbn){
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// DOM LOAD EVENT
document.addEventListener('DOMContentLoaded', Store.displayBooks);


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

   // ADD TO LOCAL STORAGE
   Store.addBook(book);

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

  // DELETE BOOK
  ui.deleteBook(e.target);

  // REMOVE FROM LOCAL STORAGE - retrieving isbn number
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show message
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
})