export default function PopUp() {

    const overlay = document.createElement('div'); 
    overlay.className = 'overlay'; 
    overlay.id = 'overlay'; 

    const popup = document.createElement('div'); 
    const title = document.createElement('h2'); 
    const para1 = document.createElement('p'); 
    const para2 = document.createElement('p'); 
    const para3 = document.createElement('p'); 
    const strongTag = document.createElement('strong')
    const ytLink = document.createElement('a'); 
    const button = document.createElement('button'); 


    title.innerText = 'Hey!'; 
    para1.innerText = `A little heads up that this site uses local storage to store your tasks. What this means is that you can't view tasks over different devices or web browsers - sorry!\nAlso, to start you need to add a project before adding a task.`; 

    strongTag.innerText = 'Shameless plug...';
    para2.append(strongTag); 
    para3.append(
        `Check out my YouTube channel for more web dev and general life videos!\n`
    ); 
    ytLink.href = 'https://www.youtube.com/channel/UCtHK20C4Dw4fcs7kZDl4QPQ'; 
    ytLink.innerText = 'My Channel'; 
    ytLink.target = '_blank'; 
    para3.append(ytLink); 

    button.innerText = 'Awesome! Thanks for letting me know.'
    button.addEventListener('click', closePopUp); 

    popup.append(title); 
    popup.append(para1); 
    popup.append(para2); 
    popup.append(para3); 
    popup.append(button);
    popup.className = 'popup'; 
    popup.id = 'popup'
    
    document.body.append(overlay); 
    document.body.append(popup); 

}

function closePopUp() {
    document.getElementById('overlay').remove(); 
    document.getElementById('popup').remove(); 
    localStorage.setItem('TOP-popup-message',JSON.stringify('true'))
}