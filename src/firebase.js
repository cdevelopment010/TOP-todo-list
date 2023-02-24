//firebase
import {initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, collection, getDoc, getDocs, addDoc, doc, query, where, updateDoc, orderBy, limit, deleteDoc } from 'firebase/firestore';


const firebaseApp = initializeApp({
    apiKey: "AIzaSyBaQqz-GV6Fre2w5gSCtu6H9aDw9Hxefpo",
    authDomain: "top-todo-list-1a098.firebaseapp.com",
    projectId: "top-todo-list-1a098",
    storageBucket: "top-todo-list-1a098.appspot.com",
    messagingSenderId: "195559895996",
    appId: "1:195559895996:web:d76245602d5027f57571b9",
    measurementId: "G-J3FGDJFHRE"
});



const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
// db.collection('todos').getDocs();
const todoCollection = collection(db, 'todos');
const snapshot = await getDocs(todoCollection);


//
const readData = async () => {
    let items = []
    const querySnapshot = await getDocs(collection(db, "todos"));
    querySnapshot.forEach((doc) => {
        items.push(doc.data())              
    });

    return items;
}

const addDataToFirestore = async (task) =>  {
    try {
        const docRef = await addDoc(collection(db, "todos"), {
        title: task.title,
        description: task.description,
        date: task.date,
        priority: task.priority, 
        notes: task.notes,
        checklist: task.checklist,
        project: task.project,
        complete: false
        });
    
        console.log("Document written with ID: ", docRef.id);

        await updateDoc(docRef, {
            id: docRef.id
        })
        return docRef;
    } catch (e) {
        console.error("Error adding document: ", e);
        return;
    }
}

const editDoc = async (id, updated) => {
    const docRef = doc(db,'todos',id); 
    await updateDoc(docRef, updated);
}

const completeDoc = async (item) => {

    const docRef = doc(db,'todos', item.id)
    await updateDoc(docRef, {
        complete: true
    })
}


const removeDoc = async (item) => {
    console.log("DeleteDoc", item);
    const docRef = doc(db,'todos', item.id);
    console.log("removeDoc docRef",docRef); 
    await deleteDoc(docRef);
}

// detect auth state
onAuthStateChanged(auth, user => {
    if (user !== null) {
        console.log('Loggedn in!');
    } else {
        console.log('No user');
    }
})





export default {addDataToFirestore, readData, editDoc, completeDoc, removeDoc};
