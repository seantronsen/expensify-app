const address = ["1299 s. juniper st", "Philadelphia", "Pennsylvania", "19147"];

const [, city, state = "New York"] = address;

console.log(`You are in ${city}, ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [menuItem, , medium] = item;

console.log(`A ${menuItem} costs ${medium}`);
