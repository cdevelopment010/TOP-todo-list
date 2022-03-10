import renderPageItem from "./renderPageItem";
import ToDoItem from "./ToDoItem"; // for testing purposes


// for testing purposes

const itemsTemp = [
    ToDoItem('randomTitle1', 'blah desc', 'date', '1','', ['item1', 'item2']), 
    ToDoItem('randomTitle2', 'blah desc', 'date', '1','', ['item1', 'item2']), 
    ToDoItem('randomTitle3', 'blah desc', 'date', '1','', ['item1', 'item2']), 
    ToDoItem('randomTitle4', 'blah desc', 'date', '1','', ['item1', 'item2'])
]

export default function Home() {

    const home = document.createElement('div'); 
    const title = document.createElement('h2'); 
    const pageItems = new renderPageItem(itemsTemp); 
    
    title.innerText = 'Home'; 


    home.append(title); 
    home.append(pageItems);
    return home; 
}


