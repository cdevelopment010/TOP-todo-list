export default function GenericPage(project) {

    const page = document.createElement('div'); 
    const header = document.createElement('header'); 
    const title = document.createElement('h1'); 
    const sidebar = document.createElement('div'); 
    const content = document.createElement('div'); 


    


    title.innerText = 'To Do List | The Odin Project'

    header.append(title); 
    page.className = 'container'; 


    page.append(header);

    return page; 
}