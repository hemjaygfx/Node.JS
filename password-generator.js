const generator = require("generate-password");

// Task 4: Generate and display a random password.
function generateRandomPassword() {
  const password = generator.generate({
    // You can tune these options based on your password policy.
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
    strict: true,
  });

  console.log("Generated password:", password);
}

generateRandomPassword();