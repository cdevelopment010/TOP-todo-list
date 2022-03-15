import NavigationDOM from "./navigation/navigationDOM";
import navigatateSections from "./navigation/navigateSections";
export default function GenericPage(project, name, items) {


    const root = document.querySelector('#root');
    const page = document.createElement('div'); 
    const header = document.createElement('header'); 
    const title = document.createElement('h1'); 
    const sidebar = new NavigationDOM(); 
    const content = new project(name); 

    title.innerText = 'To Do List | The Odin Project'

    header.append(title); 
    page.className = 'container'; 


    sidebar.className = 'navigation'; 

    page.append(header);
    page.append(sidebar); 
    page.append(content); 

    root.textContent = ''; 
    root.append(page); 
    navigatateSections(); 
}