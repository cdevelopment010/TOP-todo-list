export default function closePopup(identifier) {
    document.querySelector(identifier).remove();
    document.getElementById('overlay').remove(); 
}