// BASIC STRUCTURE

/*
(function(){
  // Declare private vars and functions

  return {
    // Declare public var and functions
  }
})();
*/

/*
// STANDARD MODULE PATTERN
const UICtrl = (function() {
  let text = 'hello world';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  }
})();

UICtrl.callChangeText();
*/

// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
  // add _ for private variables
  let _data = [];

  // ItemCtrl.add1({id: 1, name: 'John'});
  function add(item) {
    _data.push(item);
    console.log('Item added...');
  }

  // console.log(ItemCtrl.get1(1));
  function get(id) {
    return _data.find(item => {
      return item.id === id;
    });
  }

  return {
    // making private functions public
    add1: add,
    get1: get
  }
})();

ItemCtrl.add1({id: 1, name: 'John'});
ItemCtrl.add1({id: 2, name: 'Mark'});
console.log(ItemCtrl.get1(1));