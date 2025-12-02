const express = require("express");
const cors = require("cors");
const normalizeVendorB = require("./vendorB");
const vendorBData = require("./data/vendorB.json");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("vendorB/data atau vendor-b/normalize");
});

app.get("/vendorB/data", (req, res) => {
  res.json(vendorBData);
});

app.get("/vendor-b/normalize", (req, res) => {
  const normalized = normalizeVendorB(vendorBData);
  res.json({
    vendor: "Vendor B — Distro Modern",
    normalizedData: normalized
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
