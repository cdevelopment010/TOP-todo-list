import filterItems from './filterItems';
import renderPageContent from './renderPageContent';

export default async function RefreshPage() {
    const page = JSON.parse(localStorage.getItem('TOP-current-page')) || 'Home';
    try {
        document.querySelector('#content-page').remove(); 

    } catch(error) {
        console.error('could not find #content-page')
    }
    let data = await filterItems(page.toLowerCase()); 
    document.querySelector('#root .container').append(renderPageContent(page, data)); 
    // location.reload();
}