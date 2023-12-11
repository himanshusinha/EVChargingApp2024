import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCwKddFqZ-i0TFAEF4zxtbqZL0nTKI5lLg',
  authDomain: 'evchargingapp2024.firebaseapp.com',
  projectId: 'evchargingapp2024',
  storageBucket: 'evchargingapp2024.appspot.com',
  messagingSenderId: '307116380610',
  appId: '1:307116380610:web:3863892c875a7fa8a2c65b',
  measurementId: 'G-H18V3NVG61',
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
