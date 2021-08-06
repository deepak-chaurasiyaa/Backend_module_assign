const readline = require("readline");

const readline1 = readline.createInterface({
  input: process.stdin,
  output: process.output,
});

var list = ["SEven Habit of Highly effectibe people", "Secret of Success"];
message();
read();
function message() {
  console.log("Belew Press 1 , 2 or 3");
  console.log(" 1: for see all the Book");
  console.log(" 2: for Add new Book");
  console.log(" 3: for Quit");
}

function read() {
  readline1.question("Enter the Number ", function (number) {
    if (number == 1) {
      console.log(list);
      message();
      read();
    } else if (number == 2) {
      readline1.question("Enter the book name ", function (name) {
        list.push(name);
        message();
        read();
      });
    } else if (number == 3) {
      readline1.close();
    } else {
      console.log("You have selected an invalid entry so please ");
      message();
      read();
    }
  });
  readline1.on("close", function () {
    console.log("Thank You");
    return;
  });
}
