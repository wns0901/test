const fs = require("fs");
// const aws = require("aws-sdk");
const S3 = require("aws-sdk/clients/s3");

const bucketName = "haruserver";
const region = "ap-northeast-2";
const accessKeyId = "AKIAZQXW63OFUXC6HVXN";
const secretAccessKey = "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";

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

function upload(file) {
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.originalname,
  };
  return s3.upload(uploadParams).promise();
}

module.exports = { upload };
