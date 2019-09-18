import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyBXoAatDku1wNCeLW55aVzo5D-YuOFHhpg",
  authDomain: "firstreactapp-2019.firebaseapp.com",
  databaseURL: "https://firstreactapp-2019.firebaseio.com",
  projectId: "firstreactapp-2019",
  storageBucket: "ENTER YOURS HERE",
  messagingSenderId: "731829062637",
  appId: "1:731829062637:web:7395c2a34f008f90"
};

const FireConnection = firebase.initializeApp(config);

export default FireConnection;
