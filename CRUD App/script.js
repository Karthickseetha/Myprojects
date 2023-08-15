'use strict';

const titleEl=document.getElementById
('title');
const quantityEl=document.getElementById
('quantity');

const btnSubmit=document.getElementById
('btn-submit');

const listContainer=document.getElementById
('list-container')


// global variables
let items=[];
let isEditing;
let itemToEdit;



// functions

function init(){
    addItemsToDOM(items);
    isEditing = false;
    btnSubmit.innerHTML='Add';
}
// AddlistElement to DOM
function addItemToDOM(item){
  const {id, title,quantity} = item;
  const listEl=document.createElement('li');
  listEl.classList.add('list-item');
  listEl.innerHTML=`
                <span class="list-text">${title}</span>
                <span class="list-text">${quantity}</span>
                <button class="btn-edit" onclick = "editItem(${id})" >
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btn-delete" onclick = "deleteItem(${id})">
                  <i class="fa-solid fa-trash"></i>
                </button>
              `; 
listContainer.appendChild(listEl);
}
// AddlistElements to DOM
function addItemsToDOM(items){
    listContainer.innerHTML=null;
    if(items.length > 0){
      items.forEach((item) =>{
        addItemToDOM(item)

            
        })
    }

}

function deleteItem(id){

  items = items.filter((item) => item.id !== id);
  addItemsToDOM(items);
  // console.log(id);
}

function editItem(id){
  isEditing = true;
  btnSubmit.innerHTML='Edit';
  itemToEdit=items.find((item) => item.id===id);
  titleEl.value = itemToEdit.title;
  quantityEl.value=itemToEdit.quantity;
}

// Event Listeners
btnSubmit.addEventListener('click', ()=>{
    const title=titleEl.value;
    const quantity=quantityEl.value;

    if(title && quantity){
      if(isEditing){
        // Edit item Logic
        items=items.map(item => {
          if(item.id=== itemToEdit.id){
            // Edit item Logic
            const editedItem= {id:item.id,title:title,quantity:quantity};
            return editedItem;

          }else{
            return item;
          }
          
        })
          
          isEditing =false;
          btnSubmit.innerHTML='Add';
          itemToEdit=null;


      }
      else{
        // Add Item
        // Create new Item
        // Add item
        // console.log(title);
        const newItem={
             id: Date.now(),
             title:title,
             quantity: quantity,
        }
        // Add new items to Arrsy
        items.push(newItem);
        // Add new It ems to DOM
        // console.log(items);
        // Clear input Field
        titleEl.value=null;
      }
      addItemsToDOM(items);
      titleEl.value=null;
      quantityEl.value=null;

    }
    else{
    //    Show Error
        alert('All inputs are required')
    }
})


init();




