const axios = require("axios");

module.exports = async function (sendData) {
  let body = {
    key: process.env.SMS_API_KEY,
    to: sendData.number,
    msg: sendData.text,
    sender_id: sendData.senderId,
  };

  let { data } = await axios.get(
    `http://clientlogin.bulksmsgh.com/smsapi?key=${body.key}&to=${body.to}&msg=${body.msg}&sender_id=${body.sender_id}`
  );

  return data;
};
