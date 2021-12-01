// consructor example
///////////////////////////////

function Person(name, age, country) {
  this.name = name
  this.age = age
  this.country = country
}
const person1 = new Person('John', 20, 'RU')
console.log('person1', person1)