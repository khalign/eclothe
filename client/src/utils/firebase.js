import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBY__SCRzSC4nmQGFV3sloGciL5QkIymAQ",
  authDomain: "eclothes-372db.firebaseapp.com",
  databaseURL: "https://eclothes-372db.firebaseio.com",
  projectId: "eclothes-372db",
  storageBucket: "",
  messagingSenderId: "52614248306",
  appId: "1:52614248306:web:47aedd470781963a"
};

export const createUser = async (user, data) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exist) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...data });
    } catch (error) {
      console.log("error creating user" + error);
    }
  }
  return userRef;
};

export const addCollectionWithDocs = async (key, objects) => {
  const collRef = firestore.collection(key);

  const batch = firestore.batch();
  objects.forEach(object => {
    const docRef = collRef.doc();
    batch.set(docRef, object);
  });
  return await batch.commit();
};

export const mapCollectionsSnapshot = collections => {
  const map = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      route: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  return map.reduce((transformer, collection) => {
    transformer[collection.route] = collection;
    return transformer;
  }, {});
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
