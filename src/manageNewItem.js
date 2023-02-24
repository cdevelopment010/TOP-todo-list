import ToDoItem from "./ToDoItem";
import firebaseFile from "./firebase";

// const firebaseFile = require('./filterItems'); 

export default async function manageNewItem() {

    const taskTitle = document.getElementById('task-name').value;
    const taskDesc = document.getElementById('task-desc').value;
    const taskDate = document.getElementById('task-date').value;
    const taskPriorty = document.getElementById('task-priorty').value;
    const taskNotes = document.getElementById('task-notes').value;
    const taskChecklist = document.getElementById('task-checklist').value;
    const taskProject = document.getElementById('task-project').value;



    //firebase
    let querySnapshot = await firebaseFile.readData();

    const task = ToDoItem(taskTitle, taskDesc, taskDate, taskPriorty, taskNotes, taskChecklist, taskProject); 


    //add to firestore
    await firebaseFile.addDataToFirestore(task);
    
}