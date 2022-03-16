export default function renderSingleItem(item) {

    const container = document.createElement('div'); 
    const title = document.createElement('h2'); 
    const date = document.createElement('span'); 
    const priority = document.createElement('div'); 
    const desc = document.createElement('div'); 
    const checklist = document.createElement('ul'); 
    const notes = document.createElement('div'); 
    const completeBtn = document.createElement('button'); 
    const deleteBtn = document.createElement('button'); 
    const closeBtn = document.createElement('button'); 
    const btnGroup = document.createElement('div'); 


    title.innerText = item.title; 
    date.innerText = item.date; 
    priority.innerText = item.priority; 
    desc.innerText = item.description; 
    notes.innerText = item.notes;
    const checkListSplit = item.checklist.split(',') || [];
    
    // checklist 
    checklist.append('Checklist:    ')
    checkListSplit.forEach(check => {
        const li = document.createElement('li'); 
        li.innerText = check;
        li.addEventListener('click', function() {
            console.log(this.innerText); 
        }); 
        checklist.append(li); 
    })


    // buttons
    completeBtn.innerText = 'Done'; 
    completeBtn.addEventListener('click', completeTask);
    deleteBtn.innerText = 'Del'; 
    deleteBtn.addEventListener('click', deleteTask);
    closeBtn.innerText = 'Close'; 
    closeBtn.addEventListener('click', closeTask);

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

    return container; 
}



function completeTask() {
    console.log('done button clicked');
}
function deleteTask() {
    console.log('delete button clicked');
}
function closeTask() {
    document.getElementById('single-item-display').remove(); 
}