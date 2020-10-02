const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
require("dotenv").config();

const auth = {
  auth: {
    api_key: process.env.APIKEY,
    domain: process.env.DOMAIN,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

// field, uni, number, userName // question, contactWay, contact //
const sendMail = (
  field = "Не указан",
  uni = "Не указан",
  number = "Не указан",
  userName = "Не указан",
  question = "Не указан",
  contactWay = "Не указан",
  contact = "Не указан",
  cb
) => {
  const mailOptions = {
    from: process.env.FROMEMAIL,
    to: process.env.TOEMAIL,
    subject: "Новая заявка с РосУчеба",
    text: `1. Направление: ${field},\n2. Университет: ${uni},\n3. Номер: ${number},\n4. Имя: ${userName},\n5. Вопрос: ${question},\n6. Способ связи: ${contactWay},\n7. Контакт: ${contact}`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;
