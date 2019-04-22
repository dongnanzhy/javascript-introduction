
// Constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  }
}
// put function into Object Proto
Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
}


/* ===========
 Class
 ===============*/
 class Person2 {
   constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
   }
   getBirthYear() {
     return this.dob.getFullYear();
   }
   getFullName () {
    return `${this.firstName} ${this.lastName}`;
  }

 }


// Instantiate object
const person1 = new Person2('John', 'Doe', '4-3-1980');
console.log(person1);
console.log(person1.getFullName());