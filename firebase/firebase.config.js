import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC9-HjBaUT1EH4PeRvF9qQ32Mwux9eiJBs",
    authDomain: "fir-2ccf5.firebaseapp.com",
    projectId: "fir-2ccf5",
    storageBucket: "fir-2ccf5.appspot.com",
    messagingSenderId: "894361905722",
    appId: "1:894361905722:web:b7b7aee06ce0d8f0de2303"
}; 

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);