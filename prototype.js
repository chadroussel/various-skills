function User(email, name) {
  (this.email = email), (this.name = name);
  this.online = false;
  //   this.login = function () {
  //     console.log(this.email, "has logged in");
  //   };
}

// User.prototype.login = function () {
//   this.online = true;
//   console.log(this.email, "has logged in");
// };

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, "has logged out");
};

var userOne = new User("maxminelli@gmail.com", "Max");
var userTwo = new User("chadroussel79@gmail.com", "Chad");

console.log(userOne);
userTwo.login();
