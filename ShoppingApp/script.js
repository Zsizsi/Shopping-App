
let shoppingList = [{
    name: "High heel shoe",
    quantity: 20
}, {
    name: "Mini skirt",
    quantity: 2
}, {
    name: "makeup",
    quantity: 1
}, {
    name: "Rich man",
    quantity: 3
}];

let doneList = [];

// Shopping list
function renderShoppingList() {
    const container = document.querySelector('#shopping-list');
    const listEl = container.querySelector('.list');

    listEl.innerHTML = '';

    shoppingList.forEach(shoppingItem => {
        const itemLi = document.createElement('li');

        const html = `
            <span>${shoppingItem.name}</span>
            <span>${shoppingItem.quantity}</span>
            <button class="btn-delete"><i class="fas fa-trash-alt"></i></button>
        `;
        itemLi.innerHTML = html;

        const btnDelete = itemLi.querySelector('button.btn-delete');
        btnDelete.addEventListener('click', event => {
            shoppingList = removeItem(shoppingItem, shoppingList);
            renderShoppingList();
        });

        listEl.appendChild(itemLi);
    });
}

// Add item
function addItemToList() {
    const containerEl = document.querySelector('#add-item');
    const formEl = containerEl.querySelector('#add-item-form');

    formEl.addEventListener('submit', event => {
        event.preventDefault();
        const item = {};

        item.name = formEl.querySelector('input[name=item]').value;
        item.quantity = formEl.querySelector('input[name=quantity]').value;

        if (item.name) {
            formEl.reset();
            addItem(item, shoppingList);
            renderShoppingList();
        }
    })
}
// add and remove item function
function addItem(targetItem, targetList) {
    targetList.push(targetItem);
}

function removeItem(targetItem, targetList) {
    return targetList.filter(item => item.name !== targetItem.name);
}

// Start application
renderShoppingList();
addItemToList();




