import sendSMS from "../../utils/sendSMS";

function errorObject(statusCode, message) {
  this.statusCode = statusCode;
  this.message = message;
}

const sendError = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    status: false,
  });
};

export default async function handler(req, res) {
  if (!req.body.name || !req.body.message || !req.body.email) {
    let errObj = new errorObject(401, "all fields required");
    return sendError(errObj, res);
  }

  try {
    let text = `from:  ${req.body.name}, 
    contact:  ${req.body.email},
     message: ${req.body.message},
    `;

    let sendData = {
      text,
      number: process.env.NUMBER,
      senderId: "Gcontact",
    };

    await sendSMS(sendData);

    return res.status(200).json({ status: true, name: "John Doe" });
  } catch (err) {
    let errObj = new errorObject(401, "error occured, try later");
    return sendError(errObj, res);
  }
}
