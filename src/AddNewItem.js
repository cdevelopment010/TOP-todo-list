

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
            type: 'text'
        },
        taskDesc: {
            id: 'task-desc', 
            label: 'Task Description:',
            type: 'text'
        },
        taskDate: {
            id: 'task-date', 
            label: 'Task Date:',
            type: 'date'
        },
        taskPriorty: {
            id: 'task-priorty', 
            label: 'Task Priority:',
            type: 'select', 
            option: ['low', 'medium', 'high', 'DO IT NOW!']
        },
        taskNotes: {
            id: 'task-notes', 
            label: 'Task Notes:',
            type: 'text'
        },
        taskChecklist: {
            id: 'task-checklist', 
            label: 'Task checklist (comma separated):',
            type: 'text'
        },
        taskProject: {
            id: 'task-project', 
            label: 'Task Project:',
            type: 'text' //probably should be select
        },
    }
    
    title.innerText = 'Add new item'; 




    for (let task in obj) {
        let input = createInput(obj[task].id, obj[task].label, obj[task].type); 
        form.append(input)
    }
    
    addBtn.innerText = 'Add'; 
    addBtn.addEventListener('click', () => {
        console.log('add btn clicked')
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

function createInput(id,labelText, type ) {
    const label = document.createElement('label');
    const input = document.createElement('input'); 


    label.for = id; 
    label.append(labelText); 
    input.type = type;
    input.id = id; 
    label.append(input); 

    return label;
}