import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// Setup "expenses" with three items containing the properties (description, note, amount, createdAt)

// const onValueChange = database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((item) => {
//     expenses.push({ ...item.val(), id: item.key });
//   });
//   console.log(expenses);
// });

// setTimeout(undefined, 2000);
// for (var x = 0; x < 3; x++)
//   database.ref("expenses").push({
//     description: "Bill for failed hernia surgery",
//     note: "why",
//     amount: Math.ceil(Math.random() * 10000 * x * x * x * x),
//     createdAt: x,
//   });
// database.ref("notes").set(null);
// database.ref("notes").push({ body: "this is another note", title: "Test note" });
// database.ref("notes").remove("-MDIGVBwOkVVAngfRzCy");

// const firebaseNotes = {
//   notes: {
//     apoijasdf: {
//       body: "this is the note",
//       title: "Test note",
//     },
//     apasdfasdf: {
//       body: "this is another note",
//       title: "Test note",
//     },
//   },
// };

// const notes = [
//   { id: "12", body: "this is the note", title: "Test note" },
//   { id: "14", body: "this is another note", title: "Test note" },
// ];

// database.ref("notes").set(notes);

// Setup a new data subscription -> Sean is a software developer at Amazon
// Change the data and make sure that the result of the change is output to the console.

// const onValueChange = database.ref().on("value", (snapshot) => {
//   const value = snapshot.val();
//   console.log(`${value.name} is a ${value.job.title} at ${value.job.company}.`);
// });

// database.ref("job").update({
//   title: "Computer Engineer",
//   company: "Nvidia",
// });

// database
//   .ref()
//   .once("value")
//   .then((data) => {
//     console.log("Data: ", data.val());
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

// database
//   .ref()
//   .set({
//     name: "Sean Tronsen",
//     age: 20,
//     isSingle: true,
//     stressLevel: 4,
//     job: {
//       title: "Software Developer",
//       company: "nvidia",
//     },
//     location: {
//       city: "Seattle",
//       country: "United States",
//     },
//   })
//   .then((data) => {
//     console.log("data is saved");
//   })
//   .catch((e) => {
//     console.log("Failed: ", e);
//   });
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

// database.ref().update({
//   "job/company": "Amazon",
//   "location/city": "Seattle",
//   stressLevel: 9,
// });
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
