
import { initializeApp } from "firebase/app"
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import {getFirestore, collection, collectionGroup, getDocs, addDoc} from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyDDGYc0Tk7HEJ1-ttB8r0da5lDhy0IIIWQ",
    authDomain: "blog2json-423c2.firebaseapp.com",
    projectId: "blog2json-423c2",
    storageBucket: "blog2json-423c2.appspot.com",
    messagingSenderId: "320168223988",
    appId: "1:320168223988:web:907a96092cbd74d58a2aa1",
    measurementId: "G-0ENBVE1YZY"
  }

const app = initializeApp(firebaseConfig)

const projectStorage = getStorage(app)  //fileStorage
const db = getFirestore(app) //db 

export { db, projectStorage, ref, uploadBytesResumable, getDownloadURL, collection, collectionGroup, addDoc, getDocs } 

