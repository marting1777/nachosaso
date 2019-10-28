import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAt-jySKlCB7rnFLMrsDo0B3Fn5OXCLj6Q",
    authDomain: "nachosaso-e0247.firebaseapp.com",
    databaseURL: "https://nachosaso-e0247.firebaseio.com",
    projectId: "nachosaso-e0247",
    storageBucket: "nachosaso-e0247.appspot.com",
    messagingSenderId: "961948262067",
    appId: "1:961948262067:web:040e62f7f502a216c5dac6",
    measurementId: "G-RKLCXCYT2F",
}

firebase.initializeApp(config)

export default firebase