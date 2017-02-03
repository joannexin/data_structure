// create constructor function
// 'this' keyword refer to the object that will be created.
function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
};

// user1 and user200 are an objects of the class User.
var user1 = new User('John', 'Smith', 26, 'male');
var user200 = new User('Jill', 'Robinson', 25, 'female');


// add emailDomain property on User prototype
// if we check user1 or user200, we can access emailDomain property, and getEmailAddress function under dunder-proto object
User.prototype.emailDomain = '@facebook.com';
User.prototype.getEmailAddress = function() {
  return this.firstName + this.lastName + this.emailDomain;
}
