import './sass/main.scss'; 
import ToDoItem from './ToDoItem';'./ToDoItem.js'; 
import renderSingleItem from './renderSingleItem'; 
import GenericPage from './GenericPage.js'; 

const randomItem = ToDoItem('randomTitle', 'blah desc', 'date', '1','', ['item1', 'item2'])

// document.body.append(renderSingleItem(randomItem)); 
document.body.append(GenericPage());