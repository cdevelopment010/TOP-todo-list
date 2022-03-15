import manageNewItem from "./manageNewItem";


export default function addNewItemDOM() {

    const div = document.createElement('div'); 
    const title = document.createElement('h2');
    const form = document.createElement('form');
    const addBtn = document.createElement('button');
    const closeBtn = document.createElement('button');
    const obj = {
        taskName: {
            id: 'task-name', 
            label: 'Task Name:',
            type: 'text', 
            el: 'input'
        },
        taskDesc: {
            id: 'task-desc', 
            label: 'Task Description:',
            type: 'text', 
            el: 'input'
        },
        taskDate: {
            id: 'task-date', 
            label: 'Task Date:',
            type: 'date', 
            el: 'input'
        },
        taskPriorty: {
            id: 'task-priorty', 
            label: 'Task Priority:',
            type: 'select',
            el: 'select',
            option: ['low', 'medium', 'high', 'DO IT NOW!']
        },
        taskNotes: {
            id: 'task-notes', 
            label: 'Task Notes:',
            type: 'text', 
            el: 'input'
        },
        taskChecklist: {
            id: 'task-checklist', 
            label: 'Task checklist (comma separated):',
            type: 'text', 
            el: 'input'
        },
        taskProject: {
            id: 'task-project', 
            label: 'Task Project:',
            type: 'select', //probably should be select
            el: 'select', 
            option: JSON.parse(localStorage.getItem('TOP-project-nav'))
        },
    }
    
    title.innerText = 'Add new item'; 




    for (let task in obj) {
        let input = createInput(obj[task].id, obj[task].el,obj[task].label, obj[task].type, obj[task].option); 
        form.append(input)
    }
    
    addBtn.innerText = 'Add'; 
    addBtn.addEventListener('click', () => {
        manageAdd(); 
    });
    closeBtn.innerText = 'Close'; 
    closeBtn.addEventListener('click', closeForm);

    div.append(title); 
    div.append(form); 
    div.append(addBtn); 
    div.append(closeBtn); 
    div.className = 'add-item'; 
    div.id = 'add-item-form'
    return div; 
}

function closeForm() {
    let removeItem = document.querySelector('#add-item-form');
    removeItem.remove(); 
}

function createInput(id,el, labelText, type, options=[] ) {
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
    label.append(input); 

    return label;
}

function manageAdd() {
    manageNewItem(); 
    // close form afterwards
    let removeItem = document.querySelector('#add-item-form');
    removeItem.remove(); 
}; 