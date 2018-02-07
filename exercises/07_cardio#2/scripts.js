// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

console.log('=========================================================================');
console.log('=============================== Cardio #2 ===============================');
console.log('');

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
let anyOlderThan19 = people.some(person => {
  let age = new Date().getFullYear() - person.year;
  return age > 18;
});

console.log('>>>>>>>>>>>>>>>>>>>>>>>> Exercise #1 - some() <<<<<<<<<<<<<<<<<<<<<<<<<');
console.log({anyOlderThan19});

// Array.prototype.every() // is everyone 19 or older?
let allOlderThan19 = people.every(person => {
  let age = new Date().getFullYear() - person.year;
  return age > 18;
});

console.log('>>>>>>>>>>>>>>>>>>>>>>>> Exercise #2 - every() <<<<<<<<<<<<<<<<<<<<<<<<<');
console.log({allOlderThan19});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
let comment = comments.find(comment => comment.id === 823423);

console.log('>>>>>>>>>>>>>>>>>>>>>>>> Exercise #3 - find() <<<<<<<<<<<<<<<<<<<<<<<<<');
console.log({comment});

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
let commentIndex = comments.findIndex(comment => comment.id === 823423);
comments.splice(commentIndex, 1);

console.log('>>>>>>>>>>>>>>>>>>>>>>>> Exercise #4 - findIndex() <<<<<<<<<<<<<<<<<<<<<<<<<');
console.log({comments});
