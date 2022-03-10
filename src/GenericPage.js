import NavigationDOM from "./navigation/navigationDOM";
export default function GenericPage(project) {

    const page = document.createElement('div'); 
    const header = document.createElement('header'); 
    const title = document.createElement('h1'); 
    const sidebar = new NavigationDOM(); 
    const content = new project; 

    title.innerText = 'To Do List | The Odin Project'

    header.append(title); 
    page.className = 'container'; 


    sidebar.className = 'navigation'; 
    content.className = 'content';

    page.append(header);
    page.append(sidebar); 
    page.append(content); 


    return page; 
}