const addButton = document.querySelector('#addButton');
const inputAdd = document.querySelector('#input');
const container = document.querySelector('#container');
const input = document.createElement('input');

class Item{
    constructor(itemName){
        //create the item div
        this.createItem(itemName);
    }

    createItem (itemName){       
        input.value = itemName;
        input.disabled = true;
        input.classList.add('itemInput');
        input.type = "text";

        const itemBox = document.createElement('div');
        itemBox.classList.add('item');

        const editButton = document.createElement('button');
        editButton.textContent = "EDIT"
        editButton.classList.add('baseButton', 'editButton')

        const removeButton = document.createElement('button');
        removeButton.textContent = "REMOVE"
        removeButton.classList.add('baseButton', 'removeButton'); 

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input));

        removeButton.addEventListener('click', () => this.remove(itemBox));
    }

    edit(input) {
        input.disabled = !input.disabled;
    }

    remove(item) {
        container.removeChild(item);
    }
}
function create(value){
    new item(value);
        inputAdd.value = "";
}

function check(value){    
    if(value !== ""){
        return true           
    }
    return false
}

inputAdd.addEventListener('keydown', (e) => {    
    if(e.which == 13) {
        const {value} = inputAdd
        if(check(value)){
            create(value)
        }
    }
})