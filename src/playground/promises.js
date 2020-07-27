const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: "Sean Tronsen",
    //   age: 20,
    // });
    reject("Something went wrong!");
  }, 2000);
});

promise.then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
  }
);
