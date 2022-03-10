export default function NavigationDOM() {
    const nav = document.createElement('nav');
    const ulStatic = document.createElement('ul') 
    const home = document.createElement('li'); 
    const today = document.createElement('li');
    const week = document.createElement('li');
    const completeTasks = document.createElement('li');
    const ulProjects = document.createElement('ul'); 
    const addBtn = document.createElement('button'); 
    const projectTitle = document.createElement('h2'); 


    projectTitle.innerText = 'Projects'

    // static ul 
    home.innerText = 'Home';
    home.className = 'active'; //make this dynamic
    home.addEventListener('click', function() {
        clearActive(this); 
        navItem('home')
    })
    today.innerText = 'Today';
    today.addEventListener('click', function() {
        clearActive(this); 
        navItem('today')
    })
    week.innerText = 'Week';
    week.addEventListener('click', function() {
        clearActive(this); 
        navItem('week')
    })
    completeTasks.innerText = 'Completed';
    completeTasks.addEventListener('click', function() {
        clearActive(this); 
        navItem('completeTasks')
    })


    ulStatic.append(home);
    ulStatic.append(today);
    ulStatic.append(week);
    ulStatic.append(completeTasks);


    // dynamic projects
    //will need to look for local storage here later

    ulProjects.append(projectTitle); 

    addBtn.innerText = 'add project';
    addBtn.addEventListener('click', () => {
        let item = document.createElement('li'); 
        item.innerText = addItem(); 
        item.addEventListener('click', function() {
            clearActive(this); 
            navItem(item.innerText); 
        })
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

function clearActive(item) {
    let lis = document.querySelectorAll('nav li'); 
    lis.forEach(li => {
        li.classList.remove('active')
    }); 
    item.classList.add('active');
}