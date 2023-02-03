const Email = require("../../models/email/email");

const mail = {
  send: (req, res) => {
    console.log(1);
    const email = new Email();
    const result = email.send(req.body);

    return result;
  },
};

module.exports = { mail };
