const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
let myVar = 'sit';
console.log('Lorem ipsum dolor %s amet', myVar);
console.log(`Lorem ipsum dolor ${myVar} amet`);

// Styled
console.log('%c Lorem ipsum dolor sit amet', 'font-size: 20px; background: green;');

// warn and error return the stack trace
// warning!
console.warn('This is a warning!');

// Error :|
console.error('This is an error!');

// Info
console.info('This is an info.');

// Testing
let p = document.querySelector('p');
console.assert(1 === 1, 'Not a match'); // this won't fire, cause the condition evaluates to true
console.assert(1 === 3, 'Not a match');
console.assert(p.classList.contains('class'), 'Not a match');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  // console.group(`${dog.name}`);
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Marina');
console.count('Marina');
console.count('Marina');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/inBlackAndWhite')
  .then(response => response.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

// display array of objects
console.table(dogs);
