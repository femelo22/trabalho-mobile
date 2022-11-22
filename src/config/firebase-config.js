// Your web app's Firebase configuration

import { initializeApp } from '@firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBBWVj42e7WZ74HH8hAl7qclJBE9ALPk98",
    authDomain: "fir-react-cdf39.firebaseapp.com",
    projectId: "fir-react-cdf39",
    storageBucket: "fir-react-cdf39.appspot.com",
    messagingSenderId: "889936935662",
    appId: "1:889936935662:web:bea8878b28b12e89fc11ff"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);