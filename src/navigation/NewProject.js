import navigatateSections from "./navigateSections";
export default function NewProject() {
    const popup = document.createElement('div'); 
    const title = document.createElement('h2'); 
    const labelStr = document.createElement('label');
    const inputStr = document.createElement('input'); 
    const addBtn = document.createElement('button');
    const closeBtn = document.createElement('button')

    inputStr.type = 'text'; 
    labelStr.append('Project name:'); 
    labelStr.append(inputStr); 


    addBtn.innerText = 'add project';
    closeBtn.innerText = 'close';

    addBtn.addEventListener('click', addItem); 
    closeBtn.addEventListener('click', closePopup); 

    title.innerText = 'Add new project'

    popup.append(title);
    popup.append(labelStr); 
    popup.append(addBtn); 
    popup.append(closeBtn); 
    popup.id = 'project-popup'
    

    return popup; 

}


function addItem() {
    console.log('add item to projects'); 
    let item = document.createElement('li'); 
    item.innerText = document.querySelector('#project-popup input').value; 

    // check it doesn't already have a project like that

    const lis =  document.querySelectorAll('#project-nav li');
    let update = true;
    lis.forEach((li) => {
        if (li.innerText.toLowerCase() == item.innerText.toLowerCase()) {
            update = false;
        }
    })

    if (update) {
        document.querySelector('#project-nav').append(item); 
        document.querySelector('#project-popup').remove(); 
        updateLocalStorage(); 
        navigatateSections(); 
    }

    else {
        alert('project name already exists'); 
    }
    
}

function closePopup() {
    document.querySelector('#project-popup').remove(); 
}

function updateLocalStorage() { 
    const lis =  document.querySelectorAll('#project-nav li');
    let liToStorage = []
    lis.forEach((li) => {
       liToStorage.push(li.innerText);
    })
    //clear the storage to stop duping
    localStorage.removeItem('TOP-project-nav'); 
    localStorage.setItem('TOP-project-nav',JSON.stringify(liToStorage))
}