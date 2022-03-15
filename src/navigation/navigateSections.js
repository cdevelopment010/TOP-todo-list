import GenericPage from '../GenericPage.js'; 
import renderPageContent from '../renderPageContent';

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
    document.querySelector('#content-page').remove(); 
    document.querySelector('#root .container').append(renderPageContent(page)); 
}