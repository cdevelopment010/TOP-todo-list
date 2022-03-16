import GenericPage from '../GenericPage.js'; 
import RefreshPage from '../RefreshPage.js';

export default function navigatateSections() {

    let lis = document.querySelectorAll('nav li'); 
    lis.forEach(li => {
        li.removeEventListener('click', function() {}); 
        li.addEventListener('click', function() {
            navToNewPage(li.innerText)
            clearActive(li);
        }); 
        
    })


}


function clearActive(item) {
    let lis = document.querySelectorAll('nav li'); 
    lis.forEach(li => {
        li.classList.remove('active')
    }); 
    item.className = 'active';
}

function navToNewPage(page) {
    //create a local storage for refreshing pages later
    localStorage.setItem('TOP-current-page', JSON.stringify(page)); 
    // document.querySelector('#content-page').remove(); 
    // document.querySelector('#root .container').append(renderPageContent(page, filterItems(page.toLowerCase()))); 
    RefreshPage(); 
}