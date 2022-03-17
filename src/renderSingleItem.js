import CompleteItem from "./CompleteItem";
import RefreshPage from "./RefreshPage";
import RemoveItem from "./RemoveItem";
import closePopup from "./closePopup";
import overlay from "./overlay";

export default function renderSingleItem(item) {
    const container = document.createElement('div'); 
    const title = document.createElement('h2'); 
    const date = document.createElement('span'); 
    const priority = document.createElement('div'); 
    const desc = document.createElement('div'); 
    const checklist = document.createElement('ul'); 
    const notes = document.createElement('div'); 
    const completeBtn = document.createElement('div'); 
    const deleteBtn = document.createElement('div'); 
    const closeBtn = document.createElement('div'); 
    const btnGroup = document.createElement('div'); 


    title.innerText = item.title; 
    date.innerText = item.date; 
    priority.innerText = `Priority: ${item.priority}`; 
    desc.innerText = item.description; 
    notes.innerText = item.notes;
    const checkListSplit = item.checklist.split(',') || [];
    // checklist 
    if (checkListSplit[0] != '' ){
        checklist.append('Checklist:')
        checkListSplit.forEach(check => {
            const li = document.createElement('li'); 
            li.innerText = check;
            checkStrikeThrough(li); 
            li.addEventListener('click', function() {
                handleStrikeThrough(li); 
            }); 
            checklist.append(li); 
        })
    }


    // buttons
    completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>'; 
    completeBtn.addEventListener('click', completeTask);
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'; 
    deleteBtn.addEventListener('click', deleteTask);
    closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'; 
    closeBtn.addEventListener('click', () => {closePopup('#single-item-display');});


    // Add tooltips to btns
    completeBtn.title = 'Complete'; 
    deleteBtn.title = 'Delete'; 
    closeBtn.title = 'Close'; 

    btnGroup.append(completeBtn); 
    btnGroup.append(deleteBtn); 
    btnGroup.append(closeBtn); 
    btnGroup.className = 'btn-group'; 


    title.className = 'title'; 
    date.className = 'date'; 
    priority.className = 'priority'; 
    desc.className = 'desc'; 
    checklist.className = 'checklist'; 
    completeBtn.className = 'completeBtn'; 
    deleteBtn.className = 'deleteBtn'; 
    closeBtn.className = 'closeBtn'; 


    container.append(title);
    container.append(date);
    container.append(priority);
    container.append(desc);
    container.append(checklist);
    container.append(notes);
    container.append(btnGroup);


    container.id = 'single-item-display'

    container.classList.add('single-item-display'); 
    
    
    return {container, overlay: overlay()}; 
}



function completeTask() {
    const item = document.querySelector('#single-item-display h2').innerText; 
    CompleteItem(item);
    closePopup('#single-item-display');
    RefreshPage(); 
}
function deleteTask() {
    const item = document.querySelector('#single-item-display h2').innerText; 
    RemoveItem(item);
    closePopup('#single-item-display');
    RefreshPage(); 
}
function checkStrikeThrough(item) {
    const itemsStriked = JSON.parse(localStorage.getItem('TOP-striked-items')) || []; 
    if (itemsStriked.indexOf(item.innerText) != -1 ) {
        item.classList.add('strikethrough'); 
    }
}

function handleStrikeThrough(item) {
    const itemsStriked = JSON.parse(localStorage.getItem('TOP-striked-items')) || []; 
    let newItems =[]; 
    if (itemsStriked.indexOf(item.innerText) != -1  ) {
        newItems = itemsStriked.filter(x => {
            return x != item.innerText
        })
        item.classList.toggle('strikethrough'); 
    } else {
        newItems = itemsStriked.map(z => z); 
        newItems.push(item.innerText); 
        item.classList.toggle('strikethrough'); 
    }
    localStorage.setItem('TOP-striked-items', JSON.stringify(newItems)); 

}