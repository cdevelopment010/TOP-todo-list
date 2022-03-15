import AddNewItem from './AddNewItem'; 
import CompleteItem from './CompleteItem';
export default function renderPageItem(items) {

    const container = document.createElement('div'); 
    const newItem = document.createElement('button'); 
    newItem.innerText = '+'

    //if items are blank return nothing; 
    if (items.length == 0 ) {
        container.append(newItem); 
        return container
    }    
    
    // need to do something to only show tasks to do
    items.forEach(item=> {
        const itemContainer = document.createElement('div'); 
        const itemTitle = document.createElement('h3'); 
        const itemDate = document.createElement('span'); 
        const complete = document.createElement('button'); 
        const viewBtb = document.createElement('button'); 


        complete.innerText = 'complete';
        complete.classNam = 'complete-btn'; 
        viewBtb.innerText = 'View Task';
        viewBtb.classNam = 'view-btn'; 
        itemTitle.innerText = item.title;
        itemDate.innerText = item.date; 

        // button event listener
        complete.addEventListener('click', (event) => {
            event.stopPropagation();
            completeTask(itemTitle.innerText); 
        })

        viewBtb.addEventListener('click', function(event){
            event.stopPropagation();
            console.log('view btn clicked'); 
        }, true)

        itemContainer.append(itemDate);
        itemContainer.append(itemTitle);
        itemContainer.append(complete);
        itemContainer.append(viewBtb);


        itemContainer.className = 'item-container'
        
        if (item.complete) {
            itemContainer.classList.add('completed-task'); 
        }
        
        itemContainer.addEventListener('click',  editItem )
        container.append(itemContainer); 
    })

    newItem.className="new-item-btn"
    newItem.addEventListener('click', function() {
        const newItemPopUp = newItemBtn(); 
        document.body.append(newItemPopUp); 
    });
    
    container.append(newItem); 

    return container; 
}

function completeTask(item) {
    console.log(item); 
    CompleteItem(item); 
    location.reload();
}

function newItemBtn(){
    return AddNewItem(); 
}

function editItem() {
    let titleToEdit = this.querySelector('h3').innerText
    const newItemPopUp = AddNewItem(titleToEdit); 
    document.body.append(newItemPopUp); 
}