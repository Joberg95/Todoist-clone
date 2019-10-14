import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCtm2jMJxKSLbQvuzmSvzDiB6LjToYKhkQ",
  authDomain: "todoist-fcc-project.firebaseapp.com",
  databaseURL: "https://todoist-fcc-project.firebaseio.com",
  projectId: "todoist-fcc-project",
  storageBucket: "todoist-fcc-project.appspot.com",
  messagingSenderId: "693125469569",
  appId: "1:693125469569:web:85ae9f4f210aa12b348480"
});

export { firebaseConfig as firebase };
