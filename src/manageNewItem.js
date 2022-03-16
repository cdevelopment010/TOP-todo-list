import ToDoItem from "./ToDoItem";
export default function manageNewItem() {


    let itemsStored = JSON.parse(localStorage.getItem('TOP-todo-items')) || []; 
    const taskTitle = document.getElementById('task-name').value;
    const taskDesc = document.getElementById('task-desc').value;
    const taskDate = document.getElementById('task-date').value;
    const taskPriorty = document.getElementById('task-priorty').value;
    const taskNotes = document.getElementById('task-notes').value;
    const taskChecklist = document.getElementById('task-checklist').value;
    const taskProject = document.getElementById('task-project').value;


    const task = ToDoItem(taskTitle, taskDesc, taskDate, taskPriorty, taskNotes, taskChecklist, taskProject); 


    //get local storage of items
    itemsStored.push(task); 
    localStorage.setItem('TOP-todo-items', JSON.stringify(itemsStored)); 
    
}