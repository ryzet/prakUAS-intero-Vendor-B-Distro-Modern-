const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const normalizeVendorB = require("./vendorB");
const vendorBData = require("./data/vendorB.json");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("vendorB/data");
});

app.get("/vendorB/data", (req, res) => {
  try {
    const filePath = path.join(__dirname, "data", "vendorB.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(fileContent);

    res.json(jsonData);
  } catch (error) {
    res.status(500).json({
      message: "Failed to read JSON file",
      error: error.message
    });
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
