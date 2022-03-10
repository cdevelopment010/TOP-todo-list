export default function ToDoItem(title, description, date, priority, notes, checklist) {

    return {
        title,
        description, 
        date, 
        priority, 
        notes, 
        checklist, 
        complete: false
    }
}