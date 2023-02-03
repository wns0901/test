const { upload } = require("./awsController");

async function creat(req, res) {
  console.log("로그");
  const image = req.file;
  const result = await upload(image);
  console.log(result);
  res.json({ msg: "확인" });
}

module.exports = { creat };
