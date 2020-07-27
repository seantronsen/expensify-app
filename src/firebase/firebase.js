import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAGGhIrR1zf9IrHEIdm4KGZrSpzRqL2GPQ',
  authDomain: 'expensify-5776f.firebaseapp.com',
  databaseURL: 'https://expensify-5776f.firebaseio.com',
  projectId: 'expensify-5776f',
  storageBucket: 'expensify-5776f.appspot.com',
  messagingSenderId: '893684908013',
  appId: '1:893684908013:web:74cd48d75ed8c96c9771e4',
  measurementId: 'G-S7TLEM6NLE',
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Sean Tronsen',
});
