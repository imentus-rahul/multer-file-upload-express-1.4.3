// Import express
const express = require("express");
const multer = require("multer");
const fs = require("fs");

const multerStorage = multer.diskStorage({

  destination: (req, file, cb) => {
    // Get the type of file.
    const ext = file.mimetype.split("/")[0];
    if (ext === "image") {
      // if type is image then store in images folder
      let dir = `uploads/images`;
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      cb(null, dir);
    } else {
      // In case of not an image store in others
      let dir = `uploads/others`;
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      cb(null, dir);
    }
  },
  filename: (req, file, cb) => {
    // Combine the Date in milliseconds and original name and pass as filename
    cb(null, `${Date.now()}.${file.originalname}`);
  },
});

// Use diskstorage option in multer
const upload = multer({ storage: multerStorage });

const PORT = process.env.PORT || 3000;

// Create instance of express.
const app = express();

// Include express.json() middleware
app.use(express.json());

// Include express.urlencoded() middleware
app.use(express.urlencoded({ extended: true }));

// // Doesn't works in version 1.4.3 // SHOULD BE REMOVED
// app.use(multer().any()); // multer().any() is used to parse multipart/form-data requests with any type of file data and text data.

// Create a GET endpoint for '/' route
app.get("/", (req, res) => {
  res.send("Welcome to API");
});

// Create a POST endpoint for '/upload' route
app.post("/upload", upload.single("myFile"), (req, res) => {
  console.log("Body: ", req.body);
  console.log("File: ", req.file);
  console.log("Files: ", req.files);
  res.send("File successfully uploaded.");
});

// Listen on the specified port.
app.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
});
