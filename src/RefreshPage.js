import filterItems from './filterItems';
import renderPageContent from './renderPageContent';

export default function RefreshPage() {
    const page = JSON.parse(localStorage.getItem('TOP-current-page')) || 'Home';
    document.querySelector('#content-page').remove(); 
    document.querySelector('#root .container').append(renderPageContent(page, filterItems(page.toLowerCase()))); 
}