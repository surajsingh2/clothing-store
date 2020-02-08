import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAt9dz7j6LXbmKjlI4TJGAgtRUKks5dTfo",
    authDomain: "clothing-store-db-fc944.firebaseapp.com",
    databaseURL: "https://clothing-store-db-fc944.firebaseio.com",
    projectId: "clothing-store-db-fc944",
    storageBucket: "clothing-store-db-fc944.appspot.com",
    messagingSenderId: "985542070287",
    appId: "1:985542070287:web:cddd8c16959c37d766537a",
    measurementId: "G-H7YXSLHF75"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`)
      const snapShot = await userRef.get();   

      if (!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try {
              await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              })
          } catch (error) {
              console.log('error creating user', error.message)
          }
      }
      
      return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;