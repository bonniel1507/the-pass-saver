// connect firebase project from backend to front end. Info we need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js"; //"firebase/app";

// import {
//   getFirestore, collection, getDocs,
//   addDoc, deleteDoc, getDoc, doc,
//   onSnapshot, updateDoc, setDoc
import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js"; //'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAgQrhvuFI_AMWZ1ErNtlrPLV_kgk9RP4s",
  authDomain: "the-pass-saver.firebaseapp.com",
  databaseURL: "https://the-pass-saver-default-rtdb.firebaseio.com",
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

// var signin = document.querySelector('.signin')
var account
// // signin.addEventListener('submit', (e) => {
// signin.addEventListener('submit',function(){
//     e.preventDefault()

//     // var account = document.querySelector('.account').value
//     account = signin.account.value
//     account = account.toLowerCase()
//     console.log(account)

// })

// const login = document.querySelector('.login')
// document.querySelector('#signin').addEventListener('click',function(e){
//     e.preventDefault()
    
//     account = login.account.value.toLowerCase()
//     login.reset()
// })

var account =  prompt("Please enter Username, you can use your hstat email(everything before @)").toLowerCase()


const colRef = collection(db, account)
if (colRef.empty) {
    firebase.firestore().collection("account").add({

   })
}

// real time collection data
onSnapshot(colRef, (snapshot) => {
   let websites = []
    snapshot.docs.forEach((doc) => {
        websites.push({ ...doc.data(), id: doc.id })
    })
    console.log(websites)

    //table
    websites.forEach(function(website){
        let tr = document.createElement("tr")
        let web = document.createElement("td");
        let name = document.createElement("td");
        let pass = document.createElement("td");
        let id = document.createElement("td")

        web.innerHTML = website.website
        name.innerHTML = website.username
        pass.innerHTML = website.password
        id.innerHTML = website.id

        document.querySelector('#tbody').appendChild(tr)
        tr.appendChild(web)
        tr.appendChild(name)
        tr.appendChild(pass)
        tr.appendChild(id)
    })
})


// adding websites
const addWebsiteForm = document.querySelector('.add')
addWebsiteForm.addEventListener('submit', (e) => {
  e.preventDefault()

    addDoc(colRef, {
        website:addWebsiteForm.website.value,
        username: addWebsiteForm.username.value,
        password: addWebsiteForm.password.value,
    })
    .then(() => {
        addWebsiteForm.reset()
        window.location.reload()
    })
})

// deleting websites
const deleteWebsiteForm = document.querySelector('.delete')
deleteWebsiteForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const docRef = doc(db, account, deleteWebsiteForm.id.value)

    deleteDoc(docRef)
    .then(() => {
        deleteWebsiteForm.reset()
        window.location.reload()
    })
})

// update websites
const updateForm = document.querySelector('.update')
updateForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const docRef = doc(db, account, updateForm.id.value)

    updateDoc(docRef, {
        username: updateForm.username.value,
        password: updateForm.password.value,
    })
    .then(() => {
        updateForm.reset()
        window.location.reload()
    })
    .then(() => {
        document.querySelector('#lists').innerHTML
    })
})
