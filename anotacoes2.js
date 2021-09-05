const addButton = document.querySelector('#addButton');
const inputAdd = document.querySelector('#input');
const container = document.querySelector('#container');

function Item (itemName) {
    this.createItem(itemName);
}     
    function createItem (itemName){
        const input = document.createElement('input');
            const itemBox = document.createElement('div');
            const editButton = document.createElement('button');
            const createRemoveButton = createRemoveButton();
            const removeButton = document.createElement('button');
        function explorer () {            
            input.value = itemName;
            input.disabled = true;
            input.classList.add('itemInput');
            input.type = "text";
            itemBox.appendChild(input);
        };

        function itemBox () {
           
            itemBox.classList.add('item');
            container.appendChild(itemBox);
        }; 

        function firstButton () {
            const editButton
            editButton.textContent = "EDIT"
            editButton.classList.add('baseButton', 'editButton');
            itemBox.appendChild(editButton);
            editButton.addEventListener('click', () => this.remove(itemBox));
        };

        function secondButton () {
            const createRemoveButton = createRemoveButton();
            const removeButton = document.createElement('button');
            const itemBox = document.createElement('div');
            removeButton.textContent = "REMOVE"
            removeButton.classList.add('baseButton', 'removeButton');
            itemBox.appendChild(removeButton);
            removeButton.addEventListener('click', () => this.edit(input));
        };  
    
        function edit (input) {
        input.disabled = !input.disabled;
        }
    
        function remove (item) {
        container.removeChild(item);
        } 
}
       
function create (value) {
    new item(value);
        inputAdd.value = "";
}
    
function check (value) {
    if(value !== ""){
    return true;           
{
 return false
}
}      
    
addButton.addEventListener('click', check);
inputAdd.addEventListener('keydown', (e) => {    
    if(e.which == 13) {
        const {value} = inputAdd
        if(check(value)){
            create(value)
        }
    }
})}