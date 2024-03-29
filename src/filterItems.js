
import firebaseFile from './firebase';

export default  async function filterItems(project) {


    //Add firebase snapshot here. 
    let itemsStored = await firebaseFile.readData() || [];

    //below is using local storage
    // let itemsStored = JSON.parse(localStorage.getItem('TOP-todo-items')) || []; 
    // console.log("itemsStored", itemsStored)
    // I think this fails SOLID - rather than doing if statements it should be able to handle anything?
    
    if (project == 'home') {
        return itemsStored.filter((item) => {
            return item.complete ==  false || item.complete == undefined;
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