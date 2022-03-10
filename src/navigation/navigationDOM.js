export default function NavigationDOM() {
    const nav = document.createElement('nav');
    const ulStatic = document.createElement('ul') 
    const home = document.createElement('li'); 
    const today = document.createElement('li');
    const week = document.createElement('li');
    const ulProjects = document.createElement('ul'); 
    const addBtn = document.createElement('button'); 
    const projectTitle = document.createElement('h2'); 


    projectTitle.innerText = 'Projects'

    // static ul 
    home.innerText = 'Home';
    home.className = 'active'; //make this dynamic
    home.addEventListener('click', (e) => {
        navItem('home')
    })
    today.innerText = 'Today';
    today.addEventListener('click', (e) => {
        navItem('today')
    })
    week.innerText = 'Week';
    week.addEventListener('click', (e) => {
        navItem('week')
    })


    ulStatic.append(home);
    ulStatic.append(today);
    ulStatic.append(week);


    // dynamic projects
    //will need to look for local storage here later

    ulProjects.append(projectTitle); 

    addBtn.innerText = 'add project';
    addBtn.addEventListener('click', () => {
        let item = document.createElement('li'); 
        item.innerText = addItem(); 
        ulProjects.append(item); 
    })

    nav.append(ulStatic)
    nav.append(ulProjects); 
    nav.append(addBtn);
    return nav; 
}

function navItem(item) {
    console.log(`${item} has been clicked`); 
}

function addItem() {

    return 'Project X';
}