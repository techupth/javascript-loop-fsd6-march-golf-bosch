// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
const addPrefix = (array, prefix) => {
  newRestaurants = array.map((a) => prefix + " " + a);
};

addPrefix(restaurants, "Restaurant Name:");

console.log(newRestaurants);
