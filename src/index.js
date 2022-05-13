// connect firebase project from backend to front end. Info we need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js"; //"firebase/app";


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
// const db1 = firebase.firestore();


// collection ref
const colRef = collection(db,'Websites')
// let websites = []
// real time collection data
onSnapshot(colRef, (snapshot) => {
   let websites = []
    snapshot.docs.forEach((doc) => {
        websites.push({ ...doc.data(), id: doc.id })
    })
    console.log(websites)

    // for(var i = 0; i<websites.length; i++){
    //     // for(var ii = 0; ii <= 3; ii++){
    //         var p = document.createElement('p')
    //         p.innerHTML = websites[i]
    //         console.log(websites[i])
    //         document.querySelector('div').appendChild(p)
    //     // }
    // }

    Websites.forEach(function(website){
        let web = document.createElement("span");
        let name = document.createElement("span");
        let pass = document.createElement("span");

        web.innerHTML = website.website
        name.innerHTML = website.username
        pass.innerHTML = website.password

        document.querySelector('#lists').appendChild()
    })
})

// for(var i = 0; i<websites.length; i++){
//     var p = document.createElement('p')
//     p.innerHTML = websites[i]
//     document.querySelector('div').appendChild(p)
// }
// this will try to get all the docs from colRef, aka the collection called Websites.


// const colRef = collection(db,'Websites')
// let websites = {
//     website: [],
//     username: [],
//     password: []
// }
// // real time collection data
// onSnapshot(colRef, (snapshot) => {
//   // let websites = []
//     snapshot.docs.forEach((doc) => {
//         websites.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(websites)

//     for(var i = 0; i<websites.length; i++){
//         // for(var ii = 0; ii <= 3; ii++){
//             var p = document.createElement('p')
//             p.innerHTML = websites[i]
//             console.log(websites[i])
//             document.querySelector('div').appendChild(p)
//         // }
//     }
// })


// const lists = document.getElementById("lists");

// db1.collection("Websites")
//   .get()
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       let p = document.createElement("p");
//       let web = document.createElement("span");
//       let name = document.createElement("span");
//       let pass = document.createElement("span");

//       web.textContent = doc.data().website;
//       name.textContent = doc.data().username;
//       pass.textContent = doc.data().password;

//       lists.appendChild(p);
//       p.appendChild(web);
//       p.appendChild(name);
//       p.appendChild(pass);

//     });
//   })
//   .catch((error) => {
//     console.log("Error getting documents: ", error);
//   });


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

// update websites
const updateForm = document.querySelector('.update')
updateForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const docRef = doc(db, 'Websites', updateForm.id.value)

    updateDoc(docRef, {
        username: updateForm.username.value,
        password: updateForm.password.value,

    })
    .then(() => {
        updateForm.reset()
    })
})



//REALTIME
// import {getDatabase}form

// function GetAllDataOnce(){
//     const dbRef = ref(db);

//     get(child(dbRef, "Website"))
//     .then((snapshot)=>{

//         var websites =[];

//         snapshot.forEach(childSnapshot => {
//             websites.push(childSnapshot.val());
//         });
//         AddAllItemsToTable(websites);
//     })
// }