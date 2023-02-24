import firebaseFile from './firebase';


export default async function CompleteItem(item) {
    console.log(item);
    // let data = 
    await firebaseFile.completeDoc(item);

    
    // let currentItem = JSON.parse(localStorage.getItem('TOP-todo-items')); 
    
    // currentItem.map((task) => {
    //     if (task.title === item) {
    //         task.complete = true; 
    //     }
    // }); 

    //set back to localStorage
    // localStorage.setItem('TOP-todo-items', JSON.stringify(currentItem)); 
    
    


}