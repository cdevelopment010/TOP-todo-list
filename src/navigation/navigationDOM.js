import NewProject from "./NewProject";

export default function NavigationDOM() {
    const nav = document.createElement('nav');
    const ulStatic = document.createElement('ul') 
    const home = document.createElement('li'); 
    const today = document.createElement('li');
    const week = document.createElement('li');
    const completeTasks = document.createElement('li');
    const lateTasks = document.createElement('li');
    const ulProjects = document.createElement('ul'); 
    const addBtn = document.createElement('button'); 
    const projectTitle = document.createElement('h2'); 
    const deleteStorageBtn = document.createElement('button'); 


    projectTitle.innerText = 'Projects'

    // static ul 
    home.innerText = 'Home';
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

    //check local storage for projects
    if (localStorage.getItem('TOP-project-nav')) {
        const alreadyStored = JSON.parse(localStorage.getItem('TOP-project-nav'));

        alreadyStored.forEach(item => {
            const li = document.createElement('li'); 
            li.innerText = item; 
            ulProjects.append(li); 
        })
    }

    addBtn.innerText = 'add project';
    addBtn.addEventListener('click', () => {
        addItem()
    })

    deleteStorageBtn.innerText = 'warning: delete all stroage?'; 
    deleteStorageBtn.addEventListener('click', function() {
        localStorage.removeItem('TOP-project-nav'); 
        localStorage.removeItem('TOP-todo-project');
        localStorage.removeItem('TOP-project-colors');
        // refresh page - is this a good idea? 
        location.reload(); 
    })
    deleteStorageBtn.className='warning-btn'

    nav.append(ulStatic)
    nav.append(ulProjects); 
    nav.append(addBtn);
    nav.append(deleteStorageBtn); 
    
    return nav; 
}

function addItem() {
    document.querySelector('#root').append(NewProject()); 
}
