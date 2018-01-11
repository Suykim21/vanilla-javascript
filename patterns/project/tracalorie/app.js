// STORAGE CONTROLLER


// ITEM CONTROLLER
const ItemCtrl = (() => {
  // Item Constructor
  class Item {
    constructor(id, name, calories) {
      this.id = id;
      this.name = name;
      this.calories = calories;
    }
  }

  // Data Structure / State
  const data = {
    items: [
      /*
        {id: 0, name: 'Steak', calories: 1200},
        {id: 1, name: 'Cookie', calories: 400},
        {id: 2, name: 'Eggs', calories: 300},
      */
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Public Methods
  return {
    getItems: () => {
      return data.items;
    },
    logData: () => {
      return data;
    },
    addItem: (name, calories) => {
      let ID;
      // Create ID
      if(data.items.length > 0) {
        ID = data.items[data.items.length-1].id +1
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories)

      // Create new item
      newItem = new Item(ID, name, calories);
      // Add to items array
      data.items.push(newItem);

      return newItem;
    }
  }
})();







// UI CONTROLLER
const UICtrl = (() => {
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories'
  }

  // Public methods
  return {
    populateItemList: (items) => {
      let html = '';

      items.forEach((item) => {
        html += `
        <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>
        `;
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },

    getItemInput: () => {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },

    addListItem: (item) => {
      // Show the list
      document.querySelector(UISelectors.itemList).style.display = 'block';

      // Create li element
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      // Add ID
      li.id = `item-${item.id}`;
      // Add HTML
      li.innerHTML = `
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      `;
      // Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },
    clearInput: () => {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },

    hideList: () => {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },

    getSelectors: () => {
      return UISelectors;
    }
  }

})();









// APP CONTROLLER
const AppCtrl = ((ItemCtrl, UICtrl) => {

  //Load Event Listeners
  const loadEventListeners = () => {
    // Get UI Selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
  }

  // Add item submit
  const itemAddSubmit = (e) => {
    
    // Get form input from UI Controller
    const input = UICtrl.getItemInput();
    
    // Validations
    const re = /^\d+$/
    const re2 = /^[a-zA-Z]+$/

    // Error msgs
    let errorMsg = ''
    // Check for name and calories input
    if(input.name !== '' && input.calories !== '' && re2.test(input.name) && re.test(input.calories)) {
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      // Add item to UI list
      UICtrl.addListItem(newItem);

      // Clear input
      UICtrl.clearInput();
    } 
    e.preventDefault();
  }

  // Public Methods
  return {
    init: () => {
      // Fetch items from data structures
      const items = ItemCtrl.getItems();

      // Check if any items are on the list
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
      }
      
      // Load event listeners
      loadEventListeners();
    }
  }
  // calls the functions
})(ItemCtrl, UICtrl);

AppCtrl.init();