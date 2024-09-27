const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS to allow requests from the frontend

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" }); // Files will be stored in the "uploads" directory

// Video upload route
app.post("/upload-video", upload.single("video"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  console.log(req.file); // The uploaded file info
  res.status(200).send("Video uploaded successfully!");
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000"); // Corrected the port number
});
