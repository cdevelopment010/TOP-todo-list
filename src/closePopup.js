export default function closePopup(identifier) {
    document.querySelector(identifier).remove();

    try {
        document.getElementById('overlay').remove(); 

    } catch(error) {
        console.error('could not find overlay')
    }
}