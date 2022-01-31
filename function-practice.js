// Sum of 2 numbers

function sumOfNumbers(num1, num2) {
  var result = num1 + num2
  console.log(result)
  return result
}

console.log(sumOfNumbers(65, 4))

// ---------------------------------------

//2. Write a simple function that takes name as a parameter  and then return a custom message.

function msgGenerator(name) {
  var message = 'Hello ' + name + ', Welcome to Programming Hero'
  return message
}

console.log(msgGenerator('Mehedi Hasan'))

// ---------------------------------------

//3. Write a function for a food delivery service that sells 'pizza' only. Each pizza costs 10$. This function takes the food name & quantity as parameter and then return a custom message with order info. This function should be smart enough to handle wrong parameter inputs.

function pizzaPanda(foodName, quantity) {
  if (foodName.toLowerCase() != 'pizza') {
    return 'Sorry, we sell Pizza only.'
  } else if (quantity < 0) {
    return 'Sorry, use positive number'
  } else if (quantity > 10) {
    return 'Sorry, 10 pizza left'
  }

  var price = 10 * quantity
  var message =
    'Order successful!, Order info: ' + foodName + ', Price: ' + price + '$'
  return message
}

console.log(pizzaPanda('Pizza', 10))

// ---------------------------------------

// Js Objects

var human = {
  name: 'Jhankar Mahbub',
  age: 50,
  height: '5 feet 7 inch.',
  hairColor: 'Brown',
  male: true,
  cardNumbers: [23432342, 2424234235345, 3353453534],
}

// var arr = ['Opu', 'Al Mamun']
// console.log(person.cardNumbers[2])

// Template Literals
var person1 = {
  name: 'Rakib',
  age: 40,
}
var hisDetails = `His name is ${person1.name}. He is ${person1.age} years old`

console.log(hisDetails)

// ---------------------------------------

// Switch Case

var age = 767

switch (age) {
  case 40:
    console.log('too old')
    break
  case 25:
    console.log('young')
    break
  case 10:
    console.log('child')
    break
  default:
    console.log('I dont know')
}
console.log('I am outside switch')

// ---------------------------------------

// Loop inside a function

function printer(numberLimit) {
  for (var i = 1; i < numberLimit + 1; i++) {
    console.log(i)
  }
}

printer(10)
