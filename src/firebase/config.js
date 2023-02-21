import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyAw1-mLrHtT2qbi93NAPwR3xzpqk6Y2GKo",
    authDomain: "sosyal-a937b.firebaseapp.com",
    projectId: "sosyal-a937b",
    storageBucket: "sosyal-a937b.appspot.com",
    messagingSenderId: "436610202126",
    appId: "1:436610202126:web:30afb8a8ed75d3462eda5f"
};


const app=initializeApp(firebaseConfig);

const auth=getAuth();
const db=getFirestore();

export {auth,db}