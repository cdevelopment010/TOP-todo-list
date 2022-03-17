import '@fortawesome/fontawesome-free';
import '../node_modules/@fortawesome/fontawesome-free' 
import './sass/main.scss'; 
import GenericPage from './GenericPage.js'; 
import renderPageContent from './renderPageContent';
import PopUp from './PopUp'; 


localStorage.setItem('TOP-current-page', JSON.stringify('Home'));
GenericPage(renderPageContent, 'home')

if (!JSON.parse(localStorage.getItem('TOP-popup-message'))) {
    setTimeout(() => {
        PopUp(); 
    }, 2000)
}
