import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBY__SCRzSC4nmQGFV3sloGciL5QkIymAQ",
    authDomain: "eclothes-372db.firebaseapp.com",
    databaseURL: "https://eclothes-372db.firebaseio.com",
    projectId: "eclothes-372db",
    storageBucket: "",
    messagingSenderId: "52614248306",
    appId: "1:52614248306:web:47aedd470781963a"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;