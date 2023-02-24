import firebaseFile from './firebase';

export default async function RemoveItem(item) {
    let itemsStored = await firebaseFile.readData() || []; 
    let removeItem = itemsStored.filter(i => i.title == item); 
    await firebaseFile.removeDoc(removeItem[0]);
}