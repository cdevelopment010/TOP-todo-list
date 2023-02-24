import manageNewItem from "./manageNewItem";
import RefreshPage from "./RefreshPage";
import overlay from "./overlay";
import closePopup from "./closePopup";
import firebaseFile from './firebase';


//add new task 
//Creates a popup
//Handles adding and closing form
export default async function addNewItem(editItem) {
    const div = document.createElement('div'); 
    const title = document.createElement('h2');
    const form = document.createElement('form');
    const addBtn = document.createElement('div');
    const closeBtn = document.createElement('div');
    const buttonGroup = document.createElement('div'); 

    // let itemsStored = JSON.parse(localStorage.getItem('TOP-todo-items')) || []; 
    let itemsStored = await firebaseFile.readData() || []; 
    let itemToUse = itemsStored.filter((task) => task.title === editItem)[0] || '';

    const obj = {
        taskName: {
            id: 'task-name', 
            label: 'Task Name:',
            type: 'text', 
            el: 'input', 
            values: itemToUse.title || ''
        },
        taskDesc: {
            id: 'task-desc', 
            label: 'Task Description:',
            type: 'text', 
            el: 'input', 
            values: itemToUse.description || ''
        },
        taskDate: {
            id: 'task-date', 
            label: 'Task Date:',
            type: 'date', 
            el: 'input', 
            values: itemToUse.date || ''
        },
        taskPriorty: {
            id: 'task-priorty', 
            label: 'Task Priority:',
            type: 'select',
            el: 'select',
            option: ['low', 'medium', 'high', 'DO IT NOW!'], 
            values: itemToUse.priority || ''
        },
        taskNotes: {
            id: 'task-notes', 
            label: 'Task Notes:',
            type: 'text', 
            el: 'input', 
            values: itemToUse.notes || ''
        },
        taskChecklist: {
            id: 'task-checklist', 
            label: 'Task checklist (comma separated):',
            type: 'text', 
            el: 'input', 
            values: itemToUse.checklist || ''
        },
        taskProject: {
            id: 'task-project', 
            label: 'Task Project:',
            type: 'select', //probably should be select
            el: 'select', 
            option: JSON.parse(localStorage.getItem('TOP-project-nav')) || '', 
            values: itemToUse.project || ''
        },
    }
    
    title.innerText = 'Add new item'; 

    
    if (obj.taskProject.option == '' ){
        alert('Add a project before adding a task.'); 
        return {div, overlay: overlay()}; 
    }

    
    if (editItem != null) {
        for (let task in obj) {
            let input = createInput(obj[task].id, obj[task].el,obj[task].label, obj[task].type, obj[task].option, obj[task].values); 
            form.append(input)
        }
        let input = createInput('task-complete', 'select', 'Completed?', 'select', [false, true], false)
        form.append(input)
    } else {
        for (let task in obj) {
            let input = createInput(obj[task].id, obj[task].el,obj[task].label, obj[task].type, obj[task].option); 
            form.append(input)
        }
    }


    
    
    addBtn.innerHTML = '<i class="fa-solid fa-check"></i>'; 
    addBtn.addEventListener('click', () => {

        if (editItem != null) {
            manageEdit(editItem); 
        } else {
            manageAdd(); 
        }
    });
    closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'; 
    closeBtn.addEventListener('click', ()=>{closePopup('#add-item-form')});

    addBtn.className = 'completeBtn';
    if (editItem != null) {
        addBtn.title = 'Edit Task';
    } else {
        addBtn.title = 'Add Task';
    }
    closeBtn.className = 'closeBtn';
    closeBtn.title = 'Close';
    buttonGroup.append(addBtn); 
    buttonGroup.append(closeBtn); 

    buttonGroup.className = 'btn-group'
    div.append(title); 
    div.append(form); 
    div.append(buttonGroup); 
    div.className = 'add-item'; 
    div.id = 'add-item-form'
    return {div, overlay: overlay()}; 
}


//Used to create form inputs on popup
function createInput(id,el, labelText, type, options='', values='' ) {
    const label = document.createElement('label');
    const input = document.createElement(el); 

    label.for = id; 
    label.append(labelText); 
    if (el == 'input') {
        input.type = type;
    }

    // handle dates - default value
    if (type=='date') {
        input.defaultValue = new Date();
        input.value = new Date().toISOString().substring(0, 10);
    };

    if (options.length > 0) {
        options.forEach(option => {
            const opt = document.createElement('option'); 
            opt.innerText = option; 
            opt.value = option; 
            input.append(opt); 
        })
    }
    input.id = id; 

    if (values!='') {
        input.value = values; 
    }

    label.append(input); 

    return label;
}


//Manages adding task to local storage
async function manageAdd() {
    await manageNewItem(); 
    closePopup('#add-item-form');
    await RefreshPage(); 
}; 


//Edits an  item and updates local storage
async function manageEdit(item) {

    let itemsStored = await firebaseFile.readData() || []; 
    let editItem = itemsStored.filter(i => i.title == item); 

    let updatedItem = {
        title: document.getElementById('task-name').value,
        description: document.getElementById('task-desc').value,
        date: document.getElementById('task-date').value,
        priority: document.getElementById('task-priorty').value,
        notes: document.getElementById('task-notes').value,
        checklist: document.getElementById('task-checklist').value,
        project: document.getElementById('task-project').value,
        complete: document.getElementById('task-complete').value == true
    }
    // localStorage.setItem('TOP-todo-items', JSON.stringify(itemsStored)); 

    await firebaseFile.editDoc(editItem[0].id, updatedItem)
    // close form afterwards
    closePopup('#add-item-form');
    // reload moves back to home page
    RefreshPage(); 
}