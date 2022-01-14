import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyC4M4WcrlpbGMNLj2lTtogvjbeVg1vorfc",
	authDomain: "todo-demo-0-b37fb.firebaseapp.com",
	projectId: "todo-demo-0-b37fb",
	storageBucket: "todo-demo-0-b37fb.appspot.com",
	messagingSenderId: "189319877116",
	appId: "1:189319877116:web:9fe332f5fbd91ee638a279"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
