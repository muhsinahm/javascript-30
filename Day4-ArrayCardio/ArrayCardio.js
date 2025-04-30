// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

import { inventors } from "../Utilities/PersonData.js";

function findFifteeners() {
  console.log("Inventors", inventors);
  const result = inventors.filter(findInventors);
  console.log("Required inventors", result);
}
function findInventors(value) {
  return value.year >= 1500 && value.year < 1600;
}
findFifteeners();

// Array.prototype.map()
// 2. Give us an array of the inventor first and last names

const names = inventors.map((name) => `${name.first} ${name.last}`);
console.log("First and Last names", names);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedArray = inventors.sort(function (a, b) {
  return b.year - a.year;
});
console.log("Sorted", sortedArray);
