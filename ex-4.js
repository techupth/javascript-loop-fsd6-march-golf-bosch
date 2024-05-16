// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
for(let index in restaurants){
  newRestaurants[index] = `Restaurant Name: ${restaurants[index]}`
}
console.log(newRestaurants);
