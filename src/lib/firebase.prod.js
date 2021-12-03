import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed';

// la config de ma base de donnée firebase 
const config = {
    apiKey: "AIzaSyAWDPleGo6KRWoEAQfveFOLMTSekQ_nRO8",
    authDomain: "animetv-a0bad.firebaseapp.com",
    projectId: "animetv-a0bad",
    storageBucket: "animetv-a0bad.appspot.com",
    messagingSenderId: "357554203181",
    appId: "1:357554203181:web:7b8b04e9a630304de326a4"
  };

const firebase = Firebase.initializeApp(config);

// seedDatabase (firebase); permet d'envoyer ma base de donnée seed, a faire une seul fois

export { firebase };