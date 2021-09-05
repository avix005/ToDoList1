const addButton = document.querySelector('#addButton');
const inputAdd = document.querySelector('#input');
const container = document.querySelector('#container');


function item(itemName) {
    const itemBox = createItemBox(itemName);
    container.appendChild(itemBox);
};

function createItemBox(itemName) {
    const itemBox = document.createElement('div');
    itemBox.classList.add('item');

    const input = createItem(itemName);
    itemBox.appendChild(input);

    const editButton = firstButton(input)
    itemBox.appendChild(editButton);

    const removeButton = secondButton(itemBox)
    itemBox.appendChild(removeButton);

    return itemBox;
};

function createItem(itemName) {
    const input = document.createElement('input');
    input.value = itemName;
    input.disabled = true;
    input.classList.add('itemInput');
    input.type = "text";
    return input
};

function firstButton(input) {
    const editButton = document.createElement('button');
    editButton.textContent = "EDIT"
    editButton.classList.add('baseButton', 'editButton');
    editButton.addEventListener('click', () => edit(input));
    return editButton
};

function secondButton(itemBox) {
    const removeButton = document.createElement('button');
    removeButton.textContent = "REMOVE"
    removeButton.classList.add('baseButton', 'removeButton');
    removeButton.addEventListener('click', () => remove(itemBox));
    return removeButton
};

function edit(input) {
    input.disabled = false;
};

function remove(itemBox) {
    container.removeChild(itemBox);
};

function check(value) {
    if (value.trim() !== "") {
        return true;
    }

    return false;
};

function create(value) {
    item(value);
    inputAdd.value = "";
};

addButton.addEventListener('click', () => {
    const { value } = inputAdd
    if (check(value)) {
        create(value)
    }
});

inputAdd.addEventListener('keydown', (e) => {
    const enterCode = 13
    if (e.which === enterCode) {
        const { value } = inputAdd
        if (check(value)) {
            create(value)
        }
    }
})