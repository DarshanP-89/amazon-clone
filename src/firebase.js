import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDMd0T6uiup0hgP4r79xh37Jf-Z6J0N-j0",
    authDomain: "clone-c1802.firebaseapp.com",
    databaseURL:"https://clone-c1802.firebaseio.com",
    projectId: "clone-c1802",
    storageBucket: "clone-c1802.appspot.com",
    messagingSenderId: "198205332116",
    appId: "1:198205332116:web:07cf878a7558a5724a7281"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };