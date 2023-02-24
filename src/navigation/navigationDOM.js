import NewProject from "./NewProject";
import firebaseFile from '../firebase';

export default async function NavigationDOM() {
    const nav = document.createElement('nav');
    const ulStatic = document.createElement('ul') 
    const home = document.createElement('li'); 
    const today = document.createElement('li');
    const week = document.createElement('li');
    const completeTasks = document.createElement('li');
    const lateTasks = document.createElement('li');
    const ulProjects = document.createElement('ul'); 
    const addBtn = document.createElement('div'); 
    const projectTitle = document.createElement('h2'); 
    
    addBtn.innerHTML = '<i class="fa-solid fa-circle-plus" aria-hidden="true"></i>'
    addBtn.className="new-item-btn"

    projectTitle.innerText = 'Projects'

    // static ul 
    home.innerText = 'Home';
    home.classList.add('active'); 
    today.innerText = 'Today';
    week.innerText = 'Week';
    completeTasks.innerText = 'Completed';
    lateTasks.innerText = 'Late';
    

    ulStatic.append(home);
    ulStatic.append(today);
    ulStatic.append(week);
    ulStatic.append(completeTasks);
    ulStatic.append(lateTasks);


    // dynamic projects
    //will need to look for local storage here later

    ulProjects.append(projectTitle); 
    ulProjects.id = 'project-nav'
    

    async function getProjects() {
        let storedData = await firebaseFile.readData() || [];
        let projects = storedData.map( d => {
            return d.project;
        })
        const projectsUnique = [...new Set(projects)];
        return projectsUnique
    }

    const projects = await getProjects();

    //check local storage for projects
    if (localStorage.getItem('TOP-project-nav')) {
        // const alreadyStored = JSON.parse(localStorage.getItem('TOP-project-nav'));


        projects.forEach(item => {
            const li = document.createElement('li'); 
            li.innerText = item; 
            ulProjects.append(li); 
        })
    }

    addBtn.addEventListener('click', () => {
        addItem()
    })



    nav.append(ulStatic)
    nav.append(ulProjects); 
    nav.append(addBtn);
    
    return nav; 
}

function addItem() {
    const {popup, overlay} = NewProject();
    document.body.append(overlay); 
    document.body.append(popup); 
}

