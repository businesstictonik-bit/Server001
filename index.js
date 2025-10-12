import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server ishlayapti ✅");
});

app.listen(10000, () => {
  console.log("Server 10000-portda ishlayapti 🚀");
});
