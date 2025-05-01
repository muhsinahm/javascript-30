// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

import { inventors, people } from "../Utilities/PersonData.js";

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

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const yearsInventorLived = inventors.reduce(
  (accumulator, currentValue) =>
    accumulator + (currentValue.passed - currentValue.year),
  0
);
console.log("Total years they lived: ", yearsInventorLived);

// 5. Sort the inventors by years lived

const oldAged = inventors.sort(function (a, b) {
  return b.passed - b.year - (a.passed - a.year);
});
console.table(oldAged);

// 7. sort Exercise
// Sort the people alphabetically by last name
const splitted = people.map((item) => item.split(", "));

const sortedByLastName = splitted.sort((a, b) => a[0].localeCompare(b[0]));

const sortedPeople = sortedByLastName.map((item) => item.join(","));

console.log("Sorted by last name:", sortedPeople);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "pogostick",
];
const transportationCount = data.reduce((accumulator, item) => {
  accumulator[item] = (accumulator[item] || 0) + 1;
  return accumulator;
}, {});

console.log(transportationCount);
