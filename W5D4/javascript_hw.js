// App Academy W5D4 Homework
// Intro to JavaScript
// Part I

function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}
// --> 'in block'
// --> 'in block'

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x);
  }
  console.log(x);
}
// --> 'in block'
// --> 'out of block'

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}
// --> "SyntaxError: Identifier 'x' has already been declared"
// --> "Error on var x = 'in block'"

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  console.log(x);
}
// --> 'in block'
// --> 'out of block'

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  let x = 'out of block again';
  console.log(x);
}
// --> "SyntaxError: Identifier 'x' has already been declared"
// --> "Error on let x = 'out of block again'"

function madLib(verb, adjective, noun) {
  console.log(`We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`);
}

function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

function fizzBuzz(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (((array[i] % 3) || (array[i] % 5)) && !((array[i] % 3) && (array[i] % 5))) {
      result.push(array[i]);
    }
  }
  return result;
}

function isPrime(number) {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function firstNPrimes(n) {
  let primes = [];
  let i = 1;
  while (primes.length < n) {
    if (isPrime(i)) {
      primes.push(i);
    }
    i += 1;
  }
  return primes;
}

function sumOfNPrimes(n) {
  let sum = 0;
  let arr = firstNPrimes(n);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Part II
function titleize(names, callback) {
  let titleized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  callback(titleized);
}

// Invocation
// titleize(['Mary', 'Brian', 'Leo'], (names) => {
//   names.forEach(name => console.log(name));
// })

function Elephant (name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes phrRRRRRRRRRRR!!!!!!!`);
};

Elephant.prototype.grow = function () {
  this.height += 12;
};

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function () {
  trick_index = Math.floor(Math.random()*(this.tricks.length));
  console.log(`${this.name} is ${this.tricks[trick_index]}`);
};

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
};

function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
};
