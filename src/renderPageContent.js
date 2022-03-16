import renderPageItem from "./renderPageItem";

export default function renderPageContent(name, items) {

    const page = document.createElement('div'); 
    const title = document.createElement('h2'); 
    const pageItems = new renderPageItem(items); 
    
    title.innerText = name; 
    page.id = "content-page"; 
    page.className = 'content';


    page.append(title); 
    page.append(pageItems);
    return page; 
}


