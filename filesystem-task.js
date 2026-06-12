const fs = require("fs");
const path = require("path");

const welcomePath = path.join(__dirname, "welcome.txt");
const helloPath = path.join(__dirname, "hello.txt");

// Task 3 (part 1): Create welcome.txt with one line "Hello Node".
fs.writeFile(welcomePath, "Hello Node", (writeErr) => {
  if (writeErr) {
    console.error("Error creating welcome.txt:", writeErr.message);
    return;
  }

  console.log("welcome.txt created successfully.");

  // Task 3 (part 2): Read hello.txt and print its content.
  fs.readFile(helloPath, "utf8", (readErr, data) => {
    if (readErr) {
      console.error("Error reading hello.txt:", readErr.message);
      return;
    }

    console.log("Content of hello.txt:");
    console.log(data);
  });
});