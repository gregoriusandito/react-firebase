import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDyA4ZQTES4UKh12o8UZpcec0rppWySTXI",
    authDomain: "react-with-firebase-b76ae.firebaseapp.com",
    databaseURL: "https://react-with-firebase-b76ae.firebaseio.com",
    projectId: "react-with-firebase-b76ae",
    storageBucket: "react-with-firebase-b76ae.appspot.com",
    messagingSenderId: "914075210339"
}

const fire = firebase.initializeApp(config);

export default fire;