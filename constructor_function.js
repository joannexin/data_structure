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
