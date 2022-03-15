import AddNewItem from './AddNewItem'; 
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
        complete.addEventListener('click', function() {
            completeTask(this); 
        })


        itemContainer.append(itemDate);
        itemContainer.append(itemTitle);
        itemContainer.append(complete);


        itemContainer.className = 'item-container'
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
    return item.complete = true;
}

function newItemBtn(){
    return AddNewItem(); 
}