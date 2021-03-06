import AddNewItem from './AddNewItem'; 
import CompleteItem from './CompleteItem';
import renderSingleItem from './renderSingleItem';
import RefreshPage from './RefreshPage';

export default function renderPageItem(items) {

    const container = document.createElement('div'); 
    const colors = JSON.parse(localStorage.getItem('TOP-project-colors')) || [];  
    const newItem = document.createElement('div'); 
    newItem.innerHTML = '<i class="fa-solid fa-circle-plus" aria-hidden="true"></i>'
    newItem.className="new-item-btn"; 
    newItem.addEventListener('click', function() {
        const {div, overlay} = AddNewItem();
        document.body.append(div);  
        RefreshPage(); 
    });

    //if items are blank return nothing; 
    if (items.length == 0 ) {
        container.append(newItem); 
        return container;
    }    

    //sort items in date order
    items.sort((a, b) => a.date > b.date ? 1 : -1); 
    
    // need to do something to only show tasks to do
    items.forEach(item=> {
        const itemContainer = document.createElement('div'); 
        const itemTitle = document.createElement('h3'); 
        const itemDate = document.createElement('span'); 
        const complete = document.createElement('div'); 
        const viewBtn = document.createElement('div'); 
        const editBtn = document.createElement('div'); 
        const colorBar = document.createElement('div'); 


        complete.innerHTML = '<i class="fa-solid fa-check"></i>';
        complete.className = 'complete-btn'; 
        viewBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
        viewBtn.className = 'view-btn'; 
        editBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>'; 
        editBtn.className = 'edit-btn'; 
        itemTitle.innerText = item.title;
        itemDate.innerText = item.date; 

        // Add tooltips to btns
        complete.title = 'Complete'; 
        viewBtn.title = 'View'; 
        editBtn.title = 'Edit'; 
        

        // button event listener
        complete.addEventListener('click', (event) => {
            event.stopPropagation();
            completeTask(itemTitle.innerText); 
            RefreshPage(); 
        })

        viewBtn.addEventListener('click', function(event){
            event.stopPropagation();
            seeItem(itemTitle); 
        }, true); 
        editBtn.addEventListener('click', function(event){
            event.stopPropagation();
            editItem(itemTitle); 
        }, true)

        itemContainer.append(itemDate);
        itemContainer.append(itemTitle);
        itemContainer.append(complete);
        itemContainer.append(viewBtn);
        itemContainer.append(editBtn);


        itemContainer.className = 'item-container'
        
        if (item.complete) {
            itemContainer.classList.add('completed-task'); 
        }
        
        // itemContainer.addEventListener('click',  editItem )
        colorBar.classList.add('color-bar'); 

       
        if (colors.find((x) => Object.keys(x) == item.project) == undefined) {
            colors.push({[item.project]: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`});
        }
        
        // set local storage for colors
        localStorage.setItem('TOP-project-colors',JSON.stringify(colors)); 

        //store colour into a variable to use
        let col = '';
        colors.forEach(colItem => {
            for (let x of Object.keys(colItem)) {
                if (item.project == x) {
                    col = colItem[item.project]; 
                }
            }
        })
        colorBar.style.backgroundColor = col; 


        itemContainer.append(colorBar); 
        container.append(itemContainer); 
    })

    
    
    
    container.append(newItem); 

    return container; 
}

function completeTask(item) {
    CompleteItem(item); 
    RefreshPage(); 
}

// function newItemBtn(){
//     return AddNewItem(); 
// }

function editItem(text) {
    let titleToEdit = text.innerText
    const {div, overlay} = AddNewItem(titleToEdit); 
    // document.body.append(newItemPopUp); 
    document.body.append(overlay); 
    document.body.append(div); 
    RefreshPage(); 

}

function seeItem(item) {
    let alreadyStored = JSON.parse(localStorage.getItem('TOP-todo-items'));
    let itemToView = alreadyStored.filter((task) => task.title == item.innerText)[0]; 
    const {container, overlay} = renderSingleItem(itemToView); 
    document.body.append(overlay); 
    document.body.append(container); 
}