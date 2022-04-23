// connect firebase project from backend to front end. Info we need

import { initializeApp } from 'firebase/app'

import {
  getFirestore, collection, getDocs
} from 'firebase/firestore'

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
    console.log(snapchat.docs)
  })

// this will try to get all the docs from colRef, aka the collection called Websites.