import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
   apiKey: 'AIzaSyAOSG5knW73dt05AvsRjGq_BI3iSuX0c08',
   authDomain: 'erm-sewing-shop.firebaseapp.com',
   projectId: 'erm-sewing-shop',
   storageBucket: 'erm-sewing-shop.appspot.com',
   messagingSenderId: '642838847032',
   appId: '1:642838847032:web:f1bf0d89bd0f429c1dd0cd',
};

const fireBase = firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(fireBase);

export default fireBase;