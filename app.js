const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
app.use(cors());
app.listen(4000, function () {
  console.log("listening on 4000");
});

app.use(express.static(path.join(__dirname, "/react-test/build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/react-test/build/index.html"));
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/react-test/build/index.html"));
// });

app.get("/get", (req, res) => {
  res.json({ 정보: "무엇일까요?" });
});
