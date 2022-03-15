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


        complete.innerText = 'complete';
        complete.classNam = 'complete-btn'; 
        itemTitle.innerText = item.title;
        itemDate.innerText = item.date; 

        // button event listener
        complete.addEventListener('click', () => {
            completeTask(itemTitle.innerText); 
        })


        itemContainer.append(itemDate);
        itemContainer.append(itemTitle);
        itemContainer.append(complete);


        itemContainer.className = 'item-container'
        
        if (item.complete) {
            itemContainer.classList.add('completed-task'); 
        }
        
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
}

function newItemBtn(){
    return AddNewItem(); 
}