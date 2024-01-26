const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
  
// in my idea first Input is Tesla and the secound is Mersedes 
// for seeing other the should have three ...



const employee = {
    name: 'Maria',
    age: 41,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output

console.log(otherName);

// name and otherName are undefined
// 
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
// 1 output is 12345
// and secound is undefined



const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);


// just syntax error because first index is not equal to secound




const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// 1 out put is value
// 2 output is[1,5,1,8,3,3]
// 3 output is 1;
// and the last one is 5