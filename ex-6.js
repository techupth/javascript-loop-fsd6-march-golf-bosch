// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
const reverseText = (text) => {
  reversedCompanyName = text.split("").reverse().join("");
};

reverseText(companyName);

console.log(reversedCompanyName);
