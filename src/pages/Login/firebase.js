import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCWRKev-W6aJDw4oYpw8YlGOdd1OHeaPvI",
    authDomain: "auth-be77c.firebaseapp.com",
    projectId: "auth-be77c",
    storageBucket: "auth-be77c.appspot.com",
    messagingSenderId: "286924412512",
    appId: "1:286924412512:web:772ed97c6b5e95597b5505",
    measurementId: "G-8RCHFVPG41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};