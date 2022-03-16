export default function filterItems(project) {

    let itemsStored = JSON.parse(localStorage.getItem('TOP-todo-items')) || []; 
    

    if (project == 'home') {
        return itemsStored.filter((item) => {
            return item.complete ==  false;
        }); 
    }

    if (project == 'today') {
        return itemsStored.filter((item) => {
            return item.date == new Date().toISOString().substring(0, 10) && item.complete ==  false;
        })
    }

    if (project == 'week') {
        const now = new Date();         
        let lastWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7).toISOString().substring(0, 10);
        return itemsStored.filter((item) => {
            return item.date >=  lastWeek && item.complete ==  false;
        })
    }

    if (project == 'completed') {
        return itemsStored.filter((item) => {
            return item.complete ==  true;
        })
    }
    if (project == 'late') {
        return itemsStored.filter((item) => {
            return item.date < new Date().toISOString().substring(0, 10) && item.complete ==  false;
        })
    }

    return itemsStored.filter((item) => {
        return item.project.toLowerCase() == project.toLowerCase() && item.complete ==  false;
    })

}