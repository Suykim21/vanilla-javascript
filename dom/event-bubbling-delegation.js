// EVENT BUBBLING - bubbles up to parent

document.querySelector('.card-title').addEventListener('click', function(){
  console.log('card title');
})

document.querySelector('.card-content').addEventListener('click', function(){
  console.log('card content');
})

document.querySelector('.card').addEventListener('click', function(){
  console.log('card');
})

document.querySelector('.col').addEventListener('click', function(){
  console.log('col');
})

// EVENT DELEGATION - delegates from parent to child elements
// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  console.log(e.target);
  // parentElement targets parent element such as a tag instead of icon
  // if(e.target.parentElement.className === 'delete-item secondary-content') {
  //   console.log('delete item');
  // }

  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    // i > a > li = removing entire row;
    e.target.parentElement.parentElement.remove();
  }
}