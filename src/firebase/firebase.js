import firebase from "firebase";
import "firebase/auth";

var app = firebase.initializeApp({
    apiKey: "AIzaSyDsRiLRV7L-hMjqds16AiD4cfFh8tipDVA",
    authDomain: "alcoholicsanonymous-ad7cf.firebaseapp.com",
    projectId: "alcoholicsanonymous-ad7cf",
    storageBucket: "alcoholicsanonymous-ad7cf.appspot.com",
    messagingSenderId: "200186416860",
    appId: "1:200186416860:web:4e0f920048119ca53b2e19",
    measurementId: "G-LZ8BC18PN3"
});

export const auth = app.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
export default app;
export const db = app.firestore(); 