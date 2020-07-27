import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAGGhIrR1zf9IrHEIdm4KGZrSpzRqL2GPQ",
  authDomain: "expensify-5776f.firebaseapp.com",
  databaseURL: "https://expensify-5776f.firebaseio.com",
  projectId: "expensify-5776f",
  storageBucket: "expensify-5776f.appspot.com",
  messagingSenderId: "893684908013",
  appId: "1:893684908013:web:74cd48d75ed8c96c9771e4",
  measurementId: "G-S7TLEM6NLE",
};
firebase.initializeApp(config);

const database = firebase.database();
database
  .ref()
  .set({
    name: "Sean Tronsen",
    age: 20,
    isSingle: true,
    stressLevel: 4,
    job: {
      title: "Software Developer",
      company: "nvidia",
    },
    location: {
      city: "Seattle",
      country: "United States",
    },
  })
  .then((data) => {
    console.log("data is saved");
  })
  .catch((e) => {
    console.log("Failed: ", e);
  });
// database.ref("age").set(21);
// database.ref("location/city").set("Portland");
// database
//   .ref("attributes")
//   .set({
//     height: 73,
//     weight: 172,
//   })
//   .then((data) => {
//     console.log("success");
//   })
//   .catch((error) => {
//     console.log("failure: ", error);
//   });

database.ref().update({
  "job/company": "Amazon",
  "location/city": "Seattle",
  stressLevel: 9,
});
// database
//   .ref("isSingle")
//   .remove(() => {
//     console.log("I was removed you bitch");
//   })
//   .then((data) => {
//     console.log("success: the data was removed");
//   })
//   .catch((error) => {
//     console.log("Failed: the data was not removed");
//   });
