import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to format JSON
app.post("/format", (req, res) => {
  try {
    // Get the unformatted JSON from the request body
    const unformattedJson = req.body;

    // Check if the request body is valid JSON
    if (typeof unformattedJson !== "object" || unformattedJson === null) {
      return res.status(400).json({ error: "Invalid JSON data" });
    }

    // Prettify the JSON with 2 spaces indentation
    const prettifiedJson = JSON.stringify(unformattedJson, null, 2);

    // Send the prettified JSON as the response
    res.type("application/json").send(prettifiedJson);
  } catch (error) {
    // Handle any errors that occur during processing
    res.status(500).json({ error: "An error occurred while formatting JSON" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
