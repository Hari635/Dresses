import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyB4ThpsBYJ4jRsPRY9WDgmAbsofrBEEuGs",
    authDomain: "mycart-14154.firebaseapp.com",
    projectId: "mycart-14154",
    storageBucket: "mycart-14154.appspot.com",
    messagingSenderId: "652496924900",
    appId: "1:652496924900:web:65d5576a3b54a456197cf1",
    measurementId: "G-0CS87BM3RG"
  }

  export const createUserProfileDocument=async(userAuth,additionalData)=>{
      if(!userAuth){
        return
      } 

      const userRef =firestore.doc(`user/${userAuth.uid}`)
      const snapShot=await userRef.get()

      if(!snapShot.exists){
          
          const{ displayName,email}=userAuth
          const createdAt=new Date()

          try{
              await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData

              })
          }catch(error){
              console.log('error creating user',error.message);

          }
      }
      return(userRef)
  }

  firebase.initializeApp(config)

  export const auth=firebase.auth()
  export const firestore=firebase.firestore()

  const provider =new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle=()=>auth.signInWithPopup(provider)

  export default firebase

  // i got error in firestore which i could not sign in i resolve by change the rules in firestore
  //https://github.com/actions-on-google/smart-home-nodejs/issues/369