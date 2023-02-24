import NavigationDOM from "./navigation/navigationDOM";
import navigatateSections from "./navigation/navigateSections";
import filterItems from "./filterItems";
export default async function GenericPage(project, name, items) {


    const root = document.querySelector('#root');
    const page = document.createElement('div'); 
    const header = document.createElement('header'); 
    const title = document.createElement('h1'); 
    const sidebar = await NavigationDOM(); 
    const itemsAwait = await filterItems(name)
    const content = new project(name, itemsAwait); 
    const burgerBar = document.createElement('div'); 

    burgerBar.innerHTML = '<i class="fa-solid fa-bars"></i>';
    burgerBar.id = 'burger'; 
    burgerBar.addEventListener('click', displayNav); 

    title.innerText = 'To Do List | The Odin Project'

    header.append(title); 
    header.append(burgerBar)
    page.className = 'container'; 


    sidebar.className = 'navigation'; 

    page.append(header);
    page.append(sidebar); 
    page.append(content); 

    root.textContent = ''; 
    root.append(page); 
    navigatateSections(); 
}


function displayNav() {
    let nav = document.querySelector('nav');
    nav.classList.toggle('sm-screen');  
}