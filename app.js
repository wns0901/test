const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const email = require("./router/email");
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(express.static(path.join(__dirname, "/react-test/build")));

app.listen(4000, function () {
  console.log("listening on 4000");
});

app.use("/img", require("./router/router"));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/react-test/build/index.html"));
// });

app.get("/get", (req, res) => {
  res.json({ 정보: "sklasdjkbdajkbasd" });
});

app.use("/mail", email);
// 커밋이 이것도 들어가나요?
