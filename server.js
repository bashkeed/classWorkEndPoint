const express = require("express");
const generatePassword = require("easy_random_password");

const app = express();
const port = 3000;



  const password = generatePassword(10);
  console.log(password);

// Middleware to parse JSON bodies
app.use(express.json());

// Sample in-memory user storage
let users = [];

// Endpoint to create a new user
app.post("/users", (req, res) => {
  const { username, email } = req.body;

  // Basic validation
  if (!username || !email) {
    return res.status(400).json({ error: "Username and email are required" });
  }

  const newUser = {
    id: password, // Simple ID assignment
    username,
    email,
  };

  users.push(newUser);
  res.status(201).json(newUser);

});
  console.log(users);


// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

