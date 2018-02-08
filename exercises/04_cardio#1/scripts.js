// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

console.log('');
console.log('=============================== Cardio #1 ===============================');
console.log('');

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
var bornInTheFifteen = inventors.filter(inventor => inventor.year > 1499 && inventor.year < 1600);
console.log('>>>>>>>>>>>>>>>>>>>>>>>> Exercise #1 - filter() <<<<<<<<<<<<<<<<<<<<<<<<<');
console.table(bornInTheFifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
var names = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log('>>>>>>>>>>>>>>>>>>>>>>>> Exercise #2 - map() <<<<<<<<<<<<<<<<<<<<<<<<<');
console.table(names);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
var sortByBirthday = inventors.sort((a, b) => a.year - b.year);
console.log('>>>>>>>>>>>>>>>>>>>>>>>> Exercise #3 - sort() <<<<<<<<<<<<<<<<<<<<<<<<<');
console.table(sortByBirthday);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
var sumAge = inventors.reduce((acc, currVal) => acc + currVal.passed - currVal.year, 0);
console.log('>>>>>>>>>>>>>>>>>>>>>>>> Exercise #4 - reduce() <<<<<<<<<<<<<<<<<<<<<<<<<');
console.log(sumAge);

// 5. Sort the inventors by years lived
var sortByYearsLived = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year));
console.log('>>>>>>>>>>>>>>>>>>>>>>>> Exercise #5 - sort() <<<<<<<<<<<<<<<<<<<<<<<<<');
console.table(sortByYearsLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
var boulevards = Array.from(document.querySelectorAll('.mw-category-group a'));
boulevardsWithDe = boulevards.filter(boulevard => boulevard.title.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
var sortByLastName = people.sort((personA, personB) => {
  var lastNameA = personA.split(',')[0];
  var lastNameB = personB.split(',')[0];

  return lastNameA < lastNameB ? -1 : 1;
});
console.log('>>>>>>>>>>>>>>>>>>>>>>>> Exercise #6 - sort() <<<<<<<<<<<<<<<<<<<<<<<<<');
console.table(sortByLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

var wordCount = data.reduce((occurrences, word) => {
  occurrences[word] ? occurrences[word]++ : occurrences[word] = 1;

  return occurrences;
}, {});
console.log('>>>>>>>>>>>>>>>>>>>>>>>> Exercise #7 - reduce() <<<<<<<<<<<<<<<<<<<<<<<<<');
console.log(wordCount);
