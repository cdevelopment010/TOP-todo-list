export default function ToDoItem(title, description, date, priority, notes, checklist, project) {

    return {
        title,
        description, 
        date, 
        priority, 
        notes, 
        checklist, 
        project,
        complete: false
    }
}