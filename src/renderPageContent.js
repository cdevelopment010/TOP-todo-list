import renderPageItem from "./renderPageItem";
import ToDoItem from "./ToDoItem"; // for testing purposes


// for testing purposes

const itemsTemp = [
    ToDoItem('randomTitle1', 'blah desc', 'date', '1','', ['item1', 'item2']), 
    ToDoItem('randomTitle2', 'blah desc', 'date', '1','', ['item1', 'item2']), 
    ToDoItem('randomTitle3', 'blah desc', 'date', '1','', ['item1', 'item2']), 
    ToDoItem('randomTitle4', 'blah desc', 'date', '1','', ['item1', 'item2'])
]

export default function renderPageContent(name, items) {

    const page = document.createElement('div'); 
    const title = document.createElement('h2'); 
    const pageItems = new renderPageItem(items); 
    
    title.innerText = name; 
    page.id = "content-page"; 
    page.className = 'content';


    page.append(title); 
    page.append(pageItems);
    return page; 
}


