// connect firebase project from backend to front end. Info we need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js"; //"firebase/app";

import {
  getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js"; //'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAgQrhvuFI_AMWZ1ErNtlrPLV_kgk9RP4s",
  authDomain: "the-pass-saver.firebaseapp.com",
  projectId: "the-pass-saver",
  storageBucket: "the-pass-saver.appspot.com",
  messagingSenderId: "1006010437901",
  appId: "1:1006010437901:web:903a0e2e5898627617a044",
  measurementId: "G-6T201008QW"
}

// initialize firebase app
initializeApp(firebaseConfig)


// initialize services | db= database
const db = getFirestore()

// collection ref
const colRef = collection(db,'Websites')

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    // console.log(snapshot.docs)
    
    let websites = []
    snapshot.docs.forEach((doc) => {
        websites.push({ ...doc.data(), id: doc.id })
    })
    console.log(websites)
  })
  .catch(err => {
      console.log(err.message)
  })

// this will try to get all the docs from colRef, aka the collection called Websites.


// adding websites
const addWebsiteForm = document.querySelector('.add')
addWebsiteForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    addDoc(colRef, {
        website: addWebsiteForm.website.value,
        username: addWebsiteForm.username.value,
        password: addWebsiteForm.password.value,
    })
    .then(() => {
        addWebsiteForm.reset()
    })
})

// deleting websites
const deleteWebsiteForm = document.querySelector('.delete')
deleteWebsiteForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const docRef = doc(db, 'Websites', deleteWebsiteForm.id.value)
    
    deleteDoc(docRef)
        .then(() => {
            deleteWebsiteForm.reset()
        })
})