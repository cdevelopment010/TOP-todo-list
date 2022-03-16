export default function RemoveItem(item) {

    let currentItem = JSON.parse(localStorage.getItem('TOP-todo-items')); 
    
    let newItems = currentItem.filter((task) => {
        return task.title != item; 
    }); 
    
    //set back to localStorage
    localStorage.setItem('TOP-todo-items', JSON.stringify(newItems)); 
    
    


}