import manageNewItem from "./manageNewItem";
import RefreshPage from "./RefreshPage";

export default function addNewItem(editItem) {


    const overlay = document.createElement('div'); 
    overlay.className = 'overlay'; 
    overlay.id = 'overlay'; 

    const div = document.createElement('div'); 
    const title = document.createElement('h2');
    const form = document.createElement('form');
    const addBtn = document.createElement('div');
    const closeBtn = document.createElement('div');
    const buttonGroup = document.createElement('div'); 

    let itemsStored = JSON.parse(localStorage.getItem('TOP-todo-items')) || []; 
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
        return div; 
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
    closeBtn.addEventListener('click', closeForm);

    addBtn.className = 'completeBtn'
    closeBtn.className = 'closeBtn'
    buttonGroup.append(addBtn); 
    buttonGroup.append(closeBtn); 

    buttonGroup.className = 'btn-group'
    div.append(title); 
    div.append(form); 
    div.append(buttonGroup); 
    div.className = 'add-item'; 
    div.id = 'add-item-form'
    return {div, overlay}; 
}

function closeForm() {
    let removeItem = document.querySelector('#add-item-form');
    removeItem.remove(); 
    document.getElementById('overlay').remove(); 
}

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

function manageAdd() {
    manageNewItem(); 
    // close form afterwards
    closeForm();
    RefreshPage(); 
}; 

function manageEdit(item) {

    let itemsStored = JSON.parse(localStorage.getItem('TOP-todo-items')) || []; 
    itemsStored.map((task)=>{
        if (task.title === item) {
            task.title = document.getElementById('task-name').value;
            task.description = document.getElementById('task-desc').value;
            task.date = document.getElementById('task-date').value;
            task.priorty = document.getElementById('task-priorty').value;
            task.notes = document.getElementById('task-notes').value;
            task.checklist = document.getElementById('task-checklist').value;
            task.project = document.getElementById('task-project').value;
            task.complete = document.getElementById('task-complete').value == true;
        }
    })



    localStorage.setItem('TOP-todo-items', JSON.stringify(itemsStored)); 

    // close form afterwards
    closeForm();
    // reload moves back to home page
    RefreshPage(); 
}