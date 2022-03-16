import '@fortawesome/fontawesome-free';
import '../node_modules/@fortawesome/fontawesome-free' 
import './sass/main.scss'; 
import GenericPage from './GenericPage.js'; 
import renderPageContent from './renderPageContent';


localStorage.setItem('TOP-current-page', JSON.stringify('Home'));
GenericPage(renderPageContent, 'home')

