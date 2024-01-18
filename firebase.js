import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBGiUtoLKywzXN0O0-KD15SClzhjFjHEmE',
  authDomain: 'onep-5f923.firebaseapp.com',
  databaseURL: 'https://onep-5f923-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'onep-5f923',
  storageBucket: 'onep-5f923.appspot.com',
  messagingSenderId: '377975066437',
  appId: '1:377975066437:web:ef9d6ff1f2274af886382c'
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { db, ref, onValue };
