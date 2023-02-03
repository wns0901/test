const nodemailer = require("nodemailer");

class Email {
  async send(client) {
    const password = Math.floor(Math.random() * 1000000);
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "wnswns012@gmail.com",
        pass: "fdzzrbkkaipvvkvy",
      },
    });

    let info = await transporter.sendMail({
      from: `"나요" <wnswns012@gmail.com>`,
      to: "wns9296@naver.com",
      subject: "인증번호",
      text: "번호",
      html: `<p>번호 : ${password}</p>`,
    });

    console.log(info.messageId);

    return { success: true };
  }
}

module.exports = Email;
