export default function renderPageItem(items) {

    const container = document.createElement('div'); 
    
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

    return container; 
}

function completeTask(item) {
    console.log('btn pressed'); 
    return item.complete = true;
}