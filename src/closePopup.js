export default function closeForm(identifier) {
    document.querySelector(identifier).remove();
    document.getElementById('overlay').remove(); 
}